<?php
/**
 * Nirvana Group - Terms & Conditions Page
 */
$pageTitle = "Terms & Conditions";
$pageDesc = "Terms and conditions of website use, intellectual property, and real estate disclosures for Nirvana Group.";
$activeNav = 'terms';

require_once __DIR__ . '/includes/header.php';
?>

<div class="pt-28 pb-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
  
  <div class="text-center space-y-4">
    <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono uppercase tracking-widest">
      <span>STATUTORY TERMS</span>
    </div>
    <h1 class="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-white tracking-tight">
      Terms & Conditions
    </h1>
    <div class="w-20 h-1 bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto rounded-full"></div>
    <p class="text-slate-400 text-xs font-mono">Effective: <?= date('F Y') ?></p>
  </div>

  <div class="glass-panel rounded-3xl p-8 sm:p-12 border border-amber-500/30 space-y-8 text-slate-300 text-sm leading-relaxed font-light">
    
    <div class="space-y-3">
      <h2 class="text-lg font-serif font-bold text-white">1. Acceptance of Terms</h2>
      <p>
        By accessing and browsing the official Nirvana Group portal, you agree to be bound by these Terms and Conditions and all applicable regulations governing real estate in the State of Gujarat and India.
      </p>
    </div>

    <div class="space-y-3">
      <h2 class="text-lg font-serif font-bold text-white">2. Architectural Renders & Specifications</h2>
      <p>
        All 3D models, architectural floor plans, dimensions, elevations, and visual depictions shown on this website are conceptual representations prepared for illustrative guidance. Actual specifications are subject to final construction drawings, RERA approvals, and registered booking agreements.
      </p>
    </div>

    <div class="space-y-3">
      <h2 class="text-lg font-serif font-bold text-white">3. Intellectual Property</h2>
      <p>
        All brand marks, logos, 3D renderings, and written content are the exclusive intellectual property of Nirvana Group. Unauthorized reproduction or commercial re-distribution without express written consent is strictly prohibited.
      </p>
    </div>

    <div class="space-y-3">
      <h2 class="text-lg font-serif font-bold text-white">4. Regulatory Jurisdiction</h2>
      <p>
        Any disputes arising from the use of this portal or inquiries initiated through it shall be subject to the exclusive jurisdiction of the competent courts in Ahmedabad, Gujarat.
      </p>
    </div>

  </div>

</div>

<?php require_once __DIR__ . '/includes/footer.php'; ?>
