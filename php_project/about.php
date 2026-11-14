<?php
/**
 * Nirvana Group - About Page
 * Luxury Black & Gold Architectural Theme
 */
$pageTitle = "About Us - Creating Spaces. Inspiring Lives.";
$pageDesc = "Combining structural safety, green building efficiency, and modern architectural elegance to shape Gujarat's skyline with landmark residential and commercial developments.";
$activeNav = 'about';

require_once __DIR__ . '/includes/header.php';
?>

<div class="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
  
  <!-- Section Header -->
  <div class="text-center max-w-3xl mx-auto space-y-4">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
      <span>ABOUT NIRVANA GROUP</span>
    </div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
      Creating Spaces. <span class="text-gold-gradient">Inspiring Lives.</span>
    </h1>
    <div class="w-20 h-1 bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent mx-auto rounded-full"></div>
    <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
      Nirvana Group is dedicated to architectural creativity, construction excellence, and premium property development across Gujarat.
    </p>
  </div>

  <!-- Corporate Profile Two-Column Block -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
    <div class="lg:col-span-5 relative">
      <div class="relative rounded-3xl overflow-hidden border border-[#C6A46A]/30 shadow-2xl group">
        <img
          src="<?= BASE_URL ?>/assets/images/about_property.jpg"
          alt="Nirvana Group Architectural Landmark"
          class="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>
        <div class="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#191919]/90 border border-[#C6A46A]/30 backdrop-blur-md">
          <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold block">PHILOSOPHY</span>
          <p class="text-sm font-serif font-bold text-white mt-1">"Building Dreams. Creating Landmarks."</p>
        </div>
      </div>
    </div>

    <div class="lg:col-span-7 space-y-6">
      <h2 class="text-2xl sm:text-3xl font-serif font-bold text-white">
        Architectural Vision Built on <span class="text-gold-gradient">Trust and Excellence</span>
      </h2>
      <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
        At Nirvana Group, every project represents our philosophy of architectural innovation and engineering precision. Whether crafting high-rise family residences like Nirvana Abode in Tragad, nature-infused community developments like The Neemland in Jagatpur, monumental palace residences like Sankalp Nirvana in Shahibaug, or resort-style plotted enclaves like Safal Nirvana Greens, we deliver developments that stand the test of time.
      </p>
      <p class="text-sm text-[#A5A5A5] font-light leading-relaxed">
        Our developments are strategically situated in high-growth corridors including Science City Road, Sola, SG Highway, and Navrangpura, ensuring exceptional accessibility, enduring value, and superior residential livability.
      </p>

      <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
        <div class="p-4 rounded-2xl bg-[#191919] border border-[#C6A46A]/20">
          <span class="text-2xl font-serif font-black text-white">6+</span>
          <span class="text-xs font-mono text-[#D9BD87] block mt-1 uppercase">Landmark Projects</span>
        </div>
        <div class="p-4 rounded-2xl bg-[#191919] border border-[#C6A46A]/20">
          <span class="text-2xl font-serif font-black text-[#C6A46A]">100%</span>
          <span class="text-xs font-mono text-[#D9BD87] block mt-1 uppercase">Clear RERA Titles</span>
        </div>
        <div class="p-4 rounded-2xl bg-[#191919] border border-[#C6A46A]/20 col-span-2 sm:col-span-1">
          <span class="text-2xl font-serif font-black text-white">Zone 5</span>
          <span class="text-xs font-mono text-[#D9BD87] block mt-1 uppercase">Earthquake Resilience</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Engineering Standards Showcase -->
  <div class="space-y-8">
    <div class="text-center max-w-2xl mx-auto space-y-2">
      <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold">ENGINEERING BENCHMARKS</span>
      <h3 class="text-2xl sm:text-3xl font-serif font-bold text-white">Built for Generational Resilience</h3>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 space-y-4 shadow-xl">
        <span class="text-xs font-mono text-[#C6A46A] font-bold block uppercase">01 / SEISMIC CORE</span>
        <h4 class="text-xl font-serif font-bold text-white">BIS Zone 5 Resilience</h4>
        <p class="text-xs sm:text-sm text-[#A5A5A5] font-light leading-relaxed">
          Engineered with deep bedrock piling, hydraulic damper assemblies, and high-tensile steel rebar cages ensuring long-term safety.
        </p>
      </div>

      <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 space-y-4 shadow-xl">
        <span class="text-xs font-mono text-[#C6A46A] font-bold block uppercase">02 / SUSTAINABILITY</span>
        <h4 class="text-xl font-serif font-bold text-white">Green Building Standards</h4>
        <p class="text-xs sm:text-sm text-[#A5A5A5] font-light leading-relaxed">
          Solar rooftop integration, rainwater recharge borewells, and thermal double-glazed acoustic glass facades for sustainable energy conservation.
        </p>
      </div>

      <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 space-y-4 shadow-xl">
        <span class="text-xs font-mono text-[#C6A46A] font-bold block uppercase">03 / ARTERIAL CONNECTIVITY</span>
        <h4 class="text-xl font-serif font-bold text-white">Gujarat Growth Corridors</h4>
        <p class="text-xs sm:text-sm text-[#A5A5A5] font-light leading-relaxed">
          Direct arterial proximity to SG Highway, SP Ring Road, metro stations, and key corporate hubs in Western Ahmedabad.
        </p>
      </div>
    </div>
  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
