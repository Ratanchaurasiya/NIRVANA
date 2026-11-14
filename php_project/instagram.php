<?php
/**
 * Nirvana Group - Instagram & Social Media Hub
 * Official Reels, Site Walkthroughs, and Construction Highlights
 */
$pageTitle = "Instagram Reels & Social Media Hub";
$pageDesc = "Watch official Instagram reels, construction progress videos, and architectural updates from Nirvana Group.";
$activeNav = 'instagram';

require_once __DIR__ . '/includes/header.php';

$reels = getInstagramReels();
$gallery = getInstagramGallery();
$account = getPrimaryInstagramAccount();
?>

<div class="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
  
  <!-- Profile & Header Banner -->
  <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#191919] via-[#101010] to-[#191919] border border-[#C6A46A]/30 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
    <div class="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
      <div class="w-20 h-20 rounded-2xl bg-gradient-to-tr from-purple-600 via-pink-600 to-[#C6A46A] p-1 flex items-center justify-center shrink-0 shadow-lg">
        <div class="w-full h-full bg-[#101010] rounded-xl flex items-center justify-center">
          <svg class="w-10 h-10 text-pink-400 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
        </div>
      </div>
      <div class="space-y-1.5">
        <h1 class="text-2xl sm:text-3xl font-serif font-bold text-white"><?= htmlspecialchars($account['account_name']) ?></h1>
        <p class="text-xs font-mono text-[#D9BD87]">@<?= htmlspecialchars($account['username']) ?></p>
        <p class="text-xs sm:text-sm text-[#A5A5A5] max-w-xl font-light"><?= htmlspecialchars($account['bio']) ?></p>
      </div>
    </div>

    <div class="flex items-center gap-3">
      <a
        href="<?= htmlspecialchars($account['profile_url']) ?>"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-[#C6A46A] text-white font-black text-xs uppercase tracking-wider shadow-lg hover:scale-105 transition-all"
      >
        <span>Follow on Instagram</span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    </div>
  </div>

  <!-- Section 1: Official Instagram Reels -->
  <div class="space-y-8">
    <div class="border-b border-[#C6A46A]/20 pb-4">
      <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold">LATEST VIDEO RELEASES</span>
      <h2 class="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">Official Project Reels & Walkthroughs</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <?php foreach ($reels as $reel): ?>
        <div class="group rounded-3xl bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 overflow-hidden flex flex-col justify-between shadow-xl transition-all">
          <div class="relative h-72 overflow-hidden">
            <img
              src="<?= htmlspecialchars($reel['thumbnail_url']) ?>"
              alt="<?= htmlspecialchars($reel['title']) ?>"
              class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/30"></div>
            
            <div class="absolute top-3 left-3 px-3 py-1 rounded-full bg-[#101010]/80 border border-[#C6A46A]/40 text-[#D9BD87] text-[10px] font-mono">
              <?= htmlspecialchars($reel['category']) ?>
            </div>

            <a
              href="<?= htmlspecialchars($reel['reel_url']) ?>"
              target="_blank"
              rel="noopener noreferrer"
              class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40"
            >
              <div class="w-14 h-14 rounded-full bg-[#C6A46A] text-[#101010] flex items-center justify-center shadow-2xl scale-90 group-hover:scale-100 transition-transform">
                <svg class="w-6 h-6 fill-current ml-0.5" viewBox="0 0 24 24"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
              </div>
            </a>
          </div>

          <div class="p-5 space-y-3">
            <span class="text-[10px] font-mono text-[#C6A46A] font-bold block uppercase"><?= htmlspecialchars($reel['project_tag']) ?></span>
            <h4 class="text-sm font-bold text-white line-clamp-2"><?= htmlspecialchars($reel['title']) ?></h4>
            <p class="text-xs text-[#A5A5A5] line-clamp-2 font-light"><?= htmlspecialchars($reel['caption']) ?></p>
            <div class="pt-2 border-t border-[#101010]">
              <a
                href="<?= htmlspecialchars($reel['reel_url']) ?>"
                target="_blank"
                rel="noopener noreferrer"
                class="text-xs font-mono text-[#D9BD87] hover:text-white font-bold flex items-center gap-1.5"
              >
                <span>Play Reel on Instagram</span>
                <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>

  <!-- Section 2: Instagram Visual Post Stream -->
  <div class="space-y-8">
    <div class="border-b border-[#C6A46A]/20 pb-4">
      <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold">COMMUNITY POSTS</span>
      <h2 class="text-2xl sm:text-3xl font-serif font-bold text-white mt-1">Curated Instagram Photographs</h2>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <?php foreach ($gallery as $item): ?>
        <a
          href="<?= htmlspecialchars($item['post_url']) ?>"
          target="_blank"
          rel="noopener noreferrer"
          class="group block relative rounded-3xl overflow-hidden border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 shadow-xl h-64"
        >
          <img
            src="<?= htmlspecialchars($item['image_url']) ?>"
            alt="<?= htmlspecialchars($item['title']) ?>"
            class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/20 opacity-80 group-hover:opacity-95 transition-opacity"></div>
          
          <div class="absolute bottom-4 left-4 right-4">
            <span class="px-2.5 py-0.5 rounded-md bg-[#C6A46A]/20 text-[#D9BD87] border border-[#C6A46A]/30 text-[9px] font-mono uppercase font-bold">
              <?= htmlspecialchars($item['category']) ?>
            </span>
            <h4 class="text-sm font-bold text-white mt-1 group-hover:text-[#D9BD87] transition-colors truncate">
              <?= htmlspecialchars($item['title']) ?>
            </h4>
            <p class="text-[11px] text-[#A5A5A5] truncate"><?= htmlspecialchars($item['caption']) ?></p>
          </div>
        </a>
      <?php endforeach; ?>
    </div>
  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
