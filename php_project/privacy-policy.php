<?php
/**
 * Nirvana Group - Privacy Policy Page
 */
$pageTitle = "Privacy Policy";
$pageDesc = "Privacy Policy and client data protection practices for Nirvana Group.";
$activeNav = 'privacy';

require_once __DIR__ . '/includes/header.php';
?>

<div class="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
  
  <div class="text-center space-y-4">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
      <span>LEGAL COMPLIANCE</span>
    </div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
      Privacy Policy
    </h1>
    <div class="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full"></div>
    <p class="text-slate-400 text-xs font-mono">Last Updated: <?= date('F Y') ?></p>
  </div>

  <div class="glass-panel rounded-3xl p-8 sm:p-12 border border-amber-500/30 space-y-8 text-slate-300 text-sm leading-relaxed font-light">
    
    <div class="space-y-3">
      <h2 class="text-lg font-serif font-bold text-white">1. Information Collection</h2>
      <p>
        At Nirvana Group, we respect your privacy and are committed to safeguarding personal information collected when you submit enquiries, register for site inspections, or use our interactive decision wizards. Information collected may include your name, contact phone number, email address, and property preferences.
      </p>
    </div>

    <div class="space-y-3">
      <h2 class="text-lg font-serif font-bold text-white">2. Use of Information</h2>
      <p>
        The details you provide are strictly utilized to coordinate consultations, schedule site walkthroughs, and deliver requested architectural portfolios. Nirvana Group does not sell, rent, or distribute client contact details to third-party telemarketing services.
      </p>
    </div>

    <div class="space-y-3">
      <h2 class="text-lg font-serif font-bold text-white">3. Security Standards</h2>
      <p>
        All digital submissions are processed through secure PHP PDO database connections with cryptographic CSRF token validation and input sanitization to prevent unauthorized access.
      </p>
    </div>

    <div class="space-y-3">
      <h2 class="text-lg font-serif font-bold text-white">4. Contacting Our Data Officer</h2>
      <p>
        For inquiries regarding data handling or to request removal of your contact details, please contact us at <a href="mailto:<?= COMPANY_EMAIL ?>" class="text-amber-400 hover:underline"><?= COMPANY_EMAIL ?></a>.
      </p>
    </div>

  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
