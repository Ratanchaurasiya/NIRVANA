<?php
/**
 * Nirvana Group - Contact & Advisory Desk
 * Luxury Black & Gold Theme with verified office information
 */
$pageTitle = "Contact Us - Let's Build Something Extraordinary";
$pageDesc = "Reach Nirvana Group's corporate headquarters in Ahmedabad, Gujarat, India. Schedule project walkthroughs and private consultations.";
$activeNav = 'contact';

require_once __DIR__ . '/includes/header.php';

$projects = getAllProjects();
?>

<div class="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
  
  <!-- Header Banner -->
  <div class="text-center max-w-3xl mx-auto space-y-4">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C6A46A]/10 border border-[#C6A46A]/30 text-[#D9BD87] text-xs font-mono uppercase tracking-widest">
      <span>OFFICIAL ADVISORY DESK</span>
    </div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
      Let's Build <span class="text-gold-gradient">Something Extraordinary.</span>
    </h1>
    <div class="w-20 h-1 bg-gradient-to-r from-transparent via-[#C6A46A] to-transparent mx-auto rounded-full"></div>
    <p class="text-sm sm:text-base text-[#F5F1E9] font-light leading-relaxed">
      Connect directly with our senior development advisors for confidential project presentations, site inspections, and property investment guidance.
    </p>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
    
    <!-- Left: Verified Contact Information -->
    <div class="lg:col-span-5 space-y-6">
      <div class="p-8 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 shadow-2xl space-y-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-widest text-[#C6A46A] font-bold">OFFICE</span>
          <h2 class="text-2xl font-serif font-bold text-white mt-1">Corporate Headquarters</h2>
          <p class="text-xs text-[#A5A5A5] mt-1">Real Estate Development & Architectural Planning</p>
        </div>

        <div class="space-y-4 pt-2">
          <!-- Corporate Location -->
          <div class="p-4 rounded-2xl bg-[#101010] border border-[#C6A46A]/20 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#C6A46A]/10 border border-[#C6A46A]/30 flex items-center justify-center shrink-0 text-[#C6A46A]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <span class="text-[11px] font-mono text-[#A5A5A5] uppercase">Headquarters</span>
              <p class="text-sm font-bold text-[#F5F1E9] mt-0.5"><?= COMPANY_ADDRESS ?></p>
              <p class="text-[11px] text-[#C6A46A] mt-0.5">Private boardroom consultations by appointment</p>
            </div>
          </div>

          <!-- Advisory Desk -->
          <div class="p-4 rounded-2xl bg-[#101010] border border-[#C6A46A]/20 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#C6A46A]/10 border border-[#C6A46A]/30 flex items-center justify-center shrink-0 text-[#C6A46A]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <span class="text-[11px] font-mono text-[#A5A5A5] uppercase">Client Advisory</span>
              <p class="text-sm font-bold text-[#D9BD87] mt-0.5">Priority Advisory Concierge</p>
              <p class="text-[11px] text-[#A5A5A5] mt-0.5">Online booking active via form</p>
            </div>
          </div>

          <!-- Email -->
          <div class="p-4 rounded-2xl bg-[#101010] border border-[#C6A46A]/20 flex items-start gap-4">
            <div class="w-10 h-10 rounded-xl bg-[#C6A46A]/10 border border-[#C6A46A]/30 flex items-center justify-center shrink-0 text-[#C6A46A]">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            </div>
            <div class="min-w-0">
              <span class="text-[11px] font-mono text-[#A5A5A5] uppercase">Corporate Correspondence</span>
              <a href="mailto:<?= COMPANY_EMAIL ?>" class="text-xs sm:text-sm font-bold text-[#F5F1E9] hover:text-[#C6A46A] hover:underline block mt-0.5 truncate"><?= COMPANY_EMAIL ?></a>
            </div>
          </div>
        </div>

        <div class="pt-2">
          <a
            href="#nirvana-contact-form"
            class="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#C6A46A] to-[#D9BD87] text-[#101010] font-black text-xs uppercase tracking-wider text-center flex items-center justify-center gap-2 transition-all shadow-lg hover:opacity-95"
          >
            <span>Request Private Callback</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Right: Complete Contact Form (PDO Prepared Statement to MySQL) -->
    <div class="lg:col-span-7">
      <div class="p-8 sm:p-10 rounded-3xl bg-[#191919] border border-[#C6A46A]/30 shadow-2xl">
        <form id="nirvana-contact-form" action="<?= BASE_URL ?>/api/submit-enquiry.php" method="POST" class="space-y-5">
          <input type="hidden" name="csrf_token" value="<?= $csrfToken ?>">

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="space-y-1.5">
              <label class="text-xs font-bold uppercase tracking-wider text-[#D9BD87]">Your Full Name *</label>
              <input
                type="text"
                name="fullName"
                required
                placeholder="e.g. Sanjay Verma"
                class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A46A]"
              >
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold uppercase tracking-wider text-[#D9BD87]">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                required
                placeholder="e.g. +91 99099 88776"
                class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A46A]"
              >
            </div>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div class="space-y-1.5">
              <label class="text-xs font-bold uppercase tracking-wider text-[#D9BD87]">Email Address (Optional)</label>
              <input
                type="email"
                name="email"
                placeholder="name@example.com"
                class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A46A]"
              >
            </div>

            <div class="space-y-1.5">
              <label class="text-xs font-bold uppercase tracking-wider text-[#D9BD87]">Interested Project</label>
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
            <label class="text-xs font-bold uppercase tracking-wider text-[#D9BD87]">Detailed Message or Questions</label>
            <textarea
              name="message"
              rows="4"
              placeholder="Tell us what you are looking for, preferred unit configuration, or schedule request..."
              class="w-full bg-[#101010] border border-[#C6A46A]/30 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#C6A46A] resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            class="w-full py-4 rounded-xl bg-gradient-to-r from-[#D9BD87] via-[#C6A46A] to-[#997825] text-[#101010] font-black uppercase tracking-wider shadow-lg hover:shadow-[0_0_25px_rgba(198,164,106,0.6)] transition-all"
          >
            Submit Confidential Inquiry
          </button>
        </form>
      </div>
    </div>

  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
