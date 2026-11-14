<?php
/**
 * Nirvana Group Admin - Project Management Module
 */
require_once __DIR__ . '/../includes/functions.php';

if (empty($_SESSION['admin_user_id'])) {
    header("Location: login.php");
    exit;
}

$pdo = getDBConnection();
$message = '';

// Handle Project Action: Add or Edit or Delete
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $action = $_POST['action'] ?? '';

    if ($action === 'delete') {
        $id = (int)($_POST['id'] ?? 0);
        if ($id > 0) {
            $stmt = $pdo->prepare("DELETE FROM projects WHERE id = ?");
            $stmt->execute([$id]);
            $message = 'Project deleted successfully.';
        }
    } elseif ($action === 'toggle_publish') {
        $id = (int)($_POST['id'] ?? 0);
        if ($id > 0) {
            $stmt = $pdo->prepare("UPDATE projects SET is_published = 1 - is_published WHERE id = ?");
            $stmt->execute([$id]);
            $message = 'Project publication status updated.';
        }
    } elseif ($action === 'toggle_feature') {
        $id = (int)($_POST['id'] ?? 0);
        if ($id > 0) {
            $stmt = $pdo->prepare("UPDATE projects SET is_featured = 1 - is_featured WHERE id = ?");
            $stmt->execute([$id]);
            $message = 'Featured status updated.';
        }
    } elseif ($action === 'save') {
        $id = (int)($_POST['id'] ?? 0);
        $name = sanitizeInput($_POST['name'] ?? '');
        $slug = sanitizeInput($_POST['slug'] ?? '');
        $subtitle = sanitizeInput($_POST['subtitle'] ?? '');
        $location = sanitizeInput($_POST['location'] ?? '');
        $status = sanitizeInput($_POST['status'] ?? 'Under Construction');
        $badge = sanitizeInput($_POST['badge'] ?? 'New Launch');
        $projectType = sanitizeInput($_POST['project_type'] ?? 'Residential');
        $valuation = sanitizeInput($_POST['valuation'] ?? 'RERA Certified');
        $size = sanitizeInput($_POST['size'] ?? '');
        $config = sanitizeInput($_POST['config'] ?? '');
        $completion = sanitizeInput($_POST['completion'] ?? '');
        $imageUrl = sanitizeInput($_POST['image_url'] ?? 'assets/images/about_property.jpg');
        $description = sanitizeInput($_POST['description'] ?? '');

        if ($id > 0) {
            $stmt = $pdo->prepare("UPDATE projects SET name=?, slug=?, subtitle=?, location=?, status=?, badge=?, project_type=?, valuation=?, size=?, config=?, completion=?, image_url=?, description=? WHERE id=?");
            $stmt->execute([$name, $slug, $subtitle, $location, $status, $badge, $projectType, $valuation, $size, $config, $completion, $imageUrl, $description, $id]);
            $message = 'Project updated successfully.';
        } else {
            $stmt = $pdo->prepare("INSERT INTO projects (name, slug, subtitle, location, status, badge, project_type, valuation, size, config, completion, image_url, description, is_featured, is_published, created_at) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 1, 1, NOW())");
            $stmt->execute([$name, $slug, $subtitle, $location, $status, $badge, $projectType, $valuation, $size, $config, $completion, $imageUrl, $description]);
            $message = 'New project added successfully.';
        }
    }
}

$projects = $pdo->query("SELECT * FROM projects ORDER BY id ASC")->fetchAll();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Manage Projects | <?= SITE_NAME ?> Admin</title>
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
          <h1 class="text-xl font-serif font-bold text-white">Project Management</h1>
          <p class="text-xs text-[#A5A5A5] font-mono">Manage real estate developments, configurations & status</p>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        <a href="index.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Overview</a>
        <a href="projects.php" class="px-3.5 py-2 rounded-xl bg-[#C6A46A] text-[#101010] font-black text-xs uppercase">Projects</a>
        <a href="gallery.php" class="px-3.5 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase">Gallery</a>
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

    <!-- Projects Table -->
    <div class="p-6 sm:p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-6">
      <div class="flex items-center justify-between border-b border-[#101010] pb-4">
        <h3 class="text-xl font-serif font-bold text-white">Active Developments (<?= count($projects) ?>)</h3>
        <button
          onclick="document.getElementById('project-form-modal').classList.remove('hidden');"
          class="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] text-xs font-black uppercase tracking-wider shadow-lg"
        >
          + Add New Project
        </button>
      </div>

      <div class="overflow-x-auto rounded-2xl border border-[#101010]">
        <table class="w-full text-left text-xs border-collapse">
          <thead>
            <tr class="bg-[#101010] text-[#D9BD87] font-mono uppercase tracking-wider">
              <th class="py-4 px-4 font-bold">ID</th>
              <th class="py-4 px-4 font-bold">Project Name & Developer</th>
              <th class="py-4 px-4 font-bold">Location</th>
              <th class="py-4 px-4 font-bold">Config & Size</th>
              <th class="py-4 px-4 font-bold">Status</th>
              <th class="py-4 px-4 font-bold text-center">Actions</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-[#101010] text-[#F5F1E9]">
            <?php foreach ($projects as $p): ?>
              <tr class="hover:bg-[#101010]/50 transition-colors">
                <td class="py-4 px-4 font-mono"><?= $p['id'] ?></td>
                <td class="py-4 px-4">
                  <div class="font-bold text-white"><?= htmlspecialchars($p['name']) ?></div>
                  <div class="text-[10px] text-[#A5A5A5]"><?= htmlspecialchars($p['subtitle']) ?></div>
                </td>
                <td class="py-4 px-4 text-xs text-[#A5A5A5]"><?= htmlspecialchars($p['location']) ?></td>
                <td class="py-4 px-4 font-mono text-xs">
                  <div><?= htmlspecialchars($p['config']) ?></div>
                  <div class="text-[#D9BD87]"><?= htmlspecialchars($p['size']) ?></div>
                </td>
                <td class="py-4 px-4">
                  <span class="px-2.5 py-1 rounded-md bg-[#101010] border border-[#C6A46A]/30 text-[#D9BD87] text-[10px] font-mono font-bold">
                    <?= htmlspecialchars($p['status']) ?>
                  </span>
                </td>
                <td class="py-4 px-4 text-center">
                  <div class="flex items-center justify-center gap-2">
                    <form method="POST" class="inline">
                      <input type="hidden" name="action" value="toggle_feature">
                      <input type="hidden" name="id" value="<?= $p['id'] ?>">
                      <button type="submit" class="px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold <?= $p['is_featured'] ? 'bg-[#C6A46A] text-[#101010]' : 'bg-[#101010] text-[#A5A5A5]' ?>">
                        <?= $p['is_featured'] ? 'Featured' : 'Standard' ?>
                      </button>
                    </form>
                    <a href="<?= BASE_URL ?>/project-detail.php?id=<?= urlencode($p['slug']) ?>" target="_blank" class="px-2.5 py-1 rounded-lg bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-[10px] font-bold">View</a>
                    <form method="POST" class="inline" onsubmit="return confirm('Delete this project?');">
                      <input type="hidden" name="action" value="delete">
                      <input type="hidden" name="id" value="<?= $p['id'] ?>">
                      <button type="submit" class="px-2.5 py-1 rounded-lg bg-red-950/80 text-red-300 border border-red-500/30 text-[10px] font-bold">Delete</button>
                    </form>
                  </div>
                </td>
              </tr>
            <?php endforeach; ?>
          </tbody>
        </table>
      </div>
    </div>

  </div>

  <!-- Add Project Modal -->
  <div id="project-form-modal" class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md hidden">
    <div class="rounded-3xl max-w-2xl w-full p-6 sm:p-8 bg-[#191919] border border-[#C6A46A]/40 shadow-2xl relative space-y-5 max-h-[90vh] overflow-y-auto">
      <div class="flex items-center justify-between border-b border-[#101010] pb-3">
        <h3 class="text-xl font-serif font-bold text-white">Add New Project</h3>
        <button onclick="document.getElementById('project-form-modal').classList.add('hidden');" class="text-xl text-[#A5A5A5] hover:text-white">&times;</button>
      </div>

      <form method="POST" class="space-y-4 text-xs">
        <input type="hidden" name="action" value="save">
        <input type="hidden" name="id" value="0">

        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">Project Name *</label>
            <input type="text" name="name" required placeholder="e.g. Nirvana Skyline" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
          </div>
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">URL Slug *</label>
            <input type="text" name="slug" required placeholder="e.g. nirvana-skyline" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
          </div>
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">Developer / Subtitle</label>
            <input type="text" name="subtitle" placeholder="e.g. Nirvana Group" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
          </div>
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">Location Corridor *</label>
            <input type="text" name="location" required placeholder="e.g. Science City Road, Ahmedabad" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">Status</label>
            <select name="status" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
              <option value="Under Construction">Under Construction</option>
              <option value="Pre-Launch / New Launch">Pre-Launch / New Launch</option>
              <option value="Ready to Move">Ready to Move</option>
            </select>
          </div>
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">Badge</label>
            <input type="text" name="badge" placeholder="e.g. Flagship Landmark" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
          </div>
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">Project Type</label>
            <input type="text" name="project_type" placeholder="e.g. Luxury Apartments" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
          </div>
        </div>

        <div class="grid grid-cols-3 gap-4">
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">Configuration</label>
            <input type="text" name="config" placeholder="e.g. 3 & 4 BHK" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
          </div>
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">Size Range</label>
            <input type="text" name="size" placeholder="e.g. 1,800 – 2,400 sq. ft." class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
          </div>
          <div class="space-y-1">
            <label class="font-bold text-[#D9BD87]">Possession / Completion</label>
            <input type="text" name="completion" placeholder="e.g. Dec 2027" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
          </div>
        </div>

        <div class="space-y-1">
          <label class="font-bold text-[#D9BD87]">Image Path / URL</label>
          <input type="text" name="image_url" value="assets/images/about_property.jpg" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white">
        </div>

        <div class="space-y-1">
          <label class="font-bold text-[#D9BD87]">Project Description</label>
          <textarea name="description" rows="3" class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-2.5 text-white resize-none"></textarea>
        </div>

        <div class="pt-3 flex justify-end gap-3">
          <button type="button" onclick="document.getElementById('project-form-modal').classList.add('hidden');" class="px-5 py-2.5 rounded-xl bg-[#101010] text-[#A5A5A5]">Cancel</button>
          <button type="submit" class="px-6 py-2.5 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] font-black uppercase">Save Project</button>
        </div>
      </form>
    </div>
  </div>

</body>
</html>
