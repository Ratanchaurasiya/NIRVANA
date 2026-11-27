// Production static server for the built site in dist/ (no dependencies).
// Run `npm run build` first, then `node server.js` (PM2 does this via nimbus.yaml).
import { createServer } from 'node:http';
import { createReadStream, existsSync } from 'node:fs';
import { stat } from 'node:fs/promises';
import { extname, join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createGzip } from 'node:zlib';

const ROOT = resolve(fileURLToPath(new URL('./dist', import.meta.url)));
const INDEX = join(ROOT, 'index.html');
const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || '127.0.0.1';

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.webp': 'image/webp',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
  '.pdf': 'application/pdf',
  '.mp4': 'video/mp4',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
};
const COMPRESSIBLE = new Set(['.html', '.js', '.css', '.json', '.xml', '.txt', '.svg']);

// Fail loudly if the build is missing, so the reason shows up in the PM2 logs
if (!existsSync(INDEX)) {
  console.error(`Build not found: ${INDEX}. Run "npm run build" before starting the server.`);
  process.exit(1);
}

async function isFile(path) {
  try {
    return (await stat(path)).isFile();
  } catch {
    return false;
  }
}

function sendText(res, status, message) {
  res.writeHead(status, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end(message);
}

const server = createServer(async (req, res) => {
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    res.setHeader('Allow', 'GET, HEAD');
    return sendText(res, 405, 'Method Not Allowed');
  }

  let pathname;
  try {
    pathname = decodeURIComponent(new URL(req.url, 'http://localhost').pathname);
  } catch {
    return sendText(res, 400, 'Bad Request');
  }

  let file = join(ROOT, pathname);
  const insideRoot = file === ROOT || file.startsWith(ROOT + sep);
  const hidden = pathname.split('/').some((part) => part.startsWith('.'));
  if (!insideRoot || hidden || pathname.includes('\0')) return sendText(res, 404, 'Not Found');

  if (!(await isFile(file))) {
    // A missing asset is a real 404; anything else is a React route (/about, /projects/...)
    if (pathname.startsWith('/assets/') || pathname.startsWith('/images/') || TYPES[extname(pathname).toLowerCase()]) {
      return sendText(res, 404, 'Not Found');
    }
    file = INDEX;
  }

  const ext = extname(file).toLowerCase();
  const headers = {
    'Content-Type': TYPES[ext] || 'application/octet-stream',
    'X-Content-Type-Options': 'nosniff',
    'X-Frame-Options': 'SAMEORIGIN',
    'Referrer-Policy': 'strict-origin-when-cross-origin',
    // Hashed build files never change; HTML must be re-checked after each deploy
    'Cache-Control': file === INDEX
      ? 'no-cache'
      : file.startsWith(join(ROOT, 'assets') + sep)
        ? 'public, max-age=31536000, immutable'
        : 'public, max-age=604800',
  };

  const gzip = COMPRESSIBLE.has(ext) && /\bgzip\b/.test(req.headers['accept-encoding'] || '');
  if (COMPRESSIBLE.has(ext)) headers.Vary = 'Accept-Encoding';
  if (gzip) headers['Content-Encoding'] = 'gzip';

  res.writeHead(200, headers);
  if (req.method === 'HEAD') return res.end();

  const stream = createReadStream(file);
  stream.on('error', () => res.destroy());
  if (gzip) stream.pipe(createGzip()).pipe(res);
  else stream.pipe(res);
});

server.on('error', (err) => {
  console.error(`Server failed to start: ${err.message}`);
  process.exit(1);
});

server.listen(PORT, HOST, () => console.log(`Serving ${ROOT} on http://${HOST}:${PORT}`));
