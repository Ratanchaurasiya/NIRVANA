<?php
/**
 * Nirvana Group - Project Detail Page with 3D Floor Plan & Site Visit Booking
 * Luxury Black & Gold Theme
 */
require_once __DIR__ . '/includes/functions.php';

$slug = sanitizeInput($_GET['id'] ?? 'nirvana-abode');
$project = getProjectBySlug($slug);

if (!$project) {
    // Fallback to first available project
    $all = getAllProjects();
    $project = $all[0] ?? null;
}

if (!$project) {
    header("Location: " . BASE_URL . "/projects.php");
    exit;
}

$pageTitle = $project['name'] . " - " . $project['subtitle'];
$pageDesc = $project['description'];
$activeNav = 'projects';

require_once __DIR__ . '/includes/header.php';
?>

<div class="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
  
  <!-- Back Link -->
  <div>
    <a
      href="<?= BASE_URL ?>/projects.php"
      class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#191919] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase tracking-wider hover:border-[#C6A46A] transition-all"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"></path></svg>
      <span>Back to Projects Matrix</span>
    </a>
  </div>

  <!-- Header Section -->
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#C6A46A]/20">
    <div class="space-y-3">
      <div class="flex flex-wrap items-center gap-3">
        <span class="px-3.5 py-1 rounded-full bg-[#C6A46A] text-[#101010] text-xs font-mono font-black uppercase tracking-wider">
          <?= htmlspecialchars($project['status']) ?>
        </span>
        <span class="px-3.5 py-1 rounded-full bg-[#C6A46A]/20 text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-bold uppercase tracking-wider">
          <?= htmlspecialchars($project['badge']) ?>
        </span>
      </div>

      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
        <?= htmlspecialchars($project['name']) ?>
      </h1>
      <p class="text-sm sm:text-base text-[#D9BD87] font-mono"><?= htmlspecialchars($project['subtitle']) ?></p>
    </div>

    <div class="flex items-center gap-2 text-xs font-mono text-[#A5A5A5]">
      <svg class="w-4 h-4 text-[#C6A46A] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
      <span class="text-[#F5F1E9]"><?= htmlspecialchars($project['location']) ?></span>
    </div>
  </div>

  <!-- 3D Interactive Floor Plan Visualizer -->
  <div class="space-y-4">
    <div class="flex items-center justify-between">
      <h2 class="text-xl font-serif font-bold text-white flex items-center gap-2">
        <span class="w-2 h-2 rounded-full bg-[#C6A46A] animate-pulse"></span>
        <span>Interactive 3D Floor Plan Layout</span>
      </h2>
      <span class="text-xs font-mono text-[#D9BD87]">Drag to rotate 360°</span>
    </div>

    <div id="floorplan-3d-canvas" class="w-full h-[400px] sm:h-[480px] relative rounded-3xl overflow-hidden border border-[#C6A46A]/30 bg-[#191919]/80 shadow-2xl cursor-grab active:cursor-grabbing">
      <div class="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#101010]/90 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono shadow-md">
        <?= htmlspecialchars($project['floor_plan_unit']) ?>
      </div>
    </div>
  </div>

  <!-- Specifications & Booking Form Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
    
    <!-- Left Specifications -->
    <div class="lg:col-span-7 space-y-8">
      <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-6 shadow-2xl">
        <h3 class="text-xl font-serif font-bold text-white border-b border-[#101010] pb-3">
          Development Metrics & Specifications
        </h3>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
          <div class="p-4 rounded-xl bg-[#101010] border border-[#C6A46A]/20">
            <span class="text-[#A5A5A5] block">Unit Size</span>
            <span class="text-white font-bold text-sm"><?= htmlspecialchars($project['size']) ?></span>
          </div>
          <div class="p-4 rounded-xl bg-[#101010] border border-[#C6A46A]/20">
            <span class="text-[#A5A5A5] block">Configuration</span>
            <span class="text-white font-bold text-sm"><?= htmlspecialchars($project['config']) ?></span>
          </div>
          <div class="p-4 rounded-xl bg-[#101010] border border-[#C6A46A]/20">
            <span class="text-[#A5A5A5] block">Possession</span>
            <span class="text-[#D9BD87] font-bold text-sm"><?= htmlspecialchars($project['completion']) ?></span>
          </div>
        </div>

        <p class="text-sm text-[#F5F1E9] leading-relaxed font-light">
          <?= htmlspecialchars($project['description']) ?>
        </p>

        <div class="space-y-3 pt-2">
          <h4 class="text-xs font-mono uppercase tracking-wider text-[#C6A46A] font-bold">KEY HIGHLIGHTS</h4>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            <?php foreach ($project['features'] as $feat): ?>
              <div class="p-3 rounded-xl bg-[#101010] border border-[#C6A46A]/20 flex items-center gap-2.5 text-xs text-[#F5F1E9]">
                <span class="w-1.5 h-1.5 rounded-full bg-[#C6A46A] shrink-0"></span>
                <span><?= htmlspecialchars($feat) ?></span>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>
    </div>

    <!-- Right: Book VIP Site Visit (Direct PHP / AJAX to MySQL) -->
    <div class="lg:col-span-5">
      <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/40 shadow-2xl space-y-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold">PRIVATE INSPECTION</span>
          <h3 class="text-2xl font-serif font-bold text-white mt-1">Book a Site Visit</h3>
          <p class="text-xs text-[#A5A5A5] mt-1">Coordinate an on-site walkthrough with our senior project director.</p>
        </div>

        <form id="book-visit-form" action="<?= BASE_URL ?>/api/book-site-visit.php" method="POST" class="space-y-4 text-xs">
          <input type="hidden" name="csrf_token" value="<?= $csrfToken ?>">
          <input type="hidden" name="project_id" value="<?= htmlspecialchars($project['id']) ?>">
          <input type="hidden" name="project_name" value="<?= htmlspecialchars($project['name']) ?>">

          <div class="space-y-1.5">
            <label class="font-bold text-[#D9BD87] uppercase tracking-wider block">Your Name *</label>
            <input
              type="text"
              name="fullName"
              required
              placeholder="e.g. Ramesh Patel"
              class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C6A46A]"
            >
          </div>

          <div class="space-y-1.5">
            <label class="font-bold text-[#D9BD87] uppercase tracking-wider block">Phone Number *</label>
            <input
              type="tel"
              name="phone"
              required
              placeholder="+91 98765 43210"
              class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C6A46A]"
            >
          </div>

          <div class="space-y-1.5">
            <label class="font-bold text-[#D9BD87] uppercase tracking-wider block">Preferred Inspection Date *</label>
            <input
              type="date"
              name="visit_date"
              required
              class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#C6A46A]"
            >
          </div>

          <button
            type="submit"
            class="w-full py-4 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(198,164,106,0.6)] transition-all"
          >
            Confirm Site Visit Booking
          </button>
        </form>

        <div class="pt-2 border-t border-[#101010] flex items-center justify-between text-xs">
          <a
            href="<?= BASE_URL ?>/contact.php"
            class="text-[#D9BD87] hover:text-white font-bold flex items-center gap-1.5"
          >
            <span>General Inquiry Form →</span>
          </a>
          <span class="text-[#A5A5A5] font-mono">
            <?= COMPANY_PHONE ?>
          </span>
        </div>
      </div>
    </div>

  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
