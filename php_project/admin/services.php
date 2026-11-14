<?php
/**
 * Nirvana Group Admin - Services Management Module
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

    if ($action === 'save') {
        $id = (int)($_POST['id'] ?? 0);
        $title = sanitizeInput($_POST['title'] ?? '');
        $shortDesc = sanitizeInput($_POST['short_desc'] ?? '');
        $fullDesc = sanitizeInput($_POST['full_desc'] ?? '');

        if ($id > 0) {
            $stmt = $pdo->prepare("UPDATE services SET title=?, short_desc=?, full_desc=? WHERE id=?");
            $stmt->execute([$title, $shortDesc, $fullDesc, $id]);
            $message = 'Service updated successfully.';
        }
    }
}

$services = $pdo->query("SELECT * FROM services ORDER BY display_order ASC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Services Management | <?= SITE_NAME ?> Admin</title>
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
          <h1 class="text-xl font-serif font-bold text-white">Services & Capabilities</h1>
          <p class="text-xs text-[#A5A5A5] font-mono">Manage development, planning & construction services</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <a href="index.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Overview</a>
        <a href="projects.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Projects</a>
        <a href="gallery.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Gallery</a>
        <a href="instagram.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Instagram</a>
        <a href="services.php" class="px-3.5 py-2 rounded-xl bg-[#C6A46A] text-[#101010] font-black text-xs uppercase">Services</a>
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

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <?php foreach ($services as $serv): ?>
        <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-4">
          <form method="POST" class="space-y-3 text-xs">
            <input type="hidden" name="action" value="save">
            <input type="hidden" name="id" value="<?= $serv['id'] ?>">

            <div class="space-y-1">
              <label class="font-bold text-[#D9BD87]">Service Title</label>
              <input type="text" name="title" value="<?= htmlspecialchars($serv['title']) ?>" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white font-bold">
            </div>

            <div class="space-y-1">
              <label class="font-bold text-[#D9BD87]">Short Description</label>
              <textarea name="short_desc" rows="2" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2 text-white resize-none"><?= htmlspecialchars($serv['short_desc']) ?></textarea>
            </div>

            <div class="space-y-1">
              <label class="font-bold text-[#D9BD87]">Detailed Scope Description</label>
              <textarea name="full_desc" rows="3" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2 text-white resize-none"><?= htmlspecialchars($serv['full_desc']) ?></textarea>
            </div>

            <button type="submit" class="px-5 py-2 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] font-black uppercase text-xs">
              Save Changes
            </button>
          </form>
        </div>
      <?php endforeach; ?>
    </div>

  </div>

</body>
</html>
