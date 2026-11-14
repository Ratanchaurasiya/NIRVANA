<?php
/**
 * Nirvana Group - Services & Capabilities
 * Luxury Black & Gold Theme
 */
$pageTitle = "Services & Architectural Expertise";
$pageDesc = "End-to-end real estate development, residential high-rises, commercial landmarks, architectural planning, and property consultation.";
$activeNav = 'services';

require_once __DIR__ . '/includes/header.php';

$services = getAllServices();
?>

<div class="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
  
  <!-- Header Banner -->
  <div class="text-center max-w-3xl mx-auto space-y-4">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
      <span>END-TO-END DEVELOPMENT EXCELLENCE</span>
    </div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
      Services & <span class="text-gold-gradient">Expertise</span>
    </h1>
    <div class="w-20 h-1 bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent mx-auto rounded-full"></div>
    <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
      Nirvana Group brings decades of combined engineering, design, and project execution capabilities across Gujarat's most coveted commercial and residential corridors.
    </p>
  </div>

  <!-- Detailed Services Grid -->
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    <?php foreach ($services as $serv): ?>
      <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 glass-card-hover space-y-5 shadow-2xl flex flex-col justify-between">
        <div class="space-y-4">
          <div class="w-14 h-14 rounded-2xl bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] flex items-center justify-center font-bold">
            <svg class="w-7 h-7 text-[#C6A46A]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <h3 class="text-2xl font-serif font-bold text-white"><?= htmlspecialchars($serv['title']) ?></h3>
          <p class="text-xs sm:text-sm text-[#F5F1E9] leading-relaxed font-light">
            <?= htmlspecialchars($serv['short_desc']) ?>
          </p>
          <p class="text-xs text-[#A5A5A5] leading-relaxed font-light border-t border-[#101010] pt-3">
            <?= htmlspecialchars($serv['full_desc']) ?>
          </p>
        </div>

        <div class="pt-4 border-t border-[#101010]">
          <a
            href="<?= BASE_URL ?>/contact.php"
            class="w-full py-3 rounded-xl bg-[#101010] hover:bg-gradient-to-r hover:from-[#D9BD87] hover:via-[#C6A46A] hover:to-[#997825] hover:text-[#101010] text-[#D9BD87] border border-[#C6A46A]/30 text-xs font-black uppercase tracking-wider text-center block transition-all"
          >
            Enquire for <?= htmlspecialchars($serv['title']) ?> →
          </a>
        </div>
      </div>
    <?php endforeach; ?>
  </div>

  <!-- Quality Standards Callout -->
  <div class="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#191919] via-[#101010] to-[#191919] border border-[#C6A46A]/30 space-y-6">
    <div class="max-w-3xl space-y-3">
      <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold">OUR STRUCTURAL COMMITMENT</span>
      <h3 class="text-2xl sm:text-3xl font-serif font-bold text-white">Engineering Longevity into Every Square Foot</h3>
      <p class="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed font-light">
        Every construction project undertaken by Nirvana Group follows strict third-party quality audits, BIS Zone 5 earthquake structural standards, and eco-sustainable green building certifications.
      </p>
    </div>
  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
