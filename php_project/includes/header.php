<?php
/**
 * Nirvana Group - Shared Page Header
 * Luxury Black & Gold Design System
 */
require_once __DIR__ . '/functions.php';

$pageTitle = isset($pageTitle) ? $pageTitle . " | " . SITE_NAME : SITE_NAME . " | " . SITE_TAGLINE;
$pageDesc = isset($pageDesc) ? $pageDesc : "Nirvana Group is a premier luxury real estate developer delivering architectural landmarks, high-rise residential towers, and corporate office developments in Ahmedabad, Gujarat.";
$canonicalUrl = isset($canonicalUrl) ? $canonicalUrl : SITE_CANONICAL_URL;
$activeNav = isset($activeNav) ? $activeNav : 'home';
$csrfToken = generateCsrfToken();
?>
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title><?= htmlspecialchars($pageTitle) ?></title>
  <meta name="description" content="<?= htmlspecialchars($pageDesc) ?>">
  <meta name="keywords" content="Nirvana Group, Luxury Real Estate Ahmedabad, Commercial Offices, Luxury High-Rise, Sola, Science City, SG Highway, Jagatpur, Shahibaug, Bopal, Navrangpura">
  <meta name="author" content="<?= SITE_NAME ?>">
  <meta name="robots" content="index, follow">
  <link rel="canonical" href="<?= htmlspecialchars($canonicalUrl) ?>">

  <!-- Open Graph / Facebook -->
  <meta property="og:type" content="website">
  <meta property="og:title" content="<?= htmlspecialchars($pageTitle) ?>">
  <meta property="og:description" content="<?= htmlspecialchars($pageDesc) ?>">
  <meta property="og:url" content="<?= htmlspecialchars($canonicalUrl) ?>">
  <meta property="og:site_name" content="<?= SITE_NAME ?>">
  <meta property="og:image" content="<?= BASE_URL ?>/assets/images/hero_building.jpg">

  <!-- Twitter / X -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="<?= htmlspecialchars($pageTitle) ?>">
  <meta name="twitter:description" content="<?= htmlspecialchars($pageDesc) ?>">
  <meta name="twitter:image" content="<?= BASE_URL ?>/assets/images/hero_building.jpg">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="<?= BASE_URL ?>/assets/favicon.svg">

  <!-- Luxury Typography: Cormorant Garamond, Playfair Display, Plus Jakarta Sans, Inter, Space Grotesk -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700;800;900&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Playfair+Display:ital,wght@0,500;0,700;0,900;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet">

  <!-- Core Stylesheet (Luxury Black & Gold Theme) -->
  <link rel="stylesheet" href="<?= BASE_URL ?>/assets/css/style.css">

  <!-- GSAP & ScrollTrigger Animations -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js"></script>

  <!-- Three.js Visualizer Engine -->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"></script>

  <!-- Structured Data JSON-LD for Search Engines -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "name": "<?= SITE_NAME ?>",
    "url": "<?= SITE_CANONICAL_URL ?>",
    "logo": "<?= BASE_URL ?>/assets/favicon.svg",
    "telephone": "<?= COMPANY_PHONE ?>",
    "email": "<?= COMPANY_EMAIL ?>",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Ahmedabad",
      "addressRegion": "Gujarat",
      "addressCountry": "IN"
    },
    "sameAs": [
      "<?= OFFICIAL_INSTAGRAM_URL ?>"
    ]
  }
  </script>
</head>
<body class="bg-[#101010] text-[#F5F1E9] selection:bg-[#C6A46A] selection:text-[#101010] font-sans min-h-screen relative overflow-x-hidden antialiased">

<?php require_once __DIR__ . '/navbar.php'; ?>
