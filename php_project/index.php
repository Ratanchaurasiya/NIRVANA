<?php
/**
 * Nirvana Group - Master Homepage
 * Luxury Black & Gold Architectural Theme
 * Core PHP 8.x + MySQL PDO Architecture
 */
$pageTitle = "Building Dreams. Creating Landmarks.";
$pageDesc = "Creating exceptional spaces through vision, innovation, and architectural excellence. Explore premier residential and commercial developments in Gujarat.";
$activeNav = 'home';

require_once __DIR__ . '/includes/header.php';

// Fetch dynamic data from MySQL
$projects = getAllProjects();
$properties = getAllProperties();
$services = getAllServices();
$testimonials = getAllTestimonials();
$galleryImages = getAllGalleryImages();
$instagramReels = getInstagramReels();
$instaAccount = getPrimaryInstagramAccount();
?>

<!-- ==========================================================================
     1. CINEMATIC 3D HERO SECTION (100VH FULL-SCREEN)
     ========================================================================== -->
<section class="relative w-full min-h-screen lg:h-screen lg:min-h-[700px] lg:max-h-[1080px] flex flex-col justify-between pt-24 sm:pt-28 pb-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden z-10">
  
  <!-- Subtle Cinematic Background Ambience -->
  <div class="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
    <div class="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#C6A46A]/5 rounded-full blur-3xl"></div>
  </div>

  <!-- Top Badges Header Bar -->
  <div class="flex items-center justify-between gap-4 w-full relative z-20 gsap-reveal">
    <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191919]/90 border border-[#C6A46A]/40 text-[#D9BD87] text-xs font-mono uppercase tracking-widest shadow-md text-sharp">
      <span class="w-2 h-2 rounded-full bg-[#C6A46A] animate-pulse shrink-0"></span>
      <span>PREMIUM REAL ESTATE • ARCHITECTURE • CONSTRUCTION</span>
    </div>

    <div class="hidden sm:inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#191919]/90 border border-[#C6A46A]/40 text-[#D9BD87] text-xs font-mono tracking-wider shadow-md text-sharp">
      <span class="w-2 h-2 rounded-full bg-[#C6A46A] shrink-0"></span>
      <span>FLAGSHIP RESIDENCES: NIRVANA ABODE</span>
    </div>
  </div>

  <!-- Main Hero Content Grid -->
  <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center my-auto py-4 sm:py-6 w-full relative z-20">
    
    <!-- Left Column: Nirvana Group Brand Headline, Tagline & CTAs -->
    <div class="lg:col-span-6 xl:col-span-7 flex flex-col items-start space-y-6 text-left">
      
      <!-- Brand Label & Title -->
      <div class="space-y-2">
        <span class="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-[#C6A46A] font-bold block gsap-hero-title">
          NIRVANA GROUP
        </span>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black font-serif text-white tracking-tight leading-[1.08] text-sharp drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)] gsap-hero-title">
          Building Dreams. <br>
          <span class="text-gold-gradient">Creating Landmarks.</span>
        </h1>
      </div>

      <!-- Gold Accent Divider -->
      <div class="w-24 h-1 bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-transparent rounded-full"></div>

      <!-- Supporting Description -->
      <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed max-w-xl text-sharp drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] gsap-hero-desc">
        Creating exceptional spaces through vision, innovation, and architectural excellence. Shaping modern skylines across prime Western Ahmedabad growth corridors with uncompromising engineering standards.
      </p>

      <!-- CTA Buttons -->
      <div class="flex flex-wrap items-center gap-3.5 pt-2 w-full sm:w-auto gsap-hero-cta">
        <a
          href="<?= BASE_URL ?>/projects.php"
          class="w-full sm:w-auto px-7 py-3.5 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-[#101010] bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] shadow-[0_0_25px_rgba(198,164,106,0.4)] hover:shadow-[0_0_35px_rgba(198,164,106,0.7)] hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2.5 cursor-pointer"
        >
          <span>EXPLORE OUR PROJECTS</span>
          <svg class="w-4 h-4 text-[#101010]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>

        <button
          type="button"
          onclick="openDossierModal()"
          class="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-[#D9BD87] bg-[#191919] hover:bg-[#C6A46A]/20 border border-[#C6A46A]/50 transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>PROJECT DOSSIER (PDF)</span>
        </button>

        <a
          href="<?= BASE_URL ?>/contact.php"
          class="w-full sm:w-auto px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider text-white bg-[#191919]/90 hover:bg-slate-800 border border-slate-700 hover:border-slate-500 transition-all duration-300 cursor-pointer text-sharp text-center"
        >
          CONNECT WITH US
        </a>
      </div>

    </div>

    <!-- Right Column: Interactive 3D Perspective Building Showcase with Day/Sunset/Night Mode -->
    <div class="lg:col-span-6 xl:col-span-5 w-full relative z-20">
      <div class="w-full h-[360px] sm:h-[420px] lg:h-[470px] relative select-none group" style="perspective: 1200px;">
        <div id="php-hero-card" class="w-full h-full relative rounded-3xl overflow-hidden border border-[#C6A46A]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-500 hover:scale-[1.02]">
          <!-- Building Render Image -->
          <img
            id="php-hero-img"
            src="<?= BASE_URL ?>/assets/images/hero_building.jpg"
            alt="Nirvana Abode Architectural Landmark"
            class="w-full h-full object-cover object-center scale-105 group-hover:scale-110 transition-all duration-700 ease-out"
            style="filter: brightness(0.92) contrast(1.22) saturate(1.15);"
          >

          <!-- Ambient Luxury Vignette -->
          <div id="php-hero-overlay" class="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/40 to-indigo-950/40 pointer-events-none transition-colors duration-700"></div>
          <div class="absolute inset-0 bg-gradient-to-r from-[#101010]/60 via-transparent to-[#101010]/40 pointer-events-none"></div>

          <!-- Architectural Corner Markers -->
          <div class="absolute top-4 left-4 w-6 h-6 border-t-2 border-l-2 border-[#C6A46A] pointer-events-none"></div>
          <div class="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-[#C6A46A] pointer-events-none"></div>
          <div class="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-[#C6A46A] pointer-events-none"></div>
          <div class="absolute bottom-4 right-4 w-6 h-6 border-b-2 border-r-2 border-[#C6A46A] pointer-events-none"></div>

          <!-- Top Floating Badge & Interactive Day/Sunset/Night Switcher -->
          <div class="absolute top-4 left-4 right-4 flex flex-wrap items-center justify-between gap-2 z-20 pointer-events-auto">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#101010]/90 backdrop-blur-md border border-[#C6A46A]/40 text-[#D9BD87] text-xs font-mono uppercase tracking-wider shadow-lg">
              <span class="w-2 h-2 rounded-full bg-[#C6A46A]"></span>
              <span class="font-bold">FLAGSHIP LANDMARK</span>
            </div>

            <!-- Lighting Mode Switcher -->
            <div class="inline-flex items-center p-1 rounded-full bg-[#101010]/90 backdrop-blur-md border border-slate-700 shadow-xl">
              <button
                type="button"
                onclick="setPhpLighting('day')"
                class="php-light-btn px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-400 hover:text-white"
                id="btn-light-day"
              >
                Day
              </button>
              <button
                type="button"
                onclick="setPhpLighting('sunset')"
                class="php-light-btn px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-400 hover:text-white"
                id="btn-light-sunset"
              >
                Sunset
              </button>
              <button
                type="button"
                onclick="setPhpLighting('night')"
                class="php-light-btn px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-gradient-to-r from-[#D9BD87] to-[#C6A46A] text-[#101010] shadow-md"
                id="btn-light-night"
              >
                Night
              </button>
            </div>
          </div>

          <!-- Bottom Floating Information Overlay -->
          <div class="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-[#101010]/90 backdrop-blur-md border border-[#C6A46A]/30 text-white shadow-xl space-y-1.5 pointer-events-none">
            <div class="flex items-center justify-between">
              <span class="text-[10px] font-mono uppercase tracking-widest text-[#C6A46A] font-bold">
                NIRVANA ABODE
              </span>
              <span class="text-[10px] font-mono text-emerald-400 font-bold">
                ● RERA REGISTERED
              </span>
            </div>

            <p class="text-sm sm:text-base font-serif font-black text-white leading-tight">
              Curated Architectural Residences
            </p>

            <p class="text-[11px] text-[#A5A5A5] leading-snug line-clamp-1">
              Contemporary facade engineering, double-height terraces & biophilic balconies
            </p>
          </div>
        </div>
      </div>
    </div>

  </div>

  <!-- Bottom Metric Cards Bar -->
  <div class="w-full relative z-20 space-y-4">
    <div class="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 pt-4 border-t border-[#C6A46A]/20">
      <div class="p-3.5 sm:p-4 rounded-2xl bg-[#191919]/95 border border-[#C6A46A]/30 glass-card-hover space-y-1 shadow-lg text-sharp">
        <span class="text-xs font-mono text-[#C6A46A] font-bold block">01 / ARCHITECTURE</span>
        <p class="text-xs sm:text-sm text-white font-bold tracking-tight">Iconic High-Rise Towers</p>
        <p class="text-[11px] sm:text-xs text-[#A5A5A5]">Thoughtful Privacy & Foyers</p>
      </div>

      <div class="p-3.5 sm:p-4 rounded-2xl bg-[#191919]/95 border border-[#C6A46A]/30 glass-card-hover space-y-1 shadow-lg text-sharp">
        <span class="text-xs font-mono text-[#C6A46A] font-bold block">02 / ENGINEERING</span>
        <p class="text-xs sm:text-sm text-white font-bold tracking-tight">BIS Zone 5 Seismic Core</p>
        <p class="text-[11px] sm:text-xs text-[#A5A5A5]">Tensile Rebar Bedrock Piling</p>
      </div>

      <div class="p-3.5 sm:p-4 rounded-2xl bg-[#191919]/95 border border-[#C6A46A]/30 glass-card-hover space-y-1 shadow-lg text-sharp">
        <span class="text-xs font-mono text-[#C6A46A] font-bold block">03 / PRIME LOCATIONS</span>
        <p class="text-xs sm:text-sm text-white font-bold tracking-tight">Gujarat Growth Corridors</p>
        <p class="text-[11px] sm:text-xs text-[#A5A5A5]">Western Ahmedabad Strategic Hub</p>
      </div>
    </div>
  </div>

</section>

<!-- ==========================================================================
     2. ABOUT US HIGHLIGHT SECTION ("Creating Spaces. Inspiring Lives.")
     ========================================================================== -->
<section id="about-preview" class="py-24 relative bg-[#101010] overflow-hidden border-t border-[#C6A46A]/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Visual Column -->
      <div class="lg:col-span-6 relative gsap-reveal">
        <div class="relative rounded-3xl overflow-hidden border border-[#C6A46A]/30 shadow-2xl">
          <img
            src="<?= BASE_URL ?>/assets/images/about_property.jpg"
            alt="Nirvana Group Architecture"
            class="w-full h-[450px] object-cover object-center filter brightness-95"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-transparent"></div>
          
          <div class="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-[#101010]/90 backdrop-blur-md border border-[#C6A46A]/30 space-y-1">
            <span class="text-[10px] font-mono uppercase tracking-widest text-[#C6A46A] font-bold">OUR PHILOSOPHY</span>
            <p class="text-base font-serif font-bold text-white">Creating Spaces. Inspiring Lives.</p>
            <p class="text-xs text-[#A5A5A5]">Serving Ahmedabad's premier growth corridors with uncompromising engineering standards.</p>
          </div>
        </div>
      </div>

      <!-- Narrative Column -->
      <div class="lg:col-span-6 space-y-6 text-left gsap-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
          <span>ABOUT NIRVANA GROUP</span>
        </div>

        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white leading-tight">
          Pioneering Architectural Excellence in <span class="text-gold-gradient">Gujarat</span>
        </h2>

        <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
          Nirvana Group stands as a beacon of progressive real estate development, bringing together visionary architecture, sustainable engineering, and mastercrafted living environments.
        </p>

        <p class="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed">
          From boutique residential towers with landscaped sky terraces to premier commercial landmarks, our developments are conceived as timeless assets that appreciate in value, functionality, and aesthetic prestige.
        </p>

        <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-2">
          <div class="p-4 rounded-2xl bg-[#191919] border border-[#C6A46A]/20">
            <span class="text-2xl font-serif font-black text-white">6+</span>
            <span class="text-xs font-mono text-[#D9BD87] block mt-1 uppercase">Landmark Projects</span>
          </div>
          <div class="p-4 rounded-2xl bg-[#191919] border border-[#C6A46A]/20">
            <span class="text-2xl font-serif font-black text-[#C6A46A]">100%</span>
            <span class="text-xs font-mono text-[#D9BD87] block mt-1 uppercase">RERA Compliant</span>
          </div>
          <div class="p-4 rounded-2xl bg-[#191919] border border-[#C6A46A]/20 col-span-2 sm:col-span-1">
            <span class="text-2xl font-serif font-black text-white">Zone 5</span>
            <span class="text-xs font-mono text-[#D9BD87] block mt-1 uppercase">Seismic Resilience</span>
          </div>
        </div>

        <div class="pt-4">
          <a
            href="<?= BASE_URL ?>/about.php"
            class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(198,164,106,0.6)] transition-all"
          >
            <span>Discover More About Us</span>
            <svg class="w-4 h-4 text-[#101010]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- ==========================================================================
     3. FEATURED REAL ESTATE PROJECTS ("Spaces That Define Excellence.")
     ========================================================================== -->
<section id="featured-projects" class="py-24 relative bg-[#191919] overflow-hidden border-t border-[#C6A46A]/20">
  
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
    
    <!-- Section Header -->
    <div class="text-center max-w-3xl mx-auto space-y-4 gsap-reveal">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
        <span>EXCLUSIVE PORTFOLIO</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
        Spaces That <span class="text-gold-gradient">Define Excellence.</span>
      </h2>
      <div class="w-20 h-1 bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent mx-auto rounded-full"></div>
      <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
        Explore our curated portfolio of residential communities, mixed-use retail destinations, and luxury palace residences.
      </p>
    </div>

    <!-- Project Cards Grid (6 Landmark Projects) -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <?php foreach ($projects as $proj): ?>
        <div class="group rounded-3xl bg-[#101010] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 glass-card-hover overflow-hidden flex flex-col justify-between shadow-2xl transition-all gsap-reveal">
          
          <!-- Image Header with Badge -->
          <div class="relative h-64 overflow-hidden">
            <img
              src="<?= htmlspecialchars($proj['image_url']) ?>"
              alt="<?= htmlspecialchars($proj['name']) ?>"
              class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-95"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-black/40"></div>

            <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span class="px-3 py-1 rounded-full bg-[#101010]/90 backdrop-blur-md border border-[#C6A46A]/40 text-[#D9BD87] text-[10px] font-mono uppercase tracking-wider font-bold">
                <?= htmlspecialchars($proj['status']) ?>
              </span>
              <span class="px-3 py-1 rounded-full bg-[#C6A46A]/20 text-[#D9BD87] backdrop-blur-md text-[10px] font-bold uppercase tracking-wider border border-[#C6A46A]/30">
                <?= htmlspecialchars($proj['badge']) ?>
              </span>
            </div>
          </div>

          <!-- Content Body -->
          <div class="p-6 space-y-4 flex-1 flex flex-col justify-between">
            <div class="space-y-2">
              <div class="flex items-center justify-between text-xs font-mono text-[#C6A46A]">
                <span><?= htmlspecialchars($proj['category']) ?></span>
                <span><?= htmlspecialchars($proj['location']) ?></span>
              </div>
              <h3 class="text-xl font-serif font-black text-white group-hover:text-[#D9BD87] transition-colors">
                <?= htmlspecialchars($proj['name']) ?>
              </h3>
              <p class="text-xs text-[#A5A5A5] line-clamp-2 font-light leading-relaxed">
                <?= htmlspecialchars($proj['description']) ?>
              </p>
            </div>

            <!-- Features -->
            <div class="pt-4 border-t border-[#191919] flex flex-wrap gap-2 text-[11px] font-mono text-[#D9BD87]">
              <?php
                $feats = array_map('trim', explode(',', $proj['features'] ?? ''));
                foreach (array_slice($feats, 0, 3) as $f):
                  if (!empty($f)):
              ?>
                <span class="px-2.5 py-1 rounded-lg bg-[#191919] border border-[#C6A46A]/20"><?= htmlspecialchars($f) ?></span>
              <?php endif; endforeach; ?>
            </div>

            <!-- Action Buttons -->
            <div class="pt-4 flex items-center gap-3">
              <a
                href="<?= BASE_URL ?>/project-detail.php?slug=<?= urlencode($proj['slug']) ?>"
                class="flex-1 py-3 rounded-xl bg-[#191919] hover:bg-[#C6A46A]/20 border border-[#C6A46A]/40 text-[#D9BD87] text-xs font-bold uppercase tracking-wider text-center transition-colors"
              >
                View Project Details
              </a>
              <button
                type="button"
                onclick="openDossierModal('<?= htmlspecialchars($proj['name']) ?>')"
                class="px-3.5 py-3 rounded-xl bg-[#191919] hover:bg-[#C6A46A]/30 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-bold"
                title="Download Dossier"
              >
                PDF
              </button>
            </div>
          </div>

        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- ==========================================================================
     3B. ARCHITECTURAL AMENITY MATRIX (Floor-by-Floor Lifestyle Blueprint)
     ========================================================================== -->
<section id="amenity-matrix-section" class="py-24 relative bg-[#070D1E] overflow-hidden border-t border-[#C6A46A]/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
    
    <div class="text-center max-w-3xl mx-auto space-y-4 gsap-reveal">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
        <span>ARCHITECTURAL AMENITY BLUEPRINTS</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
        Floor-by-Floor <span class="text-gold-gradient">Lifestyle Blueprint</span>
      </h2>
      <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
        Engineered for total residential seclusion, distinguishing quiet living suites from vibrant wellness and recreation clubs.
      </p>
    </div>

    <!-- Level Cards Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Ground Floor -->
      <div class="p-8 rounded-3xl bg-[#101010] border border-[#C6A46A]/30 space-y-5 shadow-2xl">
        <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold block">LEVEL 01 / GROUND</span>
        <h3 class="text-xl font-serif font-black text-white">Grand Arrival & Concierge</h3>
        <p class="text-xs text-[#A5A5A5] leading-relaxed">
          Double-height reception finished in Statuario Italian marble, dedicated 24/7 concierge, private resident parcel room, and air-conditioned chauffeur lounge.
        </p>
        <div class="pt-2 border-t border-[#191919] flex items-center justify-between text-[11px] font-mono text-[#D9BD87]">
          <span>EV Charging Ingress</span>
          <span>Statuario Marble</span>
        </div>
      </div>

      <!-- Podium Level -->
      <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/50 space-y-5 shadow-2xl relative">
        <div class="absolute -top-3 right-6 px-3 py-1 rounded-full bg-gradient-to-r from-[#D9BD87] to-[#C6A46A] text-[#101010] text-[10px] font-mono font-bold uppercase tracking-wider">
          SIGNATURE CLUB
        </div>
        <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold block">LEVEL 02 / PODIUM</span>
        <h3 class="text-xl font-serif font-black text-white">Club Nirvana Wellness</h3>
        <p class="text-xs text-[#A5A5A5] leading-relaxed">
          Temperature-regulated infinity lap pool overlooking lush landscaped courtyards, Technogym fitness center, steam and cedar sauna spa, and indoor squash court.
        </p>
        <div class="pt-2 border-t border-[#101010] flex items-center justify-between text-[11px] font-mono text-[#D9BD87]">
          <span>Infinity Pool</span>
          <span>Steam & Sauna</span>
        </div>
      </div>

      <!-- Rooftop Level -->
      <div class="p-8 rounded-3xl bg-[#101010] border border-[#C6A46A]/30 space-y-5 shadow-2xl">
        <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold block">LEVEL 14 / ROOFTOP</span>
        <h3 class="text-xl font-serif font-black text-white">The Sky Deck Observatory</h3>
        <p class="text-xs text-[#A5A5A5] leading-relaxed">
          360° unobstructed Western Ahmedabad skyline vistas, open-air stargazing amphitheater, sensory reflexology trail, and private landscaped barbecue cabanas.
        </p>
        <div class="pt-2 border-t border-[#191919] flex items-center justify-between text-[11px] font-mono text-[#D9BD87]">
          <span>360° Skyline Views</span>
          <span>Sky Lounge</span>
        </div>
      </div>
    </div>

  </div>
</section>

<!-- ==========================================================================
     3C. STRATEGIC PROXIMITY & CONNECTIVITY MATRIX
     ========================================================================== -->
<section id="connectivity-matrix-section" class="py-24 relative bg-[#101010] overflow-hidden border-t border-[#C6A46A]/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#191919] pb-8">
      <div class="space-y-3 max-w-2xl">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
          <span>STRATEGIC TRANSIT & PROXIMITY INDEX</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
          Unrivaled Connectivity. <br>
          <span class="text-gold-gradient">Minutes from Key Civic & Commercial Nodes.</span>
        </h2>
        <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
          Strategically located along Western Ahmedabad's premier growth corridor, offering rapid, signal-free access to major expressways, airport, and corporate hubs.
        </p>
      </div>

      <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#191919] border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono font-bold">
        <span>● Signal-Free Arterial Routes</span>
      </div>
    </div>

    <!-- Hub Cards Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 transition-all space-y-3 shadow-xl">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono uppercase text-[#C6A46A] font-bold">Business Corridor</span>
          <span class="px-3 py-1 rounded-full bg-[#C6A46A]/10 text-[#D9BD87] text-xs font-mono font-bold">4 Mins</span>
        </div>
        <h3 class="text-lg font-serif font-bold text-white">S.G. Highway Financial Belt</h3>
        <p class="text-xs text-[#A5A5A5] leading-relaxed">
          Prime corporate towers, luxury multi-brand retail, high-end hospitality, and fine dining destinations.
        </p>
      </div>

      <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 transition-all space-y-3 shadow-xl">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono uppercase text-[#C6A46A] font-bold">Cultural Hub</span>
          <span class="px-3 py-1 rounded-full bg-[#C6A46A]/10 text-[#D9BD87] text-xs font-mono font-bold">3 Mins</span>
        </div>
        <h3 class="text-lg font-serif font-bold text-white">Science City Innovation Campus</h3>
        <p class="text-xs text-[#A5A5A5] leading-relaxed">
          World-class scientific pavilions, nature parks, planetarium, and expansive urban green infrastructure.
        </p>
      </div>

      <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 transition-all space-y-3 shadow-xl">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono uppercase text-[#C6A46A] font-bold">Healthcare</span>
          <span class="px-3 py-1 rounded-full bg-[#C6A46A]/10 text-[#D9BD87] text-xs font-mono font-bold">7 Mins</span>
        </div>
        <h3 class="text-lg font-serif font-bold text-white">Zydus Super-Speciality Hospital</h3>
        <p class="text-xs text-[#A5A5A5] leading-relaxed">
          Tertiary care multi-speciality medical campus, trauma facilities, and internationally certified surgeons.
        </p>
      </div>

      <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 transition-all space-y-3 shadow-xl">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono uppercase text-[#C6A46A] font-bold">Education</span>
          <span class="px-3 py-1 rounded-full bg-[#C6A46A]/10 text-[#D9BD87] text-xs font-mono font-bold">8 Mins</span>
        </div>
        <h3 class="text-lg font-serif font-bold text-white">International Schools & Academies</h3>
        <p class="text-xs text-[#A5A5A5] leading-relaxed">
          Renowned IB/CBSE international schools, premier academic campuses, and sports academies.
        </p>
      </div>

      <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 transition-all space-y-3 shadow-xl">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono uppercase text-[#C6A46A] font-bold">Air Transit</span>
          <span class="px-3 py-1 rounded-full bg-[#C6A46A]/10 text-[#D9BD87] text-xs font-mono font-bold">25 Mins</span>
        </div>
        <h3 class="text-lg font-serif font-bold text-white">Ahmedabad International Airport (AMD)</h3>
        <p class="text-xs text-[#A5A5A5] leading-relaxed">
          Direct expressway access to domestic and international terminals without city center traffic delays.
        </p>
      </div>

      <div class="p-6 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 transition-all space-y-3 shadow-xl">
        <div class="flex items-center justify-between">
          <span class="text-xs font-mono uppercase text-[#C6A46A] font-bold">High-Speed Rail</span>
          <span class="px-3 py-1 rounded-full bg-[#C6A46A]/10 text-[#D9BD87] text-xs font-mono font-bold">18 Mins</span>
        </div>
        <h3 class="text-lg font-serif font-bold text-white">Sabarmati High-Speed Terminal</h3>
        <p class="text-xs text-[#A5A5A5] leading-relaxed">
          Rapid transit connection to the Mumbai-Ahmedabad High-Speed Bullet Train multi-modal hub.
        </p>
      </div>
    </div>

  </div>
</section>

<!-- ==========================================================================
     4. SERVICES & EXPERTISE
     ========================================================================== -->
<section id="services-section" class="py-24 relative bg-[#101010] overflow-hidden border-t border-[#C6A46A]/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
    
    <div class="text-center max-w-3xl mx-auto space-y-4 gsap-reveal">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
        <span>OUR CAPABILITIES</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
        Services & <span class="text-gold-gradient">Expertise</span>
      </h2>
      <div class="w-20 h-1 bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent mx-auto rounded-full"></div>
      <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
        Comprehensive architectural, construction, and property development services executed to the highest standards.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <?php foreach ($services as $serv): ?>
        <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 glass-card-hover space-y-4 shadow-xl gsap-reveal">
          <div class="w-12 h-12 rounded-2xl bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] flex items-center justify-center font-bold">
            <svg class="w-6 h-6 text-[#C6A46A]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path></svg>
          </div>
          <h3 class="text-xl font-serif font-bold text-white"><?= htmlspecialchars($serv['title']) ?></h3>
          <p class="text-xs sm:text-sm text-[#A5A5A5] leading-relaxed font-light">
            <?= htmlspecialchars($serv['short_desc']) ?>
          </p>
          <div class="pt-2">
            <a href="<?= BASE_URL ?>/contact.php" class="text-xs font-mono text-[#D9BD87] hover:underline uppercase tracking-wider flex items-center gap-1 font-bold">
              <span>Consult on Service</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </a>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- ==========================================================================
     5. INSTAGRAM REELS & DIGITAL CHANNEL
     ========================================================================== -->
<section id="instagram-reels-section" class="py-24 relative bg-[#191919] overflow-hidden border-t border-[#C6A46A]/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
    
    <div class="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#101010] pb-8 gsap-reveal">
      <div class="space-y-3 max-w-2xl">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-[#C6A46A]/20 border border-pink-500/30 text-pink-300 text-xs font-mono uppercase tracking-widest">
          <svg class="w-3.5 h-3.5 text-pink-400 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
          <span>OFFICIAL INSTAGRAM CHANNEL</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
          Visual Journeys & <span class="text-gold-gradient">Reels</span>
        </h2>
        <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
          Follow <strong class="text-[#D9BD87]">@<?= htmlspecialchars($instaAccount['username']) ?></strong> for real-time site updates, architectural walkthroughs, and VIP milestone reveals.
        </p>
      </div>

      <a
        href="<?= htmlspecialchars($instaAccount['profile_url']) ?>"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-purple-600 via-pink-600 to-[#C6A46A] text-white text-xs font-black uppercase tracking-wider shadow-lg hover:scale-105 transition-all self-start md:self-auto"
      >
        <span>Follow @<?= htmlspecialchars($instaAccount['username']) ?></span>
        <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
      </a>
    </div>

    <!-- Reels Video-Card Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <?php foreach ($instagramReels as $reel): ?>
        <div class="group rounded-3xl bg-[#101010] border border-[#C6A46A]/20 hover:border-[#C6A46A]/60 overflow-hidden shadow-2xl flex flex-col justify-between transition-all glass-card-hover gsap-reveal">
          
          <div class="relative h-80 overflow-hidden">
            <img
              src="<?= htmlspecialchars($reel['thumbnail_url']) ?>"
              alt="<?= htmlspecialchars($reel['title']) ?>"
              class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 filter brightness-90"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/20 to-black/40"></div>

            <div class="absolute inset-0 flex items-center justify-center">
              <a
                href="<?= htmlspecialchars($reel['reel_url']) ?>"
                target="_blank"
                rel="noopener noreferrer"
                class="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-600 to-pink-600 text-white flex items-center justify-center shadow-[0_0_25px_rgba(219,39,119,0.5)] group-hover:scale-110 transition-transform"
                title="Play Reel on Instagram"
              >
                <svg class="w-6 h-6 fill-current ml-1" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </a>
            </div>

            <div class="absolute top-4 left-4 right-4 flex items-center justify-between">
              <span class="px-2.5 py-1 rounded-full bg-[#101010]/80 backdrop-blur-md text-[#D9BD87] text-[10px] font-mono uppercase tracking-wider font-bold border border-[#C6A46A]/30">
                <?= htmlspecialchars($reel['project_tag']) ?>
              </span>
              <span class="px-2 py-0.5 rounded-full bg-pink-950/80 text-pink-300 text-[10px] font-mono border border-pink-500/40">
                REEL
              </span>
            </div>

            <div class="absolute bottom-4 left-4 right-4">
              <h4 class="text-sm font-bold text-white line-clamp-2"><?= htmlspecialchars($reel['title']) ?></h4>
            </div>
          </div>

          <div class="p-4 pt-2">
            <a
              href="<?= htmlspecialchars($reel['reel_url']) ?>"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full py-2.5 rounded-xl bg-[#191919] hover:bg-[#C6A46A]/20 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono font-bold uppercase tracking-wider text-center flex items-center justify-center gap-1.5 transition-colors"
            >
              <span>Watch on Instagram</span>
              <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
            </a>
          </div>

        </div>
      <?php endforeach; ?>
    </div>

  </div>
</section>

<!-- ==========================================================================
     6. ARCHITECTURAL GALLERY (WITH LIGHTBOX SUPPORT)
     ========================================================================== -->
<section id="gallery-section" class="py-24 relative bg-[#101010] overflow-hidden border-t border-[#C6A46A]/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
    
    <div class="text-center max-w-3xl mx-auto space-y-4 gsap-reveal">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
        <span>PHOTOGRAPHIC CURATION</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
        Architectural <span class="text-gold-gradient">Gallery</span>
      </h2>
      <div class="w-20 h-1 bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent mx-auto rounded-full"></div>
      <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
        Glimpses into our structural engineering, double-height foyers, landscaped podiums, and interior artistry.
      </p>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <?php foreach (array_slice($galleryImages, 0, 6) as $img): ?>
        <div
          class="gallery-item group relative h-72 rounded-3xl overflow-hidden border border-[#C6A46A]/20 hover:border-[#C6A46A]/70 cursor-pointer shadow-xl transition-all gsap-reveal"
          data-src="<?= htmlspecialchars($img['image_url']) ?>"
          data-caption="<?= htmlspecialchars($img['title']) ?> (<?= htmlspecialchars($img['category']) ?>)"
        >
          <img
            src="<?= htmlspecialchars($img['image_url']) ?>"
            alt="<?= htmlspecialchars($img['title']) ?>"
            class="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
          >
          <div class="absolute inset-0 bg-gradient-to-t from-[#101010] via-black/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity"></div>
          
          <div class="absolute bottom-4 left-4 right-4 space-y-1">
            <span class="text-[10px] font-mono uppercase tracking-widest text-[#C6A46A] font-bold"><?= htmlspecialchars($img['category']) ?></span>
            <h4 class="text-base font-serif font-bold text-white"><?= htmlspecialchars($img['title']) ?></h4>
          </div>

          <div class="absolute top-4 right-4 w-9 h-9 rounded-full bg-[#101010]/80 border border-[#C6A46A]/40 text-[#D9BD87] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"></path></svg>
          </div>
        </div>
      <?php endforeach; ?>
    </div>

    <div class="text-center pt-4">
      <a
        href="<?= BASE_URL ?>/gallery.php"
        class="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-[#191919] hover:bg-[#C6A46A]/20 border border-[#C6A46A]/40 text-[#D9BD87] text-xs font-bold uppercase tracking-wider transition-colors"
      >
        <span>Explore Full Architectural Gallery (<?= count($galleryImages) ?> Images)</span>
        <svg class="w-4 h-4 text-[#C6A46A]" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
      </a>
    </div>

  </div>
</section>

<!-- ==========================================================================
     7. WHY CHOOSE US & TESTIMONIALS
     ========================================================================== -->
<section class="py-24 relative bg-[#191919] overflow-hidden border-t border-[#C6A46A]/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
    
    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
      
      <!-- Left: Standards & Pillars -->
      <div class="lg:col-span-6 space-y-6 text-left gsap-reveal">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
          <span>THE NIRVANA COMMITMENT</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-black text-white leading-tight">
          Engineering Built on <span class="text-gold-gradient">Integrity</span>
        </h2>
        <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
          We combine generational construction expertise with avant-garde architectural vision. Every property is backed by verified legal due diligence and master craftsmanship.
        </p>

        <div class="space-y-4 pt-2">
          <div class="p-4 rounded-2xl bg-[#101010] border border-[#C6A46A]/20 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] flex items-center justify-center font-bold shrink-0">
              01
            </div>
            <div>
              <h4 class="text-base font-serif font-bold text-white">Uncompromising Structural Integrity</h4>
              <p class="text-xs text-[#A5A5A5] mt-0.5">High-tensile rebar, grade-tested concrete mixes, and earthquake-resistant bedrock foundations.</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-[#101010] border border-[#C6A46A]/20 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] flex items-center justify-center font-bold shrink-0">
              02
            </div>
            <div>
              <h4 class="text-base font-serif font-bold text-white">100% RERA & Legal Transparency</h4>
              <p class="text-xs text-[#A5A5A5] mt-0.5">Clear titles, verified documentation, and strict adherence to town planning and environmental regulations.</p>
            </div>
          </div>

          <div class="p-4 rounded-2xl bg-[#101010] border border-[#C6A46A]/20 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] flex items-center justify-center font-bold shrink-0">
              03
            </div>
            <div>
              <h4 class="text-base font-serif font-bold text-white">Curated Luxury Lifestyle Services</h4>
              <p class="text-xs text-[#A5A5A5] mt-0.5">Dedicated concierge facilities, automated access gates, EV charging grids, and biometric access controls.</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Testimonials -->
      <div class="lg:col-span-6 gsap-reveal">
        <div class="p-8 rounded-3xl bg-[#101010] border border-[#C6A46A]/30 space-y-6 shadow-2xl">
          <div class="flex items-center justify-between border-b border-[#191919] pb-4">
            <div>
              <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold block">CLIENT TESTIMONIALS</span>
              <h3 class="text-xl font-serif font-black text-white mt-1">Voices of Trust</h3>
            </div>
          </div>

          <div class="space-y-4">
            <?php foreach ($testimonials as $t): ?>
              <div class="p-4 rounded-2xl bg-[#191919] border border-[#C6A46A]/10 space-y-2">
                <p class="text-xs text-[#F5F1E9] italic font-light leading-relaxed">
                  "<?= htmlspecialchars($t['comment']) ?>"
                </p>
                <div class="pt-2 border-t border-[#101010] flex items-center justify-between text-xs">
                  <div>
                    <h5 class="font-bold text-white"><?= htmlspecialchars($t['client_name']) ?></h5>
                    <p class="text-[10px] text-[#A5A5A5]"><?= htmlspecialchars($t['designation']) ?></p>
                  </div>
                  <span class="text-[10px] font-mono text-[#D9BD87] font-bold"><?= htmlspecialchars($t['project_name']) ?></span>
                </div>
              </div>
            <?php endforeach; ?>
          </div>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- ==========================================================================
     8. CONTACT & ENQUIRY SECTION ("Let's Build Something Extraordinary.")
     ========================================================================== -->
<section id="contact-section" class="py-24 relative bg-[#101010] overflow-hidden border-t border-[#C6A46A]/20">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
    
    <div class="text-center max-w-3xl mx-auto space-y-4 gsap-reveal">
      <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
        <span>GET IN TOUCH</span>
      </div>
      <h2 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
        Let's Build Something <span class="text-gold-gradient">Extraordinary.</span>
      </h2>
      <div class="w-20 h-1 bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent mx-auto rounded-full"></div>
      <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
        Whether you are seeking a landmark luxury residence or an institutional commercial asset, our advisory team is at your disposal.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
      
      <!-- Left Column: Verified Office Headquarters Info -->
      <div class="lg:col-span-5 space-y-6 gsap-reveal">
        <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 space-y-6 shadow-2xl">
          <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold block">CORPORATE PRESENCE</span>
          
          <div class="space-y-4 text-xs text-[#A5A5A5]">
            <div class="flex items-start gap-3.5">
              <svg class="w-5 h-5 text-[#C6A46A] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              <div>
                <span class="text-white font-bold block text-sm">Headquarters</span>
                <p class="leading-relaxed mt-0.5 text-[#F5F1E9]"><?= COMPANY_ADDRESS ?></p>
                <p class="text-[11px] text-[#C6A46A] mt-0.5">Private boardroom consultations by appointment</p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <svg class="w-5 h-5 text-[#C6A46A] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
              <div>
                <span class="text-white font-bold block text-sm">Client Advisory Desk</span>
                <p class="text-[#D9BD87] font-medium text-xs mt-0.5">Priority Advisory Concierge Active</p>
                <p class="text-[11px] text-[#A5A5A5] mt-0.5">Direct scheduling via enquiry form</p>
              </div>
            </div>

            <div class="flex items-start gap-3.5">
              <svg class="w-5 h-5 text-[#C6A46A] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
              <div>
                <span class="text-white font-bold block text-sm">Corporate Correspondence</span>
                <a href="mailto:<?= COMPANY_EMAIL ?>" class="text-[#F5F1E9] hover:text-[#C6A46A] hover:underline block mt-0.5 truncate"><?= COMPANY_EMAIL ?></a>
              </div>
            </div>
          </div>

          <div class="pt-4 border-t border-[#101010]">
            <a
              href="#nirvana-contact-form"
              class="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C6A46A] to-[#D9BD87] text-[#101010] font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-lg hover:opacity-95"
            >
              <span>Instant Advisory Request</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Right Column: Interactive PDO Form -->
      <div class="lg:col-span-7 gsap-reveal">
        <div class="p-8 sm:p-10 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 shadow-2xl space-y-6">
          <form id="nirvana-contact-form" action="<?= BASE_URL ?>/api/submit-enquiry.php" method="POST" class="space-y-5 text-xs">
            <input type="hidden" name="csrf_token" value="<?= $csrfToken ?>">

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="space-y-1.5">
                <label class="font-bold uppercase tracking-wider text-[#D9BD87]">Your Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="e.g. Vikramaditya Shah"
                  class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A46A]"
                >
              </div>

              <div class="space-y-1.5">
                <label class="font-bold uppercase tracking-wider text-[#D9BD87]">Phone / WhatsApp Number *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. +91 98XXX XXXXX"
                  class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A46A]"
                >
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div class="space-y-1.5">
                <label class="font-bold uppercase tracking-wider text-[#D9BD87]">Email Address (Optional)</label>
                <input
                  type="email"
                  name="email"
                  placeholder="name@example.com"
                  class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A46A]"
                >
              </div>

              <div class="space-y-1.5">
                <label class="font-bold uppercase tracking-wider text-[#D9BD87]">Project of Interest</label>
                <select
                  name="project_interest"
                  class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A46A]"
                >
                  <option value="General Inquiry">General Advisory / Consultation</option>
                  <?php foreach ($projects as $p): ?>
                    <option value="<?= htmlspecialchars($p['name']) ?>"><?= htmlspecialchars($p['name']) ?> (<?= htmlspecialchars($p['location']) ?>)</option>
                  <?php endforeach; ?>
                </select>
              </div>
            </div>

            <div class="space-y-1.5">
              <label class="font-bold uppercase tracking-wider text-[#D9BD87]">Specific Architectural Requirements</label>
              <textarea
                name="message"
                rows="4"
                placeholder="Mention specific configuration (3BHK, 4BHK, Villa Plot, Commercial Showroom) or site visit preferences..."
                class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A46A]"
              ></textarea>
            </div>

            <button
              type="submit"
              class="w-full py-4 rounded-xl text-xs sm:text-sm font-black uppercase tracking-wider text-[#101010] bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] shadow-lg hover:shadow-[0_0_25px_rgba(198,164,106,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>SEND CONFIDENTIAL ENQUIRY</span>
              <svg class="w-4 h-4 text-[#101010]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
            </button>
          </form>
        </div>
      </div>

    </div>

  </div>
</section>

<!-- ==========================================================================
     CONFIDENTIAL PROJECT DOSSIER MODAL
     ========================================================================== -->
<div id="dossier-modal" class="fixed inset-0 z-50 hidden items-center justify-center p-4 bg-black/85 backdrop-blur-md">
  <div class="relative w-full max-w-lg p-6 sm:p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/40 shadow-2xl space-y-5">
    <button
      type="button"
      onclick="closeDossierModal()"
      class="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#101010] text-[#D9BD87] border border-[#C6A46A]/40 flex items-center justify-center font-bold text-lg cursor-pointer hover:bg-[#C6A46A] hover:text-[#101010]"
    >
      &times;
    </button>

    <div class="space-y-2">
      <span class="text-[10px] font-mono uppercase tracking-widest text-[#C6A46A] font-bold block">CONFIDENTIAL PRIVILEGE ACCESS</span>
      <h3 class="text-2xl font-serif font-black text-white">Download Project Dossier</h3>
      <p class="text-xs text-[#A5A5A5] leading-relaxed">
        Access comprehensive architectural layouts, engineering specifications, and structural RERA certifications.
      </p>
    </div>

    <form onsubmit="handleDossierSubmit(event)" class="space-y-4 text-xs">
      <div>
        <label class="font-bold text-[#D9BD87] block mb-1">Select Landmark Project *</label>
        <select id="dossier-project-select" required class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
          <?php foreach ($projects as $p): ?>
            <option value="<?= htmlspecialchars($p['name']) ?>"><?= htmlspecialchars($p['name']) ?> (<?= htmlspecialchars($p['location']) ?>)</option>
          <?php endforeach; ?>
        </select>
      </div>

      <div>
        <label class="font-bold text-[#D9BD87] block mb-1">Your Full Name *</label>
        <input type="text" id="dossier-name" required placeholder="e.g. Vikramaditya Shah" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
      </div>

      <div>
        <label class="font-bold text-[#D9BD87] block mb-1">Mobile / WhatsApp Number *</label>
        <input type="tel" id="dossier-phone" required placeholder="+91 98XXX XXXXX" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
      </div>

      <div>
        <label class="font-bold text-[#D9BD87] block mb-1">Corporate Email (Optional)</label>
        <input type="email" id="dossier-email" placeholder="name@company.com" class="w-full bg-[#101010] border border-slate-700 focus:border-[#C6A46A] rounded-xl p-3 text-white outline-none">
      </div>

      <button type="submit" class="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] font-black uppercase tracking-wider shadow-lg hover:opacity-95 transition-all">
        Request Confidential Dossier (PDF)
      </button>

      <p class="text-[10px] text-slate-500 text-center">
        Strict privacy guaranteed. Handled exclusively by our senior advisory desk.
      </p>
    </form>
  </div>
</div>

<!-- ==========================================================================
     FULL-SCREEN LIGHTBOX MODAL FOR GALLERY PREVIEWS
     ========================================================================== -->
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

<!-- Lighting Switcher & Modal Script -->
<script>
function setPhpLighting(mode) {
  const img = document.getElementById('php-hero-img');
  const overlay = document.getElementById('php-hero-overlay');
  const btns = document.querySelectorAll('.php-light-btn');
  
  btns.forEach(b => {
    b.className = 'php-light-btn px-2.5 py-1 rounded-full text-[10px] font-mono text-slate-400 hover:text-white';
  });

  const activeBtn = document.getElementById('btn-light-' + mode);
  if (activeBtn) {
    activeBtn.className = 'php-light-btn px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-gradient-to-r from-[#D9BD87] to-[#C6A46A] text-[#101010] shadow-md';
  }

  if (mode === 'day') {
    img.style.filter = 'brightness(1.08) contrast(1.05) saturate(1.08)';
    overlay.className = 'absolute inset-0 bg-gradient-to-t from-[#101010]/80 via-transparent to-sky-400/10 pointer-events-none transition-colors duration-700';
  } else if (mode === 'sunset') {
    img.style.filter = 'brightness(0.98) contrast(1.15) sepia(0.25) saturate(1.3)';
    overlay.className = 'absolute inset-0 bg-gradient-to-t from-[#101010] via-amber-900/20 to-orange-500/25 pointer-events-none transition-colors duration-700';
  } else {
    img.style.filter = 'brightness(0.92) contrast(1.22) saturate(1.15)';
    overlay.className = 'absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/40 to-indigo-950/40 pointer-events-none transition-colors duration-700';
  }
}

function openDossierModal(projectName) {
  const modal = document.getElementById('dossier-modal');
  if (modal) {
    modal.classList.remove('hidden');
    modal.classList.add('flex');
    if (projectName) {
      const select = document.getElementById('dossier-project-select');
      if (select) select.value = projectName;
    }
  }
}

function closeDossierModal() {
  const modal = document.getElementById('dossier-modal');
  if (modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
}

function handleDossierSubmit(e) {
  e.preventDefault();
  const proj = document.getElementById('dossier-project-select').value;
  const name = document.getElementById('dossier-name').value;
  alert('Thank you, ' + name + '! The Confidential Project Dossier for ' + proj + ' has been scheduled for dispatch to your WhatsApp/Email.');
  closeDossierModal();
}
</script>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
