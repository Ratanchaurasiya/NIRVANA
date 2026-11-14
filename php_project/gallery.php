<?php
/**
 * Nirvana Group - Architectural Visual Gallery
 * Masonry image grid with category filters and interactive full-screen lightbox
 */
$pageTitle = "Architectural Visual Gallery";
$pageDesc = "Explore high-resolution architectural photography, elevation perspectives, and construction milestones across Nirvana Group projects.";
$activeNav = 'gallery';

require_once __DIR__ . '/includes/header.php';

$activeCategory = sanitizeInput($_GET['cat'] ?? 'All');
$galleryImages = getAllGalleryImages($activeCategory);
$categories = ['All', 'Residential', 'Commercial', 'Villas', 'Construction', 'Architecture'];
?>

<div class="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
  
  <!-- Header Banner -->
  <div class="text-center max-w-3xl mx-auto space-y-4">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
      <span>HIGH-RESOLUTION PERSPECTIVES</span>
    </div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
      Architectural <span class="text-gold-gradient">Visual Gallery</span>
    </h1>
    <div class="w-20 h-1 bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent mx-auto rounded-full"></div>
    <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
      A curated visual chronicle of our developments, structural steel placement, exterior curtain walls, and interior living spaces. Click any image to view in full resolution.
    </p>
  </div>

  <!-- Category Filters -->
  <div class="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3">
    <?php foreach ($categories as $cat): ?>
      <a
        href="<?= BASE_URL ?>/gallery.php?cat=<?= urlencode($cat) ?>"
        class="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all <?= ($activeCategory === $cat) ? 'bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] shadow-[0_0_20px_rgba(198,164,106,0.4)] scale-105' : 'bg-[#191919] text-[#A5A5A5] hover:text-white border border-[#C6A46A]/20 hover:border-[#C6A46A]/60' ?>"
      >
        <?= htmlspecialchars($cat) ?>
      </a>
    <?php endforeach; ?>
  </div>

  <!-- Masonry Images Grid -->
  <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
    <?php if (empty($galleryImages)): ?>
      <div class="col-span-full text-center py-12 text-[#A5A5A5] font-mono text-sm">
        No images found in category "<?= htmlspecialchars($activeCategory) ?>". Showing all available works.
      </div>
    <?php endif; ?>

    <?php foreach ($galleryImages as $img): ?>
      <div class="gallery-item-trigger group block relative rounded-3xl overflow-hidden border border-[#C6A46A]/20 hover:border-[#C6A46A]/70 shadow-2xl glass-card-hover cursor-pointer"
        data-full-img="<?= htmlspecialchars($img['image_url']) ?>"
        data-title="<?= htmlspecialchars($img['title']) ?>"
        data-caption="<?= htmlspecialchars($img['caption']) ?>"
      >
        <div class="h-80 overflow-hidden relative">
          <img
            src="<?= htmlspecialchars($img['image_url']) ?>"
            alt="<?= htmlspecialchars($img['title']) ?>"
            class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/30 opacity-70 group-hover:opacity-90 transition-opacity"></div>
        </div>

        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full bg-[#101010]/90 backdrop-blur-md border border-[#C6A46A]/40 text-[#D9BD87] text-[10px] font-mono uppercase font-bold">
            <?= htmlspecialchars($img['category']) ?>
          </span>
        </div>

        <div class="p-6 absolute bottom-0 left-0 right-0 space-y-1">
          <h3 class="text-lg font-serif font-bold text-white group-hover:text-[#D9BD87] transition-colors">
            <?= htmlspecialchars($img['title']) ?>
          </h3>
          <p class="text-xs text-[#A5A5A5] font-light line-clamp-2">
            <?= htmlspecialchars($img['caption']) ?>
          </p>
        </div>
      </div>
    <?php endforeach; ?>
  </div>

</div>

<!-- Full-screen Lightbox Modal -->
<div id="gallery-lightbox" class="lightbox-modal">
  <div class="lightbox-backdrop absolute inset-0 cursor-pointer"></div>
  <div class="relative z-10 max-w-5xl w-full p-4 sm:p-6 flex flex-col items-center">
    <button id="lightbox-close" class="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 rounded-full bg-[#191919] text-[#D9BD87] border border-[#C6A46A]/40 hover:bg-[#C6A46A] hover:text-[#101010] transition-colors flex items-center justify-center font-bold text-lg cursor-pointer">
      &times;
    </button>
    <div class="lightbox-content">
      <img id="lightbox-img" src="" alt="Architectural Fullscreen View" class="w-full h-auto max-h-[80vh] object-contain rounded-2xl">
    </div>
    <p id="lightbox-caption" class="text-sm font-mono text-[#D9BD87] mt-3 text-center"></p>
  </div>
</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
