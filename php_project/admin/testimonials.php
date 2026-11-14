<?php
/**
 * Nirvana Group Admin - Testimonials Management Module
 */
require_once __DIR__ . '/../includes/functions.php';

if (empty($_SESSION['admin_user_id'])) {
    header("Location: login.php");
    exit;
}

$pdo = getDBConnection();
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    if ($action === 'delete') {
        $id = (int)($_POST['id'] ?? 0);
        if ($id > 0) {
            $stmt = $pdo->prepare("DELETE FROM testimonials WHERE id = ?");
            $stmt->execute([$id]);
            $message = 'Testimonial deleted.';
        }
    } elseif ($action === 'toggle_publish') {
        $id = (int)($_POST['id'] ?? 0);
        if ($id > 0) {
            $stmt = $pdo->prepare("UPDATE testimonials SET is_published = 1 - is_published WHERE id = ?");
            $stmt->execute([$id]);
            $message = 'Publication status toggled.';
        }
    } elseif ($action === 'add') {
        $name = sanitizeInput($_POST['client_name'] ?? '');
        $designation = sanitizeInput($_POST['designation'] ?? '');
        $project = sanitizeInput($_POST['project_name'] ?? '');
        $comment = sanitizeInput($_POST['comment'] ?? '');

        if (!empty($name) && !empty($comment)) {
            $stmt = $pdo->prepare("INSERT INTO testimonials (client_name, designation, project_name, comment, rating, is_published, created_at) VALUES (?, ?, ?, ?, 5, 1, NOW())");
            $stmt->execute([$name, $designation, $project, $comment]);
            $message = 'Testimonial added successfully.';
        }
    }
}

$testimonials = $pdo->query("SELECT * FROM testimonials ORDER BY id DESC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Testimonials Management | <?= SITE_NAME ?> Admin</title>
  <link rel="icon" type="image/svg+xml" href="<?= BASE_URL ?>/assets/favicon.svg">
  <link rel="stylesheet" href="<?= BASE_URL ?>/assets/css/style.css">
</head>
<body class="bg-[#101010] text-[#F5F1E9] min-h-screen p-4 sm:p-8">

  <div class="max-w-7xl mx-auto space-y-8">
    
    <!-- Top Header Navigation -->
    <div class="p-6 rounded-2xl bg-[#191919] border border-[#C6A46A]/30 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-[#C6A46A] text-[#101010] flex items-center justify-center font-bold">
          <svg viewBox="0 0 100 100" class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 12 L84 78 H68 L50 42 L32 78 H16 L50 12 Z" fill="#101010" />
          </svg>
        </div>
        <div>
          <h1 class="text-xl font-serif font-bold text-white">Client Testimonials</h1>
          <p class="text-xs text-[#A5A5A5] font-mono">Manage verified client reviews and statements</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <a href="index.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Overview</a>
        <a href="projects.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Projects</a>
        <a href="gallery.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Gallery</a>
        <a href="instagram.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Instagram</a>
        <a href="services.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Services</a>
        <a href="testimonials.php" class="px-3.5 py-2 rounded-xl bg-[#C6A46A] text-[#101010] font-black text-xs uppercase">Testimonials</a>
        <a href="enquiries.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Enquiries</a>
        <a href="settings.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Settings</a>
        <a href="logout.php" class="px-3.5 py-2 rounded-xl bg-red-950/80 text-red-200 border border-red-500/40 text-xs font-bold uppercase">Logout</a>
      </div>
    </div>

    <?php if ($message): ?>
      <div class="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-bold">
        <?= htmlspecialchars($message) ?>
      </div>
    <?php endif; ?>

    <!-- Add Testimonial -->
    <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-4">
      <h3 class="text-lg font-serif font-bold text-white">Add Verified Testimonial</h3>
      <form method="POST" class="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
        <input type="hidden" name="action" value="add">
        <div class="space-y-1">
          <label class="font-bold text-[#D9BD87]">Client Name *</label>
          <input type="text" name="client_name" required placeholder="e.g. Ramesh Patel" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
        </div>
        <div class="space-y-1">
          <label class="font-bold text-[#D9BD87]">Designation / Title</label>
          <input type="text" name="designation" placeholder="e.g. Managing Director" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
        </div>
        <div class="space-y-1">
          <label class="font-bold text-[#D9BD87]">Project Associated</label>
          <input type="text" name="project_name" placeholder="e.g. Nirvana Abode, Jagatpur" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
        </div>
        <div class="space-y-1 sm:col-span-2">
          <label class="font-bold text-[#D9BD87]">Client Testimonial *</label>
          <textarea name="comment" rows="2" required placeholder="Client review text..." class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white resize-none"></textarea>
        </div>
        <div class="flex items-end">
          <button type="submit" class="w-full py-3 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] font-black uppercase tracking-wider">
            + Publish Testimonial
          </button>
        </div>
      </form>
    </div>

    <!-- Testimonials List -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <?php foreach ($testimonials as $t): ?>
        <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 flex flex-col justify-between space-y-4">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-xs font-mono text-[#D9BD87] font-bold"><?= htmlspecialchars($t['project_name']) ?></span>
              <span class="text-[#C6A46A]">★★★★★</span>
            </div>
            <p class="text-xs text-[#F5F1E9] italic leading-relaxed">
              "<?= htmlspecialchars($t['comment']) ?>"
            </p>
          </div>
          <div class="pt-3 border-t border-[#101010] flex items-center justify-between text-xs">
            <div>
              <h5 class="font-bold text-white"><?= htmlspecialchars($t['client_name']) ?></h5>
              <p class="text-[10px] text-[#A5A5A5]"><?= htmlspecialchars($t['designation']) ?></p>
            </div>
            <div class="flex items-center gap-2">
              <form method="POST" class="inline">
                <input type="hidden" name="action" value="toggle_publish">
                <input type="hidden" name="id" value="<?= $t['id'] ?>">
                <button type="submit" class="px-2.5 py-1 rounded text-[10px] font-mono <?= $t['is_published'] ? 'bg-[#C6A46A] text-[#101010] font-bold' : 'bg-[#101010] text-[#A5A5A5]' ?>">
                  <?= $t['is_published'] ? 'Live' : 'Hidden' ?>
                </button>
              </form>
              <form method="POST" class="inline" onsubmit="return confirm('Delete this review?');">
                <input type="hidden" name="action" value="delete">
                <input type="hidden" name="id" value="<?= $t['id'] ?>">
                <button type="submit" class="px-2.5 py-1 rounded bg-red-950/80 text-red-300 text-[10px] font-bold">Delete</button>
              </form>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

  </div>

</body>
</html>
