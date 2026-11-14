<?php
/**
 * Nirvana Group - Projects Portfolio Matrix
 * Luxury Black & Gold Architectural Theme
 */
$pageTitle = "Our Projects - Spaces That Define Excellence";
$pageDesc = "Explore Nirvana Group's portfolio of residential high-rises, commercial retail boulevards, and palace sky residences.";
$activeNav = 'projects';

require_once __DIR__ . '/includes/header.php';

// Fetch all projects dynamically from MySQL
$projects = getAllProjects();
?>

<div class="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
  
  <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[#C6A46A]/20">
    <div class="space-y-3">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
        <span>OUR DEVELOPMENTS</span>
      </div>
      <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
        Spaces That <span class="text-gold-gradient">Define Excellence.</span>
      </h1>
    </div>
    <p class="text-xs sm:text-sm text-[#A5A5A5] max-w-md font-light leading-relaxed">
      Discover Grade-A commercial and ultra-luxury residential landmarks engineered with seismic-resistant cores across Gujarat.
    </p>
  </div>

  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <?php foreach ($projects as $proj): ?>
      <div class="rounded-3xl overflow-hidden bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/70 glass-card-hover group flex flex-col justify-between shadow-2xl transition-all">
        <div class="relative h-64 overflow-hidden">
          <img
            src="<?= htmlspecialchars($proj['image_url']) ?>"
            alt="<?= htmlspecialchars($proj['name']) ?>"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>
          <span class="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#101010]/90 text-[#D9BD87] border border-[#C6A46A]/40 text-[10px] font-mono uppercase font-bold tracking-wider">
            <?= htmlspecialchars($proj['status']) ?>
          </span>
          <span class="absolute bottom-4 left-4 text-xs font-mono text-[#C6A46A] font-bold">
            <?= htmlspecialchars($proj['location']) ?>
          </span>
        </div>

        <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
          <div class="space-y-2">
            <div class="flex items-center justify-between">
              <span class="text-[11px] font-mono text-[#D9BD87] font-bold uppercase"><?= htmlspecialchars($proj['project_type']) ?></span>
              <span class="text-[11px] font-mono text-[#C6A46A] font-bold"><?= htmlspecialchars($proj['badge']) ?></span>
            </div>
            <h3 class="text-xl font-serif font-bold text-white group-hover:text-[#D9BD87] transition-colors">
              <?= htmlspecialchars($proj['name']) ?>
            </h3>
            <p class="text-[11px] font-mono text-[#C6A46A]">By <?= htmlspecialchars($proj['subtitle']) ?></p>
            <p class="text-xs text-[#A5A5A5] font-light line-clamp-3 leading-relaxed">
              <?= htmlspecialchars($proj['description']) ?>
            </p>
          </div>

          <div class="pt-4 border-t border-[#101010] space-y-3">
            <div class="flex items-center justify-between text-xs font-mono">
              <span class="text-white font-bold"><?= htmlspecialchars($proj['config']) ?></span>
              <span class="text-[#A5A5A5]"><?= htmlspecialchars($proj['completion']) ?></span>
            </div>
            <div class="flex items-center justify-between pt-1">
              <span class="text-xs font-mono font-bold text-[#D9BD87]"><?= htmlspecialchars($proj['size']) ?></span>
              <a
                href="<?= BASE_URL ?>/project-detail.php?id=<?= urlencode($proj['slug']) ?>"
                class="px-4 py-2 rounded-xl bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 hover:bg-gradient-to-r hover:from-[#D9BD87] hover:via-[#C6A46A] hover:to-[#997825] hover:text-[#101010] text-xs font-black uppercase tracking-wider transition-all"
              >
                View 3D Layout →
              </a>
            </div>
          </div>
        </div>
      </div>
    <?php endforeach; ?>
  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
