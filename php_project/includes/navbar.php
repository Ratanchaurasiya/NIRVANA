<?php
/**
 * Nirvana Group - Luxury Navigation Bar
 * Transparent on top, solid dark gold-accented on scroll
 */
?>
<header id="main-header" class="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
  <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-3">
    <nav id="navbar-box" class="rounded-none border transition-all duration-500 backdrop-blur-xl px-5 sm:px-6 py-3.5 flex items-center justify-between bg-white/95 border-[#E6E2D8] shadow-sm text-[#171717]">
      
      <!-- Nirvana Group Brand Logo -->
      <a href="<?= BASE_URL ?>/" class="flex items-center gap-3.5 group text-left">
        <div class="w-10 h-10 rounded-none bg-[#F5F3EE] border border-[#E6E2D8] p-1 shadow-sm group-hover:border-[#B69B65] transition-colors flex items-center justify-center">
          <!-- Architectural Apex Monogram Logo -->
          <svg viewBox="0 0 100 100" class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 12 L84 78 H68 L50 42 L32 78 H16 L50 12 Z" fill="#B69B65" />
            <path d="M36 60 H64 V68 H36 V60 Z" fill="#171717" />
            <rect x="22" y="82" width="56" height="4" fill="#B69B65" />
          </svg>
        </div>
        <div>
          <span class="font-serif font-bold text-lg sm:text-xl tracking-wider uppercase text-[#171717] block text-sharp">
            NIRVANA <span class="text-[#B69B65]">GROUP</span>
          </span>
          <span class="text-[9px] font-mono text-[#77736C] tracking-[0.25em] block uppercase text-sharp">
            BUILDING DREAMS. CREATING LANDMARKS.
          </span>
        </div>
      </a>

      <!-- Desktop Navigation Links (Home, About Us, Our Projects, Services, Gallery, Instagram, Contact) -->
      <div className="hidden lg:flex items-center gap-1 xl:gap-2">
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
            class="px-3.5 py-2 rounded-none text-xs font-mono uppercase tracking-wider transition-all <?= $isActive ? 'bg-[#B69B65] text-white font-bold' : 'text-[#4B4842] hover:text-[#171717] hover:bg-[#F5F3EE] border border-transparent' ?>"
          >
            <?= $link['name'] ?>
          </a>
        <?php endforeach; ?>
      </div>

      <!-- Right Action CTA & Mobile Toggle -->
      <div class="flex items-center gap-3">
        <!-- Champagne Gold Contact Us CTA Button -->
        <a
          href="<?= BASE_URL ?>/contact.php"
          class="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-none bg-[#B69B65] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#A38854] transition-all"
        >
          <span>Connect With Us</span>
          <svg class="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>

        <!-- Mobile Menu Hamburger Button -->
        <button
          id="mobile-menu-btn"
          type="button"
          class="lg:hidden p-2.5 rounded-none bg-white border border-[#E6E2D8] text-[#171717] hover:bg-[#F5F3EE] transition-colors"
          aria-label="Toggle Mobile Menu"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>

    </nav>

    <!-- Mobile Dropdown Navigation Menu -->
    <div id="mobile-menu" class="hidden lg:hidden mt-2 p-4 rounded-none bg-white/95 border border-[#E6E2D8] backdrop-blur-2xl shadow-xl space-y-2">
      <?php foreach ($navLinks as $link): ?>
        <a
          href="<?= $link['url'] ?>"
          class="block w-full p-3 rounded-none text-left text-xs font-mono uppercase tracking-wider transition-all <?= ($activeNav === $link['key']) ? 'bg-[#B69B65] text-white font-bold' : 'text-[#171717] hover:bg-[#F5F3EE]' ?>"
        >
          <?= $link['name'] ?>
        </a>
      <?php endforeach; ?>
      <div class="pt-2">
        <a
          href="<?= BASE_URL ?>/contact.php"
          class="block w-full py-3 text-center rounded-none bg-[#B69B65] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#A38854]"
        >
          Connect With Us
        </a>
      </div>
    </div>

  </div>
</header>
