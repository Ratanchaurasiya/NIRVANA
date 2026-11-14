<?php
/**
 * Nirvana Group - Admin Instagram & Media Management Center
 * Luxury Black & Gold Design System
 */
require_once __DIR__ . '/../includes/functions.php';

if (empty($_SESSION['admin_user_id'])) {
    header("Location: login.php");
    exit;
}

$pdo = getDBConnection();
$msg = '';
$err = '';

// Handle Add Reel
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'add_reel') {
    $title = sanitizeInput($_POST['title'] ?? '');
    $reelUrl = sanitizeInput($_POST['reel_url'] ?? '');
    $thumb = sanitizeInput($_POST['thumbnail_url'] ?? 'assets/images/hero_building.jpg');
    $tag = sanitizeInput($_POST['project_tag'] ?? 'Nirvana Development');
    $category = sanitizeInput($_POST['category'] ?? 'Project Walkthrough');
    $caption = sanitizeInput($_POST['caption'] ?? '');

    if (!empty($title) && !empty($reelUrl)) {
        $stmt = $pdo->prepare("INSERT INTO instagram_reels (title, reel_url, thumbnail_url, project_tag, category, caption, is_featured, created_at) VALUES (?, ?, ?, ?, ?, ?, 1, NOW())");
        $stmt->execute([$title, $reelUrl, $thumb, $tag, $category, $caption]);
        $msg = 'Instagram reel added successfully!';
    } else {
        $err = 'Title and Reel URL are required.';
    }
}

// Handle Add Gallery Image
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action']) && $_POST['action'] === 'add_gallery') {
    $title = sanitizeInput($_POST['title'] ?? '');
    $imgUrl = sanitizeInput($_POST['image_url'] ?? 'assets/images/about_property.jpg');
    $postUrl = sanitizeInput($_POST['post_url'] ?? 'https://www.instagram.com/nirvana.group._/');
    $category = sanitizeInput($_POST['category'] ?? 'Architecture');
    $caption = sanitizeInput($_POST['caption'] ?? '');

    if (!empty($title)) {
        $stmt = $pdo->prepare("INSERT INTO instagram_gallery (title, image_url, post_url, category, caption, is_active, created_at) VALUES (?, ?, ?, ?, ?, 1, NOW())");
        $stmt->execute([$title, $imgUrl, $postUrl, $category, $caption]);
        $msg = 'Gallery image added successfully!';
    }
}

// Handle Delete Reel
if (isset($_GET['delete_reel'])) {
    $id = intval($_GET['delete_reel']);
    $pdo->prepare("DELETE FROM instagram_reels WHERE id = ?")->execute([$id]);
    $msg = 'Reel deleted.';
}

// Handle Delete Gallery
if (isset($_GET['delete_gallery'])) {
    $id = intval($_GET['delete_gallery']);
    $pdo->prepare("DELETE FROM instagram_gallery WHERE id = ?")->execute([$id]);
    $msg = 'Gallery image removed.';
}

$reels = $pdo->query("SELECT * FROM instagram_reels ORDER BY id DESC")->fetchAll();
$gallery = $pdo->query("SELECT * FROM instagram_gallery ORDER BY id DESC")->fetchAll();
$account = getPrimaryInstagramAccount();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manage Instagram & Media | <?= SITE_NAME ?></title>
  <link rel="icon" type="image/svg+xml" href="<?= BASE_URL ?>/assets/favicon.svg">
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="stylesheet" href="<?= BASE_URL ?>/assets/css/style.css">
</head>
<body class="bg-[#101010] text-slate-100 min-h-screen p-4 sm:p-8">

  <div class="max-w-7xl mx-auto space-y-8">
    
    <!-- Header -->
    <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 flex flex-col md:flex-row md:items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#C6A46A] to-[#D9BD87] p-0.5 shadow-lg">
          <div class="w-full h-full bg-[#101010] rounded-[10px] flex items-center justify-center">
            <svg class="w-5 h-5 text-[#C6A46A]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke-width="2"/>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" stroke-width="2"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </div>
        </div>
        <div>
          <h1 class="text-xl font-serif font-black text-white">INSTAGRAM & MEDIA HUB</h1>
          <p class="text-xs text-[#A5A5A5] font-mono">Channel: @<?= htmlspecialchars($account['username']) ?> (<a href="<?= htmlspecialchars($account['profile_url']) ?>" target="_blank" class="text-[#C6A46A] underline">View Profile ↗</a>)</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <a href="index.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Overview</a>
        <a href="projects.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Projects</a>
        <a href="gallery.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Gallery</a>
        <a href="instagram.php" class="px-3.5 py-2 rounded-xl bg-[#C6A46A] text-[#101010] font-black text-xs uppercase">Instagram</a>
        <a href="services.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Services</a>
        <a href="enquiries.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Enquiries</a>
        <a href="settings.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Settings</a>
        <a href="<?= BASE_URL ?>/instagram.php" target="_blank" class="px-3.5 py-2 rounded-xl bg-[#101010] text-white border border-slate-700 text-xs font-bold uppercase hover:border-[#C6A46A]">View Instagram Feed ↗</a>
        <a href="logout.php" class="px-3.5 py-2 rounded-xl bg-red-950/80 text-red-200 border border-red-500/40 text-xs font-bold uppercase hover:bg-red-900">Logout</a>
      </div>
    </div>

    <?php if ($msg): ?>
      <div class="p-3.5 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-200 text-xs font-medium"><?= htmlspecialchars($msg) ?></div>
    <?php endif; ?>
    <?php if ($err): ?>
      <div class="p-3.5 rounded-xl bg-red-950/80 border border-red-500/40 text-red-200 text-xs font-medium"><?= htmlspecialchars($err) ?></div>
    <?php endif; ?>

    <!-- Two-Column Add Form Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
      
      <!-- Add Reel Form -->
      <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-4">
        <h2 class="text-base font-serif font-bold text-white flex items-center gap-2">
          <span class="text-[#C6A46A]">✦</span>
          <span>Add New Instagram Reel</span>
        </h2>

        <form method="POST" action="instagram.php" class="space-y-3 text-xs">
          <input type="hidden" name="action" value="add_reel">

          <div>
            <label class="font-bold text-[#A5A5A5] block mb-1">Reel Title *</label>
            <input type="text" name="title" required placeholder="e.g. Nirvana Abode Sky Lounge Tour" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
          </div>

          <div>
            <label class="font-bold text-[#A5A5A5] block mb-1">Instagram Reel URL *</label>
            <input type="url" name="reel_url" required placeholder="https://www.instagram.com/reel/..." value="https://www.instagram.com/nirvana.group._/" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-[#A5A5A5] block mb-1">Project Tag</label>
              <input type="text" name="project_tag" placeholder="e.g. Nirvana Abode" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
            </div>
            <div>
              <label class="font-bold text-[#A5A5A5] block mb-1">Category</label>
              <input type="text" name="category" placeholder="e.g. Walkthrough" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
            </div>
          </div>

          <div>
            <label class="font-bold text-[#A5A5A5] block mb-1">Thumbnail Path or URL</label>
            <input type="text" name="thumbnail_url" value="assets/images/hero_building.jpg" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
          </div>

          <div>
            <label class="font-bold text-[#A5A5A5] block mb-1">Caption / Hashtags</label>
            <textarea name="caption" rows="2" placeholder="Caption with #NirvanaGroup #Ahmedabad" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none"></textarea>
          </div>

          <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-[#C6A46A] to-[#D9BD87] text-[#101010] font-black uppercase tracking-wider hover:opacity-90">Save Instagram Reel</button>
        </form>
      </div>

      <!-- Add Gallery Photo Form -->
      <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-4">
        <h2 class="text-base font-serif font-bold text-white flex items-center gap-2">
          <span class="text-[#C6A46A]">✦</span>
          <span>Add Photo to Instagram Gallery</span>
        </h2>

        <form method="POST" action="instagram.php" class="space-y-3 text-xs">
          <input type="hidden" name="action" value="add_gallery">

          <div>
            <label class="font-bold text-[#A5A5A5] block mb-1">Photo Title *</label>
            <input type="text" name="title" required placeholder="e.g. Grand Double Height Entrance Lobby" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
          </div>

          <div>
            <label class="font-bold text-[#A5A5A5] block mb-1">Image Asset Path *</label>
            <input type="text" name="image_url" required value="assets/images/about_property.jpg" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
          </div>

          <div class="grid grid-cols-2 gap-3">
            <div>
              <label class="font-bold text-[#A5A5A5] block mb-1">Category</label>
              <input type="text" name="category" placeholder="Residential" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
            </div>
            <div>
              <label class="font-bold text-[#A5A5A5] block mb-1">Post Link</label>
              <input type="url" name="post_url" value="https://www.instagram.com/nirvana.group._/" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
            </div>
          </div>

          <div>
            <label class="font-bold text-[#A5A5A5] block mb-1">Caption</label>
            <textarea name="caption" rows="2" placeholder="Description of the architectural photograph" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none"></textarea>
          </div>

          <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-[#C6A46A] to-[#D9BD87] text-[#101010] font-black uppercase tracking-wider hover:opacity-90">Publish Gallery Photo</button>
        </form>
      </div>

    </div>

    <!-- Active Reels Table -->
    <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-4">
      <h3 class="text-lg font-serif font-bold text-white">Current Reels in MySQL (<?= count($reels) ?>)</h3>
      <div class="overflow-x-auto">
        <table class="w-full text-left text-xs">
          <thead>
            <tr class="border-b border-slate-800 text-[#A5A5A5] font-mono">
              <th class="py-2.5 px-3">Title</th>
              <th class="py-2.5 px-3">Category</th>
              <th class="py-2.5 px-3">Project</th>
              <th class="py-2.5 px-3">Reel Link</th>
              <th class="py-2.5 px-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800/60">
            <?php foreach ($reels as $r): ?>
              <tr>
                <td class="py-2.5 px-3 font-bold text-white"><?= htmlspecialchars($r['title']) ?></td>
                <td class="py-2.5 px-3 font-mono text-[#C6A46A]"><?= htmlspecialchars($r['category']) ?></td>
                <td class="py-2.5 px-3 text-[#A5A5A5]"><?= htmlspecialchars($r['project_tag']) ?></td>
                <td class="py-2.5 px-3 font-mono text-pink-400"><a href="<?= htmlspecialchars($r['reel_url']) ?>" target="_blank" class="underline">Open Reel ↗</a></td>
                <td class="py-2.5 px-3 text-right"><a href="instagram.php?delete_reel=<?= $r['id'] ?>" onclick="return confirm('Delete this reel?');" class="text-red-400 hover:underline">Delete</a></td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>

  </div>

</body>
</html>
