<?php
/**
 * Nirvana Group - Shared Page Footer
 * Luxury Black & Gold Theme with verified contact details
 */
?>
<footer class="bg-[#141414] text-[#A39F97] border-t border-[#2E2E2E] pt-20 pb-12 relative overflow-hidden z-20">

  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
    
    <!-- Top Grid Section -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12">
      
      <!-- Column 1: Brand & Identity -->
      <div class="lg:col-span-5 space-y-5">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] p-1 shadow-sm flex items-center justify-center">
            <svg viewBox="0 0 100 100" class="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M50 12 L84 78 H68 L50 42 L32 78 H16 L50 12 Z" fill="#B69B65" />
              <path d="M36 60 H64 V68 H36 V60 Z" fill="#F5F1E8" />
              <rect x="22" y="82" width="56" height="4" fill="#B69B65" />
            </svg>
          </div>
          <div>
            <span class="font-serif font-bold text-xl tracking-wider uppercase text-[#F5F1E8] block">
              NIRVANA <span class="text-[#B69B65]">GROUP</span>
            </span>
            <span class="text-[9px] font-mono text-[#77736C] tracking-[0.25em] block uppercase">
              BUILDING DREAMS. CREATING LANDMARKS.
            </span>
          </div>
        </div>

        <p class="text-sm text-[#A39F97] leading-relaxed max-w-md font-light">
          Creating exceptional spaces through vision, innovation, and architectural excellence. Shaping Gujarat's skyline with landmark residential towers and prime corporate destinations.
        </p>

        <!-- Social Media Links -->
        <div class="pt-2">
          <span class="text-[10px] font-mono uppercase tracking-widest text-[#B69B65] block mb-2.5 font-bold">OFFICIAL SOCIAL CHANNELS</span>
          <div class="flex items-center gap-3">
            <a
              href="<?= OFFICIAL_INSTAGRAM_URL ?>"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#B69B65] text-[#B69B65] flex items-center justify-center transition-colors shadow-sm"
              title="Follow Nirvana Group on Instagram"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a
              href="<?= BASE_URL ?>/contact.php"
              class="w-10 h-10 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] hover:border-[#B69B65] text-[#B69B65] flex items-center justify-center transition-colors shadow-sm"
              title="Contact Nirvana Group"
            >
              <svg class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.007c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.072.376-.044.101-.116.433-.506.549-.68.116-.173.231-.145.39-.086.159.058 1.011.477 1.184.564.173.087.289.13.332.202.043.073.043.419-.101.824z"/></svg>
            </a>
          </div>
        </div>
      </div>

      <!-- Column 2: Navigation Links -->
      <div class="lg:col-span-3 space-y-4">
        <h4 class="text-xs font-mono uppercase tracking-widest text-[#B69B65] font-bold">EXPLORE PORTFOLIO</h4>
        <ul class="space-y-2.5 text-xs uppercase font-medium">
          <li><a href="<?= BASE_URL ?>/" class="hover:text-[#F5F1E8] transition-colors">Home</a></li>
          <li><a href="<?= BASE_URL ?>/about.php" class="hover:text-[#F5F1E8] transition-colors">About Us</a></li>
          <li><a href="<?= BASE_URL ?>/projects.php" class="hover:text-[#F5F1E8] transition-colors">Our Projects</a></li>
          <li><a href="<?= BASE_URL ?>/services.php" class="hover:text-[#F5F1E8] transition-colors">Services & Expertise</a></li>
          <li><a href="<?= BASE_URL ?>/gallery.php" class="hover:text-[#F5F1E8] transition-colors">Architectural Gallery</a></li>
          <li><a href="<?= BASE_URL ?>/instagram.php" class="hover:text-[#F5F1E8] transition-colors">Instagram & Reels</a></li>
          <li><a href="<?= BASE_URL ?>/contact.php" class="hover:text-[#F5F1E8] transition-colors">Contact & Enquiries</a></li>
          <li><a href="<?= BASE_URL ?>/privacy-policy.php" class="hover:text-[#F5F1E8] transition-colors">Privacy Policy</a></li>
          <li><a href="<?= BASE_URL ?>/terms-and-conditions.php" class="hover:text-[#F5F1E8] transition-colors">Terms & Conditions</a></li>
        </ul>
      </div>

      <!-- Column 3: Verified Office Headquarters -->
      <div class="lg:col-span-4 space-y-4">
        <h4 class="text-xs font-mono uppercase tracking-widest text-[#B69B65] font-bold">HEADQUARTERS & PRESENCE</h4>
        <div class="space-y-3 text-xs text-[#A39F97]">
          <div class="flex items-start gap-3">
            <svg class="w-4 h-4 text-[#B69B65] shrink-0 mt-0.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            <div>
              <p class="font-bold text-[#F5F1E8] leading-relaxed">
                <?= COMPANY_ADDRESS ?>
              </p>
              <p class="text-[11px] text-[#77736C] mt-0.5">
                Private boardroom consultations & site visits by appointment
              </p>
            </div>
          </div>

          <div class="flex items-center gap-3">
            <svg class="w-4 h-4 text-[#B69B65] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <a href="mailto:<?= COMPANY_EMAIL ?>" class="text-[#F5F1E8] hover:text-[#B69B65] hover:underline truncate">
              <?= COMPANY_EMAIL ?>
            </a>
          </div>

          <div class="pt-1">
            <a
              href="<?= BASE_URL ?>/contact.php"
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-none bg-[#1F1F1F] hover:bg-[#242424] border border-[#2E2E2E] text-[#B69B65] text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              <span>Schedule Consultation</span>
            </a>
          </div>
        </div>

        <div class="pt-4 border-t border-[#2E2E2E]">
          <a href="<?= BASE_URL ?>/admin/login.php" class="text-[11px] font-mono text-[#77736C] hover:text-[#B69B65] transition-colors flex items-center gap-1.5">
            <span>Staff & Admin Portal</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Bar & Copyright -->
    <div class="pt-8 border-t border-[#2E2E2E] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#77736C]">
      <p>© <?= date('Y') ?> NIRVANA GROUP. ALL RIGHTS RESERVED. BUILDING DREAMS. CREATING LANDMARKS.</p>

      <button
        onclick="window.scrollTo({top: 0, behavior: 'smooth'});"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-none bg-[#1F1F1F] hover:bg-[#242424] text-[#B69B65] border border-[#2E2E2E] text-[11px] font-bold uppercase transition-all"
      >
        <span>Back to top</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"></path></svg>
      </button>
    </div>

  </div>
</footer>
          </div>

          <div class="flex items-center gap-3">
            <svg class="w-4 h-4 text-[#C6A46A] shrink-0" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            <a href="mailto:<?= COMPANY_EMAIL ?>" class="text-[#F5F1E9] hover:text-[#C6A46A] hover:underline truncate">
              <?= COMPANY_EMAIL ?>
            </a>
          </div>

          <div class="pt-1">
            <a
              href="<?= BASE_URL ?>/contact.php"
              class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-[#191919] hover:bg-[#C6A46A]/20 border border-[#C6A46A]/30 text-[#D9BD87] text-[11px] font-bold uppercase tracking-wider transition-colors"
            >
              <span>Schedule Consultation</span>
            </a>
          </div>
        </div>

        <div class="pt-4 border-t border-[#191919]">
          <a href="<?= BASE_URL ?>/admin/login.php" class="text-[11px] font-mono text-[#D9BD87]/70 hover:text-[#D9BD87] transition-colors flex items-center gap-1.5">
            <span>Staff & Admin Portal</span>
            <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"></path></svg>
          </a>
        </div>
      </div>

    </div>

    <!-- Bottom Bar & Copyright -->
    <div class="pt-8 border-t border-[#191919] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#A5A5A5]">
      <p>© <?= date('Y') ?> NIRVANA GROUP. ALL RIGHTS RESERVED. BUILDING DREAMS. CREATING LANDMARKS.</p>

      <button
        onclick="window.scrollTo({top: 0, behavior: 'smooth'});"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#191919] hover:bg-[#C6A46A]/20 text-[#D9BD87] border border-[#C6A46A]/30 text-[11px] font-bold uppercase transition-all"
      >
        <span>Back to top</span>
        <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M18 15l-6-6-6 6"></path></svg>
      </button>
    </div>

  </div>
</footer>

<!-- Shared Floating Actions (WhatsApp & Call) -->
<?php require_once __DIR__ . '/floating-actions.php'; ?>

<!-- Main Client-Side JavaScript Engine -->
<script src="<?= BASE_URL ?>/assets/js/main.js"></script>
</body>
</html>
