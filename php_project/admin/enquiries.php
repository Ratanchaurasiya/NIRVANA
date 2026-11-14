<?php
/**
 * Nirvana Group Admin - Customer Enquiries & Lead Management
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

    if ($action === 'update_status') {
        $id = (int)($_POST['id'] ?? 0);
        $status = sanitizeInput($_POST['status'] ?? 'New');
        if ($id > 0) {
            $stmt = $pdo->prepare("UPDATE enquiries SET status = ? WHERE id = ?");
            $stmt->execute([$status, $id]);
            $message = 'Enquiry status updated.';
        }
    } elseif ($action === 'delete') {
        $id = (int)($_POST['id'] ?? 0);
        if ($id > 0) {
            $stmt = $pdo->prepare("DELETE FROM enquiries WHERE id = ?");
            $stmt->execute([$id]);
            $message = 'Enquiry deleted.';
        }
    }
}

$enquiries = $pdo->query("SELECT * FROM enquiries ORDER BY id DESC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Client Enquiries | <?= SITE_NAME ?> Admin</title>
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
          <h1 class="text-xl font-serif font-bold text-white">Client Enquiries & Leads</h1>
          <p class="text-xs text-[#A5A5A5] font-mono">Confidential investor & buyer inquiry submissions</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <a href="index.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Overview</a>
        <a href="projects.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Projects</a>
        <a href="gallery.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Gallery</a>
        <a href="instagram.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Instagram</a>
        <a href="services.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Services</a>
        <a href="enquiries.php" class="px-3.5 py-2 rounded-xl bg-[#C6A46A] text-[#101010] font-black text-xs uppercase">Enquiries</a>
        <a href="settings.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Settings</a>
        <a href="logout.php" class="px-3.5 py-2 rounded-xl bg-red-950/80 text-red-200 border border-red-500/40 text-xs font-bold uppercase">Logout</a>
      </div>
    </div>

    <?php if ($message): ?>
      <div class="p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs font-bold">
        <?= htmlspecialchars($message) ?>
      </div>
    <?php endif; ?>

    <!-- Enquiries Table -->
    <div class="p-6 sm:p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-6">
      <div class="flex items-center justify-between border-b border-[#101010] pb-4">
        <h3 class="text-xl font-serif font-bold text-white">Submitted Inquiries (<?= count($enquiries) ?>)</h3>
      </div>

      <div class="overflow-x-auto rounded-2xl border border-[#101010]">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-[#101010] text-[#D9BD87] font-mono uppercase tracking-wider">
              <th class="py-4 px-4 font-bold">ID</th>
              <th class="py-4 px-4 font-bold">Full Name</th>
              <th class="py-4 px-4 font-bold">Phone & Email</th>
              <th class="py-4 px-4 font-bold">Interested Project</th>
              <th class="py-4 px-4 font-bold">Message Details</th>
              <th class="py-4 px-4 font-bold">Status</th>
              <th class="py-4 px-4 font-bold text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#101010] text-[#F5F1E9]">
            <?php if (empty($enquiries)): ?>
              <tr>
                <td colspan="7" class="py-8 text-center text-[#A5A5A5] font-mono">No customer enquiries received yet.</td>
              </tr>
            <?php endif; ?>

            <?php foreach ($enquiries as $enq): ?>
              <tr class="hover:bg-[#101010]/50 transition-colors">
                <td class="py-4 px-4 font-mono"><?= $enq['id'] ?></td>
                <td class="py-4 px-4 font-bold text-white"><?= htmlspecialchars($enq['full_name']) ?></td>
                <td class="py-4 px-4 text-xs font-mono">
                  <a href="tel:<?= htmlspecialchars($enq['phone']) ?>" class="text-[#D9BD87] font-bold block"><?= htmlspecialchars($enq['phone']) ?></a>
                  <span class="text-[#A5A5A5]"><?= htmlspecialchars($enq['email'] ?? '—') ?></span>
                </td>
                <td class="py-4 px-4 text-xs text-[#C6A46A] font-bold">
                  <?= htmlspecialchars($enq['project_interest'] ?? 'General') ?>
                </td>
                <td class="py-4 px-4 text-xs text-[#A5A5A5] max-w-xs">
                  <div class="line-clamp-2"><?= htmlspecialchars($enq['message'] ?? 'No message provided') ?></div>
                </td>
                <td class="py-4 px-4">
                  <form method="POST" class="inline">
                    <input type="hidden" name="action" value="update_status">
                    <input type="hidden" name="id" value="<?= $enq['id'] ?>">
                    <select name="status" onchange="this.form.submit()" class="bg-[#101010] border border-[#C6A46A]/30 text-xs rounded-lg px-2 py-1 text-white">
                      <option value="New" <?= ($enq['status'] === 'New') ? 'selected' : '' ?>>New</option>
                      <option value="Contacted" <?= ($enq['status'] === 'Contacted') ? 'selected' : '' ?>>Contacted</option>
                      <option value="Scheduled" <?= ($enq['status'] === 'Scheduled') ? 'selected' : '' ?>>Scheduled</option>
                      <option value="Closed" <?= ($enq['status'] === 'Closed') ? 'selected' : '' ?>>Closed</option>
                    </select>
                  </form>
                </td>
                <td class="py-4 px-4 text-center">
                  <a href="https://wa.me/<?= preg_replace('/[^0-9]/', '', $enq['phone']) ?>" target="_blank" class="px-2.5 py-1 rounded bg-emerald-600/80 text-white text-[11px] font-bold mr-1">WhatsApp</a>
                  <form method="POST" class="inline" onsubmit="return confirm('Delete this record?');">
                    <input type="hidden" name="action" value="delete">
                    <input type="hidden" name="id" value="<?= $enq['id'] ?>">
                    <button type="submit" class="px-2.5 py-1 rounded bg-red-950/80 text-red-300 text-[11px] font-bold">Delete</button>
                  </form>
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
