<?php
/**
 * Nirvana Group Admin - Gallery Management Module
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
            $stmt = $pdo->prepare("DELETE FROM gallery WHERE id = ?");
            $stmt->execute([$id]);
            $message = 'Gallery image deleted successfully.';
        }
    } elseif ($action === 'add') {
        $title = sanitizeInput($_POST['title'] ?? '');
        $category = sanitizeInput($_POST['category'] ?? 'Architecture');
        $imageUrl = sanitizeInput($_POST['image_url'] ?? 'assets/images/about_property.jpg');
        $caption = sanitizeInput($_POST['caption'] ?? '');

        if (!empty($title) && !empty($imageUrl)) {
            $stmt = $pdo->prepare("INSERT INTO gallery (title, category, image_url, thumbnail_url, caption, display_order, is_featured, created_at) VALUES (?, ?, ?, ?, ?, 0, 1, NOW())");
            $stmt->execute([$title, $category, $imageUrl, $imageUrl, $caption]);
            $message = 'Gallery photograph added successfully.';
        }
    }
}

$galleryImages = $pdo->query("SELECT * FROM gallery ORDER BY id DESC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Gallery Management | <?= SITE_NAME ?> Admin</title>
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
          <h1 class="text-xl font-serif font-bold text-white">Gallery Management</h1>
          <p class="text-xs text-[#A5A5A5] font-mono">Manage high-resolution architectural photography</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <a href="index.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Overview</a>
        <a href="projects.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Projects</a>
        <a href="gallery.php" class="px-3.5 py-2 rounded-xl bg-[#C6A46A] text-[#101010] font-black text-xs uppercase">Gallery</a>
        <a href="instagram.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Instagram</a>
        <a href="services.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Services</a>
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

    <!-- Add Image Form -->
    <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-4">
      <h3 class="text-lg font-serif font-bold text-white">Add Photo to Gallery</h3>
      <form method="POST" class="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
        <input type="hidden" name="action" value="add">
        <div class="space-y-1">
          <label class="font-bold text-[#D9BD87]">Title *</label>
          <input type="text" name="title" required placeholder="e.g. Tower A Facade" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
        </div>
        <div class="space-y-1">
          <label class="font-bold text-[#D9BD87]">Category</label>
          <select name="category" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
            <option value="Residential">Residential</option>
            <option value="Commercial">Commercial</option>
            <option value="Villas">Villas</option>
            <option value="Construction">Construction</option>
            <option value="Architecture">Architecture</option>
          </select>
        </div>
        <div class="space-y-1">
          <label class="font-bold text-[#D9BD87]">Image URL / Path *</label>
          <input type="text" name="image_url" required value="assets/images/about_property.jpg" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
        </div>
        <div class="space-y-1 sm:col-span-3">
          <label class="font-bold text-[#D9BD87]">Caption / Description</label>
          <input type="text" name="caption" placeholder="Short description of this architectural photograph..." class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
        </div>
        <div class="flex items-end">
          <button type="submit" class="w-full py-2.5 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] font-black uppercase tracking-wider">
            + Upload Photo
          </button>
        </div>
      </form>
    </div>

    <!-- Gallery Grid -->
    <div class="p-6 sm:p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-6">
      <h3 class="text-xl font-serif font-bold text-white">Current Gallery Images (<?= count($galleryImages) ?>)</h3>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <?php foreach ($galleryImages as $img): ?>
          <div class="rounded-2xl overflow-hidden bg-[#101010] border border-[#C6A46A]/20 flex flex-col justify-between">
            <div class="h-44 overflow-hidden relative">
              <img src="<?= BASE_URL ?>/<?= htmlspecialchars($img['image_url']) ?>" alt="<?= htmlspecialchars($img['title']) ?>" class="w-full h-full object-cover">
              <span class="absolute top-2 left-2 px-2.5 py-0.5 rounded bg-[#101010]/90 text-[#D9BD87] text-[10px] font-mono">
                <?= htmlspecialchars($img['category']) ?>
              </span>
            </div>
            <div class="p-4 space-y-2">
              <h4 class="text-sm font-bold text-white truncate"><?= htmlspecialchars($img['title']) ?></h4>
              <p class="text-xs text-[#A5A5A5] line-clamp-2"><?= htmlspecialchars($img['caption']) ?></p>
              <div class="pt-2 border-t border-[#191919] flex justify-end">
                <form method="POST" onsubmit="return confirm('Delete this photograph?');">
                  <input type="hidden" name="action" value="delete">
                  <input type="hidden" name="id" value="<?= $img['id'] ?>">
                  <button type="submit" class="px-3 py-1 rounded bg-red-950/80 text-red-300 text-xs font-bold">Delete</button>
                </form>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>
    </div>

  </div>

</body>
</html>
