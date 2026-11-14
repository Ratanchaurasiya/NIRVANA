<?php
/**
 * Nirvana Group - Luxury Navigation Bar
 * Transparent on top, solid dark gold-accented on scroll
 */
?>
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
    <nav id="navbar-box" class="rounded-2xl border transition-all duration-500 backdrop-blur-xl px-5 sm:px-6 py-3.5 flex items-center justify-between bg-[#101010]/90 border-[#C6A46A]/30 shadow-[0_15px_35px_rgba(0,0,0,0.8)] text-white">
      
      <!-- Nirvana Group Brand Logo -->
      <a href="<?= BASE_URL ?>/" class="flex items-center gap-3.5 group text-left">
        <div class="w-11 h-11 rounded-xl bg-gradient-to-br from-[#D9BD87] via-[#C6A46A] to-[#997825] p-0.5 shadow-lg group-hover:scale-105 transition-transform flex items-center justify-center">
          <div class="w-full h-full bg-[#101010] rounded-[10px] flex items-center justify-center">
            <!-- Architectural Apex Monogram Logo -->
            <svg viewBox="0 0 100 100" class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 12 L84 78 H68 L50 42 L32 78 H16 L50 12 Z" fill="#C6A46A" />
              <path d="M36 60 H64 V68 H36 V60 Z" fill="#F5F1E9" />
              <rect x="22" y="82" width="56" height="5" rx="2.5" fill="#D9BD87" />
            </svg>
          </div>
        </div>
        <div>
          <span class="font-serif font-black text-lg sm:text-xl tracking-wider uppercase text-white block text-sharp">
            NIRVANA <span class="text-[#C6A46A]">GROUP</span>
          </span>
          <span class="text-[9px] font-mono text-[#D9BD87] tracking-[0.25em] block uppercase text-sharp">
            BUILDING DREAMS
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links (Home, About Us, Our Projects, Services, Gallery, Instagram, Contact) -->
      <div class="hidden lg:flex items-center gap-1 xl:gap-2">
        <?php
        $navLinks = [
          ['name' => 'Home', 'url' => BASE_URL . '/', 'key' => 'home'],
          ['name' => 'About Us', 'url' => BASE_URL . '/about.php', 'key' => 'about'],
          ['name' => 'Our Projects', 'url' => BASE_URL . '/projects.php', 'key' => 'projects'],
          ['name' => 'Services', 'url' => BASE_URL . '/services.php', 'key' => 'services'],
          ['name' => 'Gallery', 'url' => BASE_URL . '/gallery.php', 'key' => 'gallery'],
          ['name' => 'Instagram', 'url' => BASE_URL . '/instagram.php', 'key' => 'instagram'],
          ['name' => 'Contact', 'url' => BASE_URL . '/contact.php', 'key' => 'contact']
        ];

        foreach ($navLinks as $link):
          $isActive = ($activeNav === $link['key']);
        ?>
          <a
            href="<?= $link['url'] ?>"
            class="px-3.5 py-2 rounded-xl text-xs font-bold uppercase tracking-wider transition-all <?= $isActive ? 'bg-[#C6A46A] text-[#101010] shadow-[0_0_15px_rgba(198,164,106,0.5)] font-extrabold' : 'text-[#A5A5A5] hover:text-white hover:bg-[#191919] hover:border-[#C6A46A]/30 border border-transparent' ?>"
          >
            <?= $link['name'] ?>
          </a>
        <?php endforeach; ?>
      </div>

      <!-- Right Action CTA & Mobile Toggle -->
      <div class="flex items-center gap-3">
        <!-- Gold Contact Us CTA Button -->
        <a
          href="<?= BASE_URL ?>/contact.php"
          class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] text-xs font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(198,164,106,0.6)] hover:-translate-y-0.5 transition-all"
        >
          <span>Connect With Us</span>
          <svg class="w-3.5 h-3.5 text-[#101010]" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>

        <!-- Mobile Menu Hamburger Button -->
        <button
          id="mobile-menu-btn"
          type="button"
          class="lg:hidden p-2.5 rounded-xl bg-[#191919] border border-[#C6A46A]/30 text-[#C6A46A] hover:bg-[#C6A46A]/10 transition-colors"
          aria-label="Toggle Mobile Menu"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

    </nav>

    <!-- Mobile Dropdown Navigation Menu -->
    <div id="mobile-menu" class="hidden lg:hidden mt-2 p-4 rounded-2xl bg-[#101010]/95 border border-[#C6A46A]/40 backdrop-blur-2xl shadow-2xl space-y-2">
      <?php foreach ($navLinks as $link): ?>
        <a
          href="<?= $link['url'] ?>"
          class="block w-full p-3 rounded-xl text-left text-xs font-bold uppercase tracking-wider transition-all <?= ($activeNav === $link['key']) ? 'bg-[#C6A46A] text-[#101010] font-black' : 'text-[#F5F1E9] hover:bg-[#191919]' ?>"
        >
          <?= $link['name'] ?>
        </a>
      <?php endforeach; ?>
      <div class="pt-2">
        <a
          href="<?= BASE_URL ?>/contact.php"
          class="block w-full py-3 text-center rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] text-xs font-black uppercase tracking-wider"
        >
          Connect With Us
        </a>
      </div>
    </div>

  </div>
</header>
