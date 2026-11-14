<?php
/**
 * Nirvana Group Admin - Website Settings Module
 */
require_once __DIR__ . '/../includes/functions.php';

if (empty($_SESSION['admin_user_id'])) {
    header("Location: login.php");
    exit;
}

$pdo = getDBConnection();
$message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $phone = sanitizeInput($_POST['company_phone'] ?? '');
    $email = sanitizeInput($_POST['company_email'] ?? '');
    $address = sanitizeInput($_POST['company_address'] ?? '');
    $tagline = sanitizeInput($_POST['site_tagline'] ?? '');
    $insta = sanitizeInput($_POST['instagram_url'] ?? '');

    $settingsToUpdate = [
        'company_phone' => $phone,
        'company_email' => $email,
        'company_address' => $address,
        'site_tagline' => $tagline,
        'instagram_url' => $insta
    ];

    foreach ($settingsToUpdate as $key => $val) {
        $stmt = $pdo->prepare("INSERT INTO settings (setting_key, setting_value, updated_at) VALUES (?, ?, NOW()) ON DUPLICATE KEY UPDATE setting_value = ?, updated_at = NOW()");
        $stmt->execute([$key, $val, $val]);
    }
    $message = 'Settings updated successfully.';
}

$settingsRaw = $pdo->query("SELECT setting_key, setting_value FROM settings")->fetchAll(PDO::FETCH_KEY_PAIR);
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Website Settings | <?= SITE_NAME ?> Admin</title>
  <link rel="icon" type="image/svg+xml" href="<?= BASE_URL ?>/assets/favicon.svg">
  <link rel="stylesheet" href="<?= BASE_URL ?>/assets/css/style.css">
</head>
<body class="bg-[#101010] text-[#F5F1E9] min-h-screen p-4 sm:p-8">

  <div class="max-w-4xl mx-auto space-y-8">
    
    <!-- Top Header Navigation -->
    <div class="p-6 rounded-2xl bg-[#191919] border border-[#C6A46A]/30 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3">
        <div class="w-10 h-10 rounded-xl bg-[#C6A46A] text-[#101010] flex items-center justify-center font-bold">
          <svg viewBox="0 0 100 100" class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 12 L84 78 H68 L50 42 L32 78 H16 L50 12 Z" fill="#101010" />
          </svg>
        </div>
        <div>
          <h1 class="text-xl font-serif font-bold text-white">Website Settings</h1>
          <p class="text-xs text-[#A5A5A5] font-mono">Manage phone, email, office address & social links</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <a href="index.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Overview</a>
        <a href="projects.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Projects</a>
        <a href="gallery.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Gallery</a>
        <a href="instagram.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Instagram</a>
        <a href="services.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Services</a>
        <a href="enquiries.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Enquiries</a>
        <a href="settings.php" class="px-3.5 py-2 rounded-xl bg-[#C6A46A] text-[#101010] font-black text-xs uppercase">Settings</a>
        <a href="logout.php" class="px-3.5 py-2 rounded-xl bg-red-950/80 text-red-200 border border-red-500/40 text-xs font-bold uppercase">Logout</a>
      </div>
    </div>

    <?php if ($message): ?>
      <div class="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-bold">
        <?= htmlspecialchars($message) ?>
      </div>
    <?php endif; ?>

    <!-- Settings Form -->
    <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-6 shadow-2xl">
      <form method="POST" class="space-y-5 text-xs">
        
        <div class="space-y-1.5">
          <label class="font-bold text-[#D9BD87] uppercase tracking-wider block">Official Brand Tagline</label>
          <input
            type="text"
            name="site_tagline"
            value="<?= htmlspecialchars($settingsRaw['site_tagline'] ?? SITE_TAGLINE) ?>"
            class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-white text-sm"
          >
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div class="space-y-1.5">
            <label class="font-bold text-[#D9BD87] uppercase tracking-wider block">Company Phone Number</label>
            <input
              type="text"
              name="company_phone"
              value="<?= htmlspecialchars($settingsRaw['company_phone'] ?? COMPANY_PHONE) ?>"
              class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-white text-sm"
            >
          </div>

          <div class="space-y-1.5">
            <label class="font-bold text-[#D9BD87] uppercase tracking-wider block">Official Contact Email</label>
            <input
              type="email"
              name="company_email"
              value="<?= htmlspecialchars($settingsRaw['company_email'] ?? COMPANY_EMAIL) ?>"
              class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-white text-sm"
            >
          </div>
        </div>

        <div class="space-y-1.5">
          <label class="font-bold text-[#D9BD87] uppercase tracking-wider block">Corporate Office Address</label>
          <input
            type="text"
            name="company_address"
            value="<?= htmlspecialchars($settingsRaw['company_address'] ?? COMPANY_ADDRESS) ?>"
            class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-white text-sm"
          >
        </div>

        <div class="space-y-1.5">
          <label class="font-bold text-[#D9BD87] uppercase tracking-wider block">Official Instagram Profile URL</label>
          <input
            type="url"
            name="instagram_url"
            value="<?= htmlspecialchars($settingsRaw['instagram_url'] ?? OFFICIAL_INSTAGRAM_URL) ?>"
            class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-white text-sm"
          >
        </div>

        <button
          type="submit"
          class="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(198,164,106,0.6)] transition-all"
        >
          Save Website Settings
        </button>
      </form>
    </div>

  </div>

</body>
</html>
