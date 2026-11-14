-- Nirvana Group - Master Database Export
-- Compatible with MySQL 8.x / MariaDB 10.x & phpMyAdmin
-- Core PHP 8.x + MySQL PDO Architecture

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

CREATE DATABASE IF NOT EXISTS `nirvana_group_db` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `nirvana_group_db`;

-- --------------------------------------------------------
-- 1. Table structure for table `admin_users`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `admin_users`;
CREATE TABLE `admin_users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL UNIQUE,
  `email` varchar(100) NOT NULL UNIQUE,
  `password_hash` varchar(255) NOT NULL,
  `role` varchar(20) NOT NULL DEFAULT 'admin',
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `last_login` datetime DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- Default Admin User: admin / admin123
INSERT INTO `admin_users` (`id`, `username`, `email`, `password_hash`, `role`, `is_active`, `created_at`) VALUES
(1, 'admin', 'admin@nirvana.group', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'super_admin', 1, NOW());

-- --------------------------------------------------------
-- 2. Table structure for table `projects`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `projects`;
CREATE TABLE `projects` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `slug` varchar(100) NOT NULL UNIQUE,
  `name` varchar(150) NOT NULL,
  `subtitle` varchar(200) DEFAULT NULL,
  `location` varchar(200) NOT NULL,
  `status` varchar(50) NOT NULL DEFAULT 'Under Construction',
  `badge` varchar(50) DEFAULT NULL,
  `project_type` varchar(100) NOT NULL,
  `valuation` varchar(100) DEFAULT NULL,
  `size` varchar(100) DEFAULT NULL,
  `config` varchar(150) DEFAULT NULL,
  `completion` varchar(100) DEFAULT NULL,
  `image_url` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `features` json DEFAULT NULL,
  `floor_plan_unit` varchar(150) DEFAULT NULL,
  `floor_plan_specs` json DEFAULT NULL,
  `is_featured` tinyint(1) NOT NULL DEFAULT 1,
  `is_published` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `projects` (`id`, `slug`, `name`, `subtitle`, `location`, `status`, `badge`, `project_type`, `valuation`, `size`, `config`, `completion`, `image_url`, `description`, `features`, `floor_plan_unit`, `floor_plan_specs`, `is_featured`, `is_published`, `created_at`) VALUES
(1, 'nirvana-abode', 'Nirvana Abode', 'Nirvana Group / Shiv Buildcon', 'Jagatpur Rd, Near Godrej Garden City, Tragad (North-West)', 'Under Construction', 'Flagship Development', 'Residential Apartments', 'RERA Certified Landmark', '1,440 – 1,872 sq. ft.', '2 BHK (1,440 – 1,485 sq. ft.) & 3 BHK (1,800 – 1,872 sq. ft.)', 'Possession: Nov 2026 – Dec 2028', 'assets/images/about_property.jpg', 'Nirvana Abode is an iconic residential landmark in Tragad - Jagatpur near Godrej Garden City, featuring 3 grand high-rise towers across 0.68 acres with personal entry foyers, spacious sitting balconies, seismic resilience, and curated lifestyle amenities.', '[\"2 BHK (1,440 – 1,485 Sq.Ft.) & 3 BHK (1,800 – 1,872 Sq.Ft.)\", \"Prime Proximity to Godrej Garden City & SG Highway\", \"3 High-Rise Towers (Basement + Ground + 10 Floors)\", \"Clubhouse, Landscaped Gardens & 24/7 Smart Security\"]', 'TYPICAL 3 BHK RESIDENCE - TOWER A', '{\"totalArea\": \"1,872 Sq.Ft.\", \"carpetArea\": \"1,240 Sq.Ft.\", \"livingRoom\": \"22\\\' x 14\\\' Living & Dining Foyer\", \"masterSuite\": \"16\\\' x 13\\\' Master Bedroom with Ensuite\", \"balcony\": \"12\\\' Private Sunset Deck\"}', 1, 1, NOW()),
(2, 'the-neemland', 'The Neemland', 'K3 / Nirvana Group', 'Jagatpur (North-West), Ahmedabad', 'Pre-Launch / New Launch', 'New Launch', 'Residential & Retail', '334 Exclusive Units', '1,422 – 1,944 sq. ft.', '2 BHK (1,422 & 1,566 sq. ft.) & 3 BHK (1,944 sq. ft.) + Retail Shops', '3 Towers, 14 Floors, 334 Units', 'assets/images/hero_building.jpg', 'The Neemland brings nature-centric urban architecture to Jagatpur, offering sprawling 2 & 3 BHK homes across 3 towers of 14 floors each, complemented by integrated high-street commercial retail shops on the ground boulevard.', '[\"3 Grand Towers of 14 Floors with 334 Exclusive Units\", \"158 & 174 Sq. Yd. (2 BHK) and 216 Sq. Yd. (3 BHK) Options\", \"Integrated Ground-Floor Retail & Commercial Boulevards\", \"Nature-Infused Central Greens & Children\\\'s Play Arena\"]', 'PREMIUM 3 BHK LAYOUT - TOWER 1', '{\"totalArea\": \"1,944 Sq.Ft. (216 Sq.Yd.)\", \"carpetArea\": \"1,310 Sq.Ft.\", \"livingRoom\": \"24\\\' x 14\\\' Expansive Living Lounge\", \"masterSuite\": \"17\\\' x 14\\\' Master Retreat\", \"balcony\": \"14\\\' Green Terrace Deck\"}', 1, 1, NOW()),
(3, 'sankalp-nirvana', 'Sankalp Nirvana (Om Sankalp)', 'Om Infra / Green LLP', 'Shahibaug Rd, Near Om Tower / Ghoda Camp Rd (Central-East)', 'Under Construction', 'Ultra-Luxury Tier', 'Luxury Palace & Penthouses', 'Grade-A Palace Living', '2,730 – 5,075 sq. ft.', '4 BHK (2,730 sq. ft.), 5 BHK (2,965 sq. ft.) & 5.5 BHK Penthouse (4,777 – 5,075 sq. ft.)', 'Possession: Dec 2028', 'assets/images/commercial_office.jpg', 'An elite architectural masterpiece in the historic heart of Shahibaug featuring monumental 4 BHK and 5 BHK palace residences along with sprawling 5.5 BHK duplex sky penthouses with panoramic riverfront and heritage city vistas.', '[\"Ultra-Spacious 4 BHK (2,730 Sq.Ft.) & 5 BHK (2,965 Sq.Ft.)\", \"Iconic 5.5 BHK Penthouses up to 5,075 Sq.Ft.\", \"Shahibaug Central Connectivity near Ghoda Camp Road\", \"Private Foyer Elevators, Sky Deck & Multi-Tier Parking\"]', '5.5 BHK DUPLEX PENTHOUSE SUITE', '{\"totalArea\": \"5,075 Sq.Ft.\", \"carpetArea\": \"3,650 Sq.Ft.\", \"livingRoom\": \"32\\\' x 18\\\' Double-Height Grand Salon\", \"masterSuite\": \"20\\\' x 16\\\' Presidential Suite\", \"balcony\": \"28\\\' Wraparound Panoramic Deck\"}', 1, 1, NOW()),
(4, 'safal-nirvana-greens', 'Nirvana (Safal Nirvana Greens)', 'HN Safal', 'Sanand – Nalsarovar Rd, Goraj / Vinchhiya (Outskirts)', 'Ready to Move', 'Resort Villa Living', 'Plots & Weekend Villas', 'Nature Retreat Enclave', '1,800 – 18,486 sq. ft.', 'Residential Plots & Weekend Villas: 1,800 – 18,486 sq. ft.', 'Ready for Possession', 'assets/images/about_property.jpg', 'Sprawling luxury resort-style plotted community and weekend villas on the Sanand – Nalsarovar corridor in Goraj / Vinchhiya, surrounded by lush agro-forests, clubhouse amenities, private pools, and tranquil bird-watching sanctuaries.', '[\"Sprawling Plots & Custom Weekend Villas up to 18,486 Sq.Ft.\", \"Located on Scenic Sanand – Nalsarovar Highway\", \"Ready to Move Infrastructure with Club, Lake & Sports Decks\", \"Gated Green Enclave with 24/7 Security & Paved Internal Roads\"]', 'RESORT ESTATE VILLA PLOT', '{\"totalArea\": \"5,400 Sq.Ft. Estate Plot\", \"carpetArea\": \"2,850 Sq.Ft. Built-up Villa\", \"livingRoom\": \"26\\\' x 16\\\' Garden View Patio Lounge\", \"masterSuite\": \"18\\\' x 15\\\' Courtyard Master Suite\", \"balcony\": \"Private Lawn & Plunge Pool Deck\"}', 1, 1, NOW()),
(5, 'sp-nirvana', 'SP Nirvana', 'Shri Parshva Group', 'Bopal – Ghuma Rd, South Bopal Ext. (South-West)', 'Ready to Move', 'Ready Possession', 'Residential Apartments', 'Prime Bopal Corridor', '1,245 – 1,700 sq. ft.', '2 & 3 BHK: 1,245 – 1,700 sq. ft.', 'Ready for Possession', 'assets/images/hero_building.jpg', 'Completed and bustling modern gated residential high-rise community situated in South Bopal Extension along Bopal-Ghuma Road, offering ready-to-move 2 and 3 BHK family apartments with complete civic amenities and swift school/retail connectivity.', '[\"Ready to Move 2 & 3 BHK Apartments (1,245 – 1,700 Sq.Ft.)\", \"Strategic Position on Bopal – Ghuma Road\", \"Completed Club, Children\\\'s Play Deck & Senior Citizen Sit-outs\", \"Covered Reserved Parking with 24/7 CCTV Surveillance\"]', '3 BHK DELUXE APARTMENT - TOWER B', '{\"totalArea\": \"1,700 Sq.Ft.\", \"carpetArea\": \"1,180 Sq.Ft.\", \"livingRoom\": \"20\\\' x 13\\\' Family Living Deck\", \"masterSuite\": \"15\\\' x 12\\\' Master Bedroom\", \"balcony\": \"10\\\' Sit-out Balcony\"}', 1, 1, NOW()),
(6, 'nirvana-arise', 'Nirvana Arise', 'Excel Life', 'Vijay Cross Rd, Navrangpura (Central-West)', 'Ready to Move / Nearing Completion', 'Central Luxury', 'Ultra-Luxury Apartments', 'Navrangpura Landmark', '2,770 – 3,015 sq. ft. (SBUA)', '4 BHK: 2,770 – 3,015 sq. ft. (SBUA)', 'Ready to Move / Nearing Completion', 'assets/images/commercial_office.jpg', 'Exclusive low-density high-luxury residential enclave situated at Vijay Cross Road in Navrangpura, designed for discerning families seeking expansive 4 BHK homes with Italian marble finishes, VRV AC provisions, and private elevator lobbies.', '[\"Expansive 4 BHK Homes (2,770 – 3,015 Sq.Ft. SBUA)\", \"Prime Central-West Navrangpura / Vijay Cross Road Address\", \"Private Elevator Lobbies & Low-Density Living\", \"Premium Rooftop Sky Lounge, Gym & Banquet Facilities\"]', '4 BHK CENTRAL LUXURY SUITE', '{\"totalArea\": \"3,015 Sq.Ft. (SBUA)\", \"carpetArea\": \"2,050 Sq.Ft.\", \"livingRoom\": \"26\\\' x 15\\\' Living & Dining Foyer\", \"masterSuite\": \"18\\\' x 14\\\' Grand Master Suite\", \"balcony\": \"16\\\' Navrangpura Skyline Balcony\"}', 1, 1, NOW());

-- --------------------------------------------------------
-- 3. Table structure for table `properties`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `properties`;
CREATE TABLE `properties` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `developer` varchar(100) DEFAULT NULL,
  `property_type` varchar(50) NOT NULL,
  `location` varchar(150) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `beds` varchar(100) DEFAULT NULL,
  `area` varchar(100) DEFAULT NULL,
  `description` text NOT NULL,
  `highlights` json DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `properties` (`id`, `title`, `developer`, `property_type`, `location`, `image_url`, `beds`, `area`, `description`, `highlights`, `is_active`) VALUES
(1, 'Nirvana Abode', 'Nirvana Group / Shiv Buildcon', 'Residential', 'Jagatpur Rd, Near Godrej Garden City, Tragad (North-West)', 'assets/images/about_property.jpg', '2 & 3 BHK', '1,440 – 1,872 Sq.Ft.', 'Under Construction (Possession: Nov 2026 – Dec 2028). 3 Towers across 0.68 Acres with personal entry foyers.', '[\"2 & 3 BHK Options\", \"Near Godrej Garden City\", \"Nov 2026 – Dec 2028\"]', 1),
(2, 'The Neemland', 'K3 / Nirvana Group', 'Residential', 'Jagatpur (North-West), Ahmedabad', 'assets/images/hero_building.jpg', '2 & 3 BHK + Retail', '1,422 – 1,944 Sq.Ft. (158 – 216 Sq.Yd.)', 'Pre-Launch / New Launch featuring 3 towers of 14 floors and 334 units plus ground-floor high-street retail shops.', '[\"3 Towers, 14 Floors\", \"334 Exclusive Units\", \"High-Street Retail\"]', 1),
(3, 'Sankalp Nirvana (Om Sankalp)', 'Om Infra / Green LLP', 'Residential', 'Shahibaug Rd, Near Om Tower / Ghoda Camp Rd (Central-East)', 'assets/images/commercial_office.jpg', '4, 5 BHK & 5.5 BHK Penthouse', '2,730 – 5,075 Sq.Ft.', 'Under Construction (Possession: Dec 2028). Monumental 4 & 5 BHK luxury homes and 5.5 BHK sky penthouses.', '[\"4 & 5 BHK + Penthouse\", \"Shahibaug Heritage Address\", \"Possession: Dec 2028\"]', 1),
(4, 'Nirvana (Safal Nirvana Greens)', 'HN Safal', 'Plots', 'Sanand – Nalsarovar Rd, Goraj / Vinchhiya (Outskirts)', 'assets/images/about_property.jpg', 'Residential Plots & Weekend Villas', '1,800 – 18,486 Sq.Ft.', 'Ready to Move resort-style gated community and weekend villas along scenic Sanand-Nalsarovar Road.', '[\"Plots & Villas to 18,486 Sq.Ft.\", \"Ready to Move\", \"Clubhouse & Sports\"]', 1),
(5, 'SP Nirvana', 'Shri Parshva Group', 'Residential', 'Bopal – Ghuma Rd, South Bopal Ext. (South-West)', 'assets/images/hero_building.jpg', '2 & 3 BHK', '1,245 – 1,700 Sq.Ft.', 'Ready to Move modern high-rise family apartments on Bopal-Ghuma Road with swift civic and school connectivity.', '[\"Ready to Move\", \"2 & 3 BHK Family Homes\", \"South Bopal Extension\"]', 1),
(6, 'Nirvana Arise', 'Excel Life', 'Residential', 'Vijay Cross Rd, Navrangpura (Central-West)', 'assets/images/commercial_office.jpg', '4 BHK Ultra-Luxury', '2,770 – 3,015 Sq.Ft. (SBUA)', 'Ready to Move / Nearing Completion. Exclusive 4 BHK luxury residences with private elevator lobbies.', '[\"Navrangpura Prime Address\", \"4 BHK (2,770 – 3,015 Sq.Ft.)\", \"Private Elevator Lobbies\"]', 1);

-- --------------------------------------------------------
-- 4. Table structure for table `services`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `services`;
CREATE TABLE `services` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `slug` varchar(100) NOT NULL UNIQUE,
  `icon` varchar(50) NOT NULL DEFAULT 'Building2',
  `short_desc` text NOT NULL,
  `full_desc` text DEFAULT NULL,
  `display_order` int(11) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `services` (`id`, `title`, `slug`, `icon`, `short_desc`, `full_desc`, `display_order`, `is_active`) VALUES
(1, 'Real Estate Development', 'real-estate-development', 'Building2', 'End-to-end master planning, structural architecture, and sustainable community creation across premier metropolitan growth corridors.', 'Nirvana Group conceptualizes and executes iconic residential communities and mixed-use commercial destinations with rigorous engineering precision and IGBC Green standards.', 1, 1),
(2, 'Residential Projects', 'residential-projects', 'Home', 'Luxury 2, 3, 4 & 5 BHK high-rises and duplex sky penthouses crafted with seismic resilience and expansive private terraces.', 'Designed for contemporary living, our residential developments provide floorplan privacy, sound-attenuated curtain wall systems, and curated lifestyle amenities.', 2, 1),
(3, 'Commercial Developments', 'commercial-developments', 'Briefcase', 'Grade-A corporate office towers, retail boulevards, and executive suites positioned along arterial high-speed business spines.', 'Our commercial landmarks feature column-free efficient floor plates, high-speed destination elevators, and multi-tier intelligent automated parking.', 3, 1),
(4, 'Construction Excellence', 'construction-excellence', 'HardHat', 'BIS Zone 5 seismic engineering, deep bedrock piling, and high-tensile steel rebar skeletons ensuring structural longevity.', 'Every Nirvana development is backed by rigorous material testing, robotic surveying, and high-performance acoustic and thermal walling.', 4, 1),
(5, 'Architectural Planning', 'architectural-planning', 'Compass', 'Visionary architectural drafting that harmonizes contemporary aesthetics, natural ventilation, and daylight optimization.', 'From initial land feasibility studies to final structural blueprints, our architectural team crafts landmarks that define the urban skyline.', 5, 1),
(6, 'Property Consultation', 'property-consultation', 'ShieldCheck', 'Unbiased advisory, legal title diligence, and investment lifecycle support for high-net-worth investors and end-users.', 'Guiding buyers with complete clarity, RERA compliance certification, and structured financial consulting.', 6, 1);

-- --------------------------------------------------------
-- 5. Table structure for table `gallery`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `gallery`;
CREATE TABLE `gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `category` varchar(50) NOT NULL DEFAULT 'Architecture',
  `image_url` varchar(255) NOT NULL,
  `thumbnail_url` varchar(255) DEFAULT NULL,
  `caption` text DEFAULT NULL,
  `display_order` int(11) NOT NULL DEFAULT 0,
  `is_featured` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `gallery` (`id`, `title`, `category`, `image_url`, `thumbnail_url`, `caption`, `display_order`, `is_featured`, `created_at`) VALUES
(1, 'Nirvana Abode High-Rise Elevation', 'Residential', 'assets/images/about_property.jpg', 'assets/images/about_property.jpg', '3 towers across 0.68 acres near Godrej Garden City with spacious sit-out balconies.', 1, 1, NOW()),
(2, 'The Neemland Commercial Boulevard', 'Commercial', 'assets/images/hero_building.jpg', 'assets/images/hero_building.jpg', '3 towers of 14 floors and 334 units with ground-floor high-street retail shops.', 2, 1, NOW()),
(3, 'Sankalp Nirvana Palace Architecture', 'Residential', 'assets/images/commercial_office.jpg', 'assets/images/commercial_office.jpg', 'Shahibaug luxury palace residences and 5.5 BHK sky penthouses.', 3, 1, NOW()),
(4, 'Safal Nirvana Greens Resort Enclave', 'Villas', 'assets/images/about_property.jpg', 'assets/images/about_property.jpg', 'Serene resort-style plotted community along Sanand-Nalsarovar highway.', 4, 1, NOW()),
(5, 'SP Nirvana Ready Tower Elevation', 'Residential', 'assets/images/hero_building.jpg', 'assets/images/hero_building.jpg', 'Ready to move 2 & 3 BHK family homes in South Bopal Extension.', 5, 1, NOW()),
(6, 'Nirvana Arise Central Luxury Landmark', 'Commercial', 'assets/images/commercial_office.jpg', 'assets/images/commercial_office.jpg', 'Exclusive 4 BHK homes with private elevator lobbies at Vijay Cross Road.', 6, 1, NOW()),
(7, 'Seismic Bedrock Rebar Foundation', 'Construction', 'assets/images/hero_building.jpg', 'assets/images/hero_building.jpg', 'Seismic Zone 5 compliant foundation engineering and hydraulic dampers.', 7, 1, NOW()),
(8, 'Panoramic Sunset Sky Deck Living', 'Architecture', 'assets/images/about_property.jpg', 'assets/images/about_property.jpg', 'Expansive skyline vistas from top-floor private balconies.', 8, 1, NOW());

-- --------------------------------------------------------
-- 6. Table structure for table `instagram_accounts`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `instagram_accounts`;
CREATE TABLE `instagram_accounts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `account_name` varchar(100) NOT NULL,
  `username` varchar(100) NOT NULL UNIQUE,
  `profile_url` varchar(255) NOT NULL,
  `bio` text DEFAULT NULL,
  `is_primary` tinyint(1) NOT NULL DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `instagram_accounts` (`id`, `account_name`, `username`, `profile_url`, `bio`, `is_primary`, `is_active`, `created_at`) VALUES
(1, 'Nirvana Group Official', 'nirvana.group._', 'https://www.instagram.com/nirvana.group._/', 'Official Instagram Channel of Nirvana Group - Building Dreams. Creating Landmarks in Ahmedabad, Gujarat.', 1, 1, NOW());

-- --------------------------------------------------------
-- 7. Table structure for table `instagram_reels`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `instagram_reels`;
CREATE TABLE `instagram_reels` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `reel_url` varchar(255) NOT NULL,
  `embed_code` text DEFAULT NULL,
  `thumbnail_url` varchar(255) NOT NULL,
  `project_tag` varchar(150) DEFAULT NULL,
  `caption` text DEFAULT NULL,
  `category` varchar(50) NOT NULL DEFAULT 'Project Walkthrough',
  `is_featured` tinyint(1) NOT NULL DEFAULT 1,
  `display_order` int(11) NOT NULL DEFAULT 0,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `instagram_reels` (`id`, `title`, `reel_url`, `embed_code`, `thumbnail_url`, `project_tag`, `caption`, `category`, `is_featured`, `display_order`, `created_at`) VALUES
(1, 'Nirvana Abode - Exclusive Site Walkthrough & Tower Progress', 'https://www.instagram.com/nirvana.group._/', NULL, 'assets/images/about_property.jpg', 'Nirvana Abode', '3 towers taking shape near Godrej Garden City, Tragad. Spacious balconies & personal foyers. #NirvanaGroup #NirvanaAbode', 'Project Walkthrough', 1, 1, NOW()),
(2, 'The Neemland - Architectural Reveal & Retail Boulevard', 'https://www.instagram.com/nirvana.group._/', NULL, 'assets/images/hero_building.jpg', 'The Neemland', '334 homes across 3 towers of 14 floors with ground-floor commercial high-street retail shops in Jagatpur. #TheNeemland #RealEstate', 'New Launch Tour', 1, 2, NOW()),
(3, 'Sankalp Nirvana - Grand Palace Living & Duplex Penthouse', 'https://www.instagram.com/nirvana.group._/', NULL, 'assets/images/commercial_office.jpg', 'Sankalp Nirvana', 'Monuments of luxury in Shahibaug with private foyer elevators & panoramic riverfront views. #SankalpNirvana #LuxuryLiving', 'Luxury Showcase', 1, 3, NOW()),
(4, 'SP Nirvana - Ready-to-Move Living in South Bopal', 'https://www.instagram.com/nirvana.group._/', NULL, 'assets/images/hero_building.jpg', 'SP Nirvana', 'Step into your dream ready-possession 2 & 3 BHK home on Bopal-Ghuma Road. #SPNirvana #ReadyHomes', 'Ready Possession', 1, 4, NOW());

-- --------------------------------------------------------
-- 8. Table structure for table `instagram_gallery`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `instagram_gallery`;
CREATE TABLE `instagram_gallery` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(150) NOT NULL,
  `image_url` varchar(255) NOT NULL,
  `post_url` varchar(255) DEFAULT 'https://www.instagram.com/nirvana.group._/',
  `category` varchar(50) NOT NULL DEFAULT 'Architecture',
  `caption` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `instagram_gallery` (`id`, `title`, `image_url`, `post_url`, `category`, `caption`, `is_active`, `created_at`) VALUES
(1, 'Nirvana Abode Golden Hour Elevation', 'assets/images/about_property.jpg', 'https://www.instagram.com/nirvana.group._/', 'Residential', 'Golden hour architectural photography capturing the high-tensile facade.', 1, NOW()),
(2, 'The Neemland High-Street Atrium', 'assets/images/hero_building.jpg', 'https://www.instagram.com/nirvana.group._/', 'Commercial', 'Integrated retail and residential towers in Jagatpur North-West.', 1, NOW()),
(3, 'Sankalp Nirvana Sky Penthouse Suite', 'assets/images/commercial_office.jpg', 'https://www.instagram.com/nirvana.group._/', 'Luxury', 'Double-height grand salon with riverfront panoramic views.', 1, NOW()),
(4, 'Structural Steel Core Engineering', 'assets/images/hero_building.jpg', 'https://www.instagram.com/nirvana.group._/', 'Construction', 'Uncompromising structural steel rebar placement across deep foundations.', 1, NOW()),
(5, 'Terrace Sky Deck Experience', 'assets/images/about_property.jpg', 'https://www.instagram.com/nirvana.group._/', 'Luxury', 'Private terrace deck with uninterrupted skyline horizon views.', 1, NOW()),
(6, 'Executive Lobby Entrance', 'assets/images/commercial_office.jpg', 'https://www.instagram.com/nirvana.group._/', 'Commercial', 'Grand triple-height entrance reception with Italian marble finishing.', 1, NOW());

-- --------------------------------------------------------
-- 9. Table structure for table `testimonials`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `testimonials`;
CREATE TABLE `testimonials` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `client_name` varchar(100) NOT NULL,
  `designation` varchar(150) NOT NULL,
  `project_name` varchar(150) NOT NULL,
  `comment` text NOT NULL,
  `rating` tinyint(1) NOT NULL DEFAULT 5,
  `is_published` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `testimonials` (`id`, `client_name`, `designation`, `project_name`, `comment`, `rating`, `is_published`, `created_at`) VALUES
(1, 'Dr. Vikramaditya Desai', 'Managing Director, Apex Diagnostics', 'Nirvana Abode, Jagatpur', 'The structural quality, floor plan privacy, and serene location near Godrej Garden City made Nirvana Abode our unanimous choice.', 5, 1, NOW()),
(2, 'Sneha & Mehul Patel', 'Tech Entrepreneurs & NRI Investors', 'Sankalp Nirvana, Shahibaug', 'Sankalp Nirvana\'s sky penthouse layout and heritage connectivity are exceptional. The transparency and build quality exceed expectations.', 5, 1, NOW()),
(3, 'Karan Singhal', 'Director, Singhal Logistics', 'The Neemland, Jagatpur', 'Securing a retail and residential position at The Neemland provides unmatched appreciation given the 334-unit integrated community.', 5, 1, NOW());

-- --------------------------------------------------------
-- 10. Table structure for table `enquiries`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `enquiries`;
CREATE TABLE `enquiries` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `full_name` varchar(100) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `email` varchar(100) DEFAULT NULL,
  `project_interest` varchar(150) DEFAULT 'General Inquiry',
  `requirement` varchar(50) DEFAULT 'Buy',
  `property_type` varchar(50) DEFAULT 'Residential',
  `location` varchar(100) DEFAULT 'Science City / Sola',
  `message` text DEFAULT NULL,
  `status` varchar(30) NOT NULL DEFAULT 'New',
  `ip_address` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- 11. Table structure for table `site_visits`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `site_visits`;
CREATE TABLE `site_visits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `project_id` int(11) DEFAULT NULL,
  `project_name` varchar(150) NOT NULL,
  `full_name` varchar(100) NOT NULL,
  `phone` varchar(30) NOT NULL,
  `visit_date` date NOT NULL,
  `status` varchar(30) NOT NULL DEFAULT 'Scheduled',
  `ip_address` varchar(45) DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_project_visit` (`project_id`),
  CONSTRAINT `fk_project_visit` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`) ON DELETE SET NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------
-- 12. Table structure for table `settings`
-- --------------------------------------------------------
DROP TABLE IF EXISTS `settings`;
CREATE TABLE `settings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `setting_key` varchar(50) NOT NULL UNIQUE,
  `setting_value` text NOT NULL,
  `updated_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `settings` (`id`, `setting_key`, `setting_value`, `updated_at`) VALUES
(1, 'site_name', 'NIRVANA GROUP', NOW()),
(2, 'site_tagline', 'Building Dreams. Creating Landmarks.', NOW()),
(3, 'company_phone', 'Available via Advisory Portal', NOW()),
(4, 'company_email', 'contact@nirvana.group', NOW()),
(5, 'company_address', 'Ahmedabad, Gujarat, India', NOW()),
(6, 'instagram_url', 'https://www.instagram.com/nirvana.group._/', NOW());

COMMIT;
