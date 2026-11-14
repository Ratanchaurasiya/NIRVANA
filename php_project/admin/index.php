<?php
/**
 * Nirvana Group - Master Admin Dashboard
 * Luxury Black & Gold Theme with full module navigation & live metrics
 */
require_once __DIR__ . '/../includes/functions.php';

if (empty($_SESSION['admin_user_id'])) {
    header("Location: login.php");
    exit;
}

$pdo = getDBConnection();

// Fetch summary metrics
$enquiryCount = $pdo->query("SELECT COUNT(*) FROM enquiries")->fetchColumn();
$visitCount = $pdo->query("SELECT COUNT(*) FROM site_visits")->fetchColumn();
$projectCount = $pdo->query("SELECT COUNT(*) FROM projects")->fetchColumn();
$galleryCount = $pdo->query("SELECT COUNT(*) FROM gallery")->fetchColumn();
$reelsCount = $pdo->query("SELECT COUNT(*) FROM instagram_reels")->fetchColumn();

// Fetch latest 6 enquiries
$stmt = $pdo->query("SELECT * FROM enquiries ORDER BY id DESC LIMIT 6");
$latestEnquiries = $stmt->fetchAll();

// Fetch latest 6 site visits
$stmt = $pdo->query("SELECT * FROM site_visits ORDER BY id DESC LIMIT 6");
$latestVisits = $stmt->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Dashboard | <?= SITE_NAME ?></title>
  <link rel="icon" type="image/svg+xml" href="<?= BASE_URL ?>/assets/favicon.svg">
  <link rel="stylesheet" href="<?= BASE_URL ?>/assets/css/style.css">
</head>
<body class="bg-[#101010] text-[#F5F1E9] min-h-screen p-4 sm:p-8">

  <div class="max-w-7xl mx-auto space-y-8">
    
    <!-- Top Header Navigation -->
    <div class="p-6 rounded-2xl bg-[#191919] border border-[#C6A46A]/30 flex flex-col md:flex-row items-center justify-between gap-4">
      <div class="flex items-center gap-3.5">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D9BD87] via-[#C6A46A] to-[#997825] p-0.5 flex items-center justify-center">
          <div class="w-full h-full bg-[#101010] rounded-[10px] flex items-center justify-center">
            <svg viewBox="0 0 100 100" class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 12 L84 78 H68 L50 42 L32 78 H16 L50 12 Z" fill="#C6A46A" />
            </svg>
          </div>
        </div>
        <div>
          <h1 class="text-xl font-serif font-black text-white leading-tight">NIRVANA GROUP ADMIN</h1>
          <p class="text-xs text-[#A5A5A5] font-mono">Logged in as: <?= htmlspecialchars($_SESSION['admin_username']) ?> (<?= htmlspecialchars($_SESSION['admin_role']) ?>)</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <a href="index.php" class="px-3.5 py-2 rounded-xl bg-[#C6A46A] text-[#101010] font-black text-xs uppercase">Overview</a>
        <a href="projects.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Projects</a>
        <a href="gallery.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Gallery</a>
        <a href="instagram.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Instagram</a>
        <a href="services.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Services</a>
        <a href="enquiries.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Enquiries</a>
        <a href="settings.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase hover:bg-[#C6A46A]/20">Settings</a>
        <a href="<?= BASE_URL ?>/" target="_blank" class="px-3.5 py-2 rounded-xl bg-[#101010] text-white border border-slate-700 text-xs font-bold uppercase hover:border-[#C6A46A]">View Site ↗</a>
        <a href="logout.php" class="px-3.5 py-2 rounded-xl bg-red-950/80 text-red-200 border border-red-500/40 text-xs font-bold uppercase hover:bg-red-900">Logout</a>
      </div>
    </div>

    <!-- Analytics Metric Cards -->
    <div class="grid grid-cols-2 lg:grid-cols-5 gap-4">
      <div class="p-6 rounded-2xl bg-[#191919] border border-[#C6A46A]/30 space-y-1">
        <span class="text-xs font-mono text-[#A5A5A5] uppercase">Enquiries</span>
        <p class="text-3xl font-serif font-black text-white"><?= $enquiryCount ?></p>
        <span class="text-[11px] text-[#C6A46A] font-mono">Leads Captured</span>
      </div>

      <div class="p-6 rounded-2xl bg-[#191919] border border-[#C6A46A]/30 space-y-1">
        <span class="text-xs font-mono text-[#A5A5A5] uppercase">Site Visits</span>
        <p class="text-3xl font-serif font-black text-white"><?= $visitCount ?></p>
        <span class="text-[11px] text-emerald-400 font-mono">Bookings</span>
      </div>

      <div class="p-6 rounded-2xl bg-[#191919] border border-[#C6A46A]/30 space-y-1">
        <span class="text-xs font-mono text-[#A5A5A5] uppercase">Projects</span>
        <p class="text-3xl font-serif font-black text-white"><?= $projectCount ?></p>
        <span class="text-[11px] text-[#D9BD87] font-mono">In Database</span>
      </div>

      <div class="p-6 rounded-2xl bg-[#191919] border border-[#C6A46A]/30 space-y-1">
        <span class="text-xs font-mono text-[#A5A5A5] uppercase">Gallery</span>
        <p class="text-3xl font-serif font-black text-white"><?= $galleryCount ?></p>
        <span class="text-[11px] text-[#C6A46A] font-mono">Photographs</span>
      </div>

      <div class="p-6 rounded-2xl bg-[#191919] border border-[#C6A46A]/30 space-y-1 col-span-2 lg:col-span-1">
        <span class="text-xs font-mono text-[#A5A5A5] uppercase">Instagram</span>
        <p class="text-3xl font-serif font-black text-white"><?= $reelsCount ?></p>
        <span class="text-[11px] text-pink-400 font-mono">Reels Linked</span>
      </div>
    </div>

    <!-- Latest Enquiries Section -->
    <div class="p-6 sm:p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-6">
      <div class="flex items-center justify-between border-b border-[#101010] pb-4">
        <div>
          <h3 class="text-xl font-serif font-bold text-white">Recent Client Enquiries</h3>
          <p class="text-xs text-[#A5A5A5] font-mono">Direct website consultation submissions</p>
        </div>
        <a href="enquiries.php" class="text-xs font-mono text-[#D9BD87] font-bold hover:underline">View All Enquiries →</a>
      </div>

      <div class="overflow-x-auto rounded-2xl border border-[#101010]">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-[#101010] text-[#D9BD87] font-mono uppercase tracking-wider">
              <th class="py-3 px-4 font-bold">ID</th>
              <th class="py-3 px-4 font-bold">Client Name</th>
              <th class="py-3 px-4 font-bold">Phone Number</th>
              <th class="py-3 px-4 font-bold">Project Interest</th>
              <th class="py-3 px-4 font-bold">Status</th>
              <th class="py-3 px-4 font-bold text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#101010] text-[#F5F1E9]">
            <?php if (empty($latestEnquiries)): ?>
              <tr>
                <td colspan="6" class="py-6 text-center text-[#A5A5A5] font-mono">No enquiries submitted yet.</td>
              </tr>
            <?php endif; ?>
            <?php foreach ($latestEnquiries as $enq): ?>
              <tr class="hover:bg-[#101010]/50 transition-colors">
                <td class="py-3 px-4 font-mono"><?= $enq['id'] ?></td>
                <td class="py-3 px-4 font-bold text-white"><?= htmlspecialchars($enq['full_name']) ?></td>
                <td class="py-3 px-4 font-mono text-[#D9BD87]"><?= htmlspecialchars($enq['phone']) ?></td>
                <td class="py-3 px-4"><?= htmlspecialchars($enq['project_interest'] ?? 'General') ?></td>
                <td class="py-3 px-4">
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#101010] border border-[#C6A46A]/30 text-[#D9BD87]">
                    <?= htmlspecialchars($enq['status']) ?>
                  </span>
                </td>
                <td class="py-3 px-4 text-center">
                  <a href="https://wa.me/<?= preg_replace('/[^0-9]/', '', $enq['phone']) ?>" target="_blank" class="px-3 py-1 rounded bg-emerald-600/80 text-white font-bold text-[10px]">WhatsApp</a>
                </td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>

  </div>

</body>
</html>
