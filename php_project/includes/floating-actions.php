<?php
/**
 * Nirvana Group - Floating Action Buttons & Mobile Bottom Bar
 */
?>
<!-- Floating Quick Enquiry Support Button -->
<a
  href="<?= BASE_URL ?>/contact.php"
  class="fixed bottom-20 sm:bottom-6 right-6 z-40 flex items-center gap-2.5 px-4 py-3 rounded-none bg-[#B69B65] text-[#171717] font-bold text-xs uppercase tracking-wider shadow-lg hover:bg-[#c4a973] transition-all"
  aria-label="Enquire with Nirvana Group"
>
  <svg class="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z"/>
  </svg>
  <span class="hidden sm:inline">QUICK ENQUIRY</span>
</a>

<!-- Back To Top Button -->
<button
  id="back-to-top-btn"
  type="button"
  class="fixed bottom-6 left-6 z-40 hidden p-3 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] text-[#B69B65] shadow-lg hover:bg-[#242424] hover:border-[#B69B65]/50 transition-all"
  aria-label="Back to Top"
>
  <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24">
    <path d="M5 15l7-7 7 7"></path>
  </svg>
</button>

<!-- Mobile Bottom Action Bar (Pinned for convenient smartphone navigation) -->
<div class="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-[#141414]/95 backdrop-blur-xl border-t border-[#2E2E2E] px-4 py-2.5 flex items-center justify-between">
  <a href="tel:<?= preg_replace('/\s+/', '', COMPANY_PHONE) ?>" class="flex-1 text-center py-2 px-3 rounded-none bg-[#B69B65] text-[#171717] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md">
    <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
    <span>Call Now</span>
  </a>

  <div class="w-3"></div>

  <a href="<?= BASE_URL ?>/contact.php" class="flex-1 text-center py-2 px-3 rounded-none bg-[#1F1F1F] border border-[#2E2E2E] text-[#B69B65] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5">
    <span>Enquire</span>
  </a>
</div>

<!-- Global Dynamic Toast Notification Modal -->
<div id="toast-container" class="fixed top-24 right-5 z-50 flex flex-col gap-3 pointer-events-none"></div>
