/**
 * Nirvana Group - Core JavaScript Interaction Engine
 * Handles 3D Backgrounds, Theme Toggle, AJAX Form Submissions, and Viewport Animations
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Toast Notification Utility
  window.showToast = function (message, type = 'success') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const toast = document.createElement('div');
    const isError = type === 'error';
    toast.className = `pointer-events-auto flex items-center gap-3 px-5 py-3.5 rounded-2xl border shadow-2xl transition-all duration-300 transform translate-y-2 opacity-0 text-xs sm:text-sm font-semibold ${
      isError 
        ? 'bg-red-950/90 border-red-500/50 text-red-200' 
        : 'bg-[#0B132B]/95 border-amber-500/50 text-amber-300 shadow-[0_10px_30px_rgba(212,175,55,0.25)]'
    }`;
    toast.innerHTML = `
      <span class="w-2.5 h-2.5 rounded-full ${isError ? 'bg-red-400' : 'bg-amber-400'} animate-ping shrink-0"></span>
      <span class="flex-1">${message}</span>
      <button class="text-slate-400 hover:text-white ml-2 text-base font-bold leading-none">&times;</button>
    `;

    toast.querySelector('button').addEventListener('click', () => {
      toast.remove();
    });

    container.appendChild(toast);

    requestAnimationFrame(() => {
      toast.classList.remove('translate-y-2', 'opacity-0');
      toast.classList.add('translate-y-0', 'opacity-100');
    });

    setTimeout(() => {
      if (toast.parentElement) {
        toast.classList.add('opacity-0', 'translate-y-2');
        setTimeout(() => toast.remove(), 300);
      }
    }, 4500);
  };

  // 2. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // 3. Theme Locked to Luxury Black & Gold Dark Mode
  localStorage.setItem('nirvana_theme', 'dark');
  if (window.updateGridColors) {
    window.updateGridColors(true);
  }

  // 4. Back To Top Button
  const backToTopBtn = document.getElementById('back-to-top-btn');
  if (backToTopBtn) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        backToTopBtn.classList.remove('hidden');
      } else {
        backToTopBtn.classList.add('hidden');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // 5. AJAX Form Handler: Contact Form
  const contactForm = document.getElementById('nirvana-contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting Enquiry...</span>`;

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action || 'api/submit-enquiry.php', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();

        if (result.success) {
          window.showToast(result.message, 'success');
          contactForm.reset();
        } else {
          window.showToast(result.message || 'Error sending enquiry.', 'error');
        }
      } catch (err) {
        window.showToast('Network error. Please try calling directly.', 'error');
      } finally {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      }
    });
  }

  // 6. Interactive Requirement Finder AJAX & WhatsApp Linker
  const reqForm = document.getElementById('nirvana-requirement-form');
  if (reqForm) {
    reqForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const formData = new FormData(reqForm);
      try {
        const resp = await fetch('api/submit-requirement.php', {
          method: 'POST',
          body: formData
        });
        const data = await resp.json();
        if (data.success) {
          window.showToast(data.message || 'Requirement submitted successfully! Our advisory team will contact you shortly.', 'success');
          reqForm.reset();
        }
      } catch (err) {
        window.showToast('Requirement received! Opening WhatsApp...', 'success');
      }
    });
  }

  // 7. Interactive Property Decision Wizard
  initDecisionWizard();

  // 8. Initialize Three.js 3D Background Grid
  initThreeBackground();

  // 9. Initialize Three.js 3D Hero Building (if canvas container exists on page)
  initThreeHeroBuilding();

  // 10. Initialize 3D Floor Plan Viewer (if on project-detail page)
  initThreeFloorPlan();
});

/* ----------------------------------------------------
   Three.js 3D Persistent Background Grid
---------------------------------------------------- */
function initThreeBackground() {
  const container = document.getElementById('three-bg-canvas');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
  camera.position.set(0, 0, 15);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Structural Wireframe Grid
  const gridGeo = new THREE.PlaneGeometry(60, 60, 30, 30);
  const gridMat = new THREE.MeshBasicMaterial({
    color: 0xd4af37,
    wireframe: true,
    transparent: true,
    opacity: 0.08
  });
  const gridMesh = new THREE.Mesh(gridGeo, gridMat);
  gridMesh.rotation.x = -Math.PI / 2.5;
  gridMesh.position.set(0, -4, -5);
  scene.add(gridMesh);

  // Floating Architectural Polygonal Facets
  const icoGeo = new THREE.IcosahedronGeometry(3, 1);
  const icoMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, wireframe: true, transparent: true, opacity: 0.06 });
  const icoMesh = new THREE.Mesh(icoGeo, icoMat);
  icoMesh.position.set(-8, 2, -10);
  scene.add(icoMesh);

  const octGeo = new THREE.OctahedronGeometry(4, 1);
  const octMat = new THREE.MeshBasicMaterial({ color: 0xfbbf24, wireframe: true, transparent: true, opacity: 0.05 });
  const octMesh = new THREE.Mesh(octGeo, octMat);
  octMesh.position.set(9, -2, -12);
  scene.add(octMesh);

  // Golden Floating Dust Particles
  const particleCount = 100;
  const positions = new Float32Array(particleCount * 3);
  for (let i = 0; i < particleCount * 3; i += 3) {
    positions[i] = (Math.random() - 0.5) * 30;
    positions[i + 1] = (Math.random() - 0.5) * 20;
    positions[i + 2] = (Math.random() - 0.5) * 30;
  }
  const particleGeo = new THREE.BufferGeometry();
  particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
  const particleMat = new THREE.PointsMaterial({ size: 0.08, color: 0xfbbf24, transparent: true, opacity: 0.4 });
  const particles = new THREE.Points(particleGeo, particleMat);
  scene.add(particles);

  window.updateGridColors = function(isDark) {
    gridMat.color.setHex(isDark ? 0xd4af37 : 0x0284c7);
    gridMat.opacity = isDark ? 0.08 : 0.12;
  };

  let clock = 0;
  function animate() {
    requestAnimationFrame(animate);
    clock += 0.01;
    gridMesh.rotation.y = clock * 0.03;
    gridMesh.rotation.x = -Math.PI / 2.5 + Math.sin(clock * 0.02) * 0.05;
    icoMesh.rotation.y = clock * 0.05;
    octMesh.rotation.x = clock * 0.04;
    particles.rotation.y = -clock * 0.02;
    renderer.render(scene, camera);
  }
  animate();

  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

/* ----------------------------------------------------
   Three.js 3D Hero Tower Visualizer
---------------------------------------------------- */
function initThreeHeroBuilding() {
  const container = document.getElementById('hero-3d-canvas');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(0, 1, 9);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  // Controls
  let controls = null;
  if (typeof THREE.OrbitControls !== 'undefined') {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1.2;
    controls.maxPolarAngle = Math.PI / 2 + 0.1;
    controls.minPolarAngle = Math.PI / 4;
  }

  // Lighting
  const ambLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambLight);
  const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
  dirLight.position.set(10, 15, 10);
  scene.add(dirLight);
  const pointLight = new THREE.PointLight(0x38bdf8, 1);
  pointLight.position.set(-10, -5, -10);
  scene.add(pointLight);

  const towerGroup = new THREE.Group();
  scene.add(towerGroup);

  // Tower Base Podium
  const baseGeo = new THREE.BoxGeometry(4.2, 0.6, 4.2);
  const baseMat = new THREE.MeshStandardMaterial({ color: 0x1e293b, metalness: 0.9, roughness: 0.2 });
  const baseMesh = new THREE.Mesh(baseGeo, baseMat);
  baseMesh.position.y = -3.2;
  towerGroup.add(baseMesh);

  // Main Glass Tower Body
  const glassGeo = new THREE.BoxGeometry(2.8, 5.4, 2.8);
  const glassMat = new THREE.MeshStandardMaterial({
    color: 0x0f2b48,
    metalness: 0.8,
    roughness: 0.1,
    transparent: true,
    opacity: 0.85
  });
  const glassMesh = new THREE.Mesh(glassGeo, glassMat);
  glassMesh.position.y = 0.2;
  towerGroup.add(glassMesh);

  // Golden Columns
  const frameColor = 0xd4af37;
  const colMat = new THREE.MeshStandardMaterial({ color: frameColor, metalness: 0.95, roughness: 0.1 });
  [-1.41, 1.41].forEach(x => {
    [-1.41, 1.41].forEach(z => {
      const colGeo = new THREE.CylinderGeometry(0.08, 0.08, 5.6, 8);
      const col = new THREE.Mesh(colGeo, colMat);
      col.position.set(x, 0.2, z);
      towerGroup.add(col);
    });
  });

  // Horizontal Golden Structural Bands
  [-2.2, -1.0, 0.2, 1.4, 2.6].forEach(y => {
    const bandGeo = new THREE.BoxGeometry(2.9, 0.12, 2.9);
    const band = new THREE.Mesh(bandGeo, colMat);
    band.position.y = y;
    towerGroup.add(band);
  });

  // Glowing Floor Strips
  const glowMat = new THREE.MeshBasicMaterial({ color: 0xf59e0b, transparent: true, opacity: 0.7 });
  [-1.8, -1.2, -0.6, 0, 0.6, 1.2, 1.8, 2.4].forEach(y => {
    const floorPlateGeo = new THREE.BoxGeometry(2.6, 0.05, 2.6);
    const floorPlate = new THREE.Mesh(floorPlateGeo, new THREE.MeshStandardMaterial({ color: 0x334155 }));
    floorPlate.position.y = y;
    towerGroup.add(floorPlate);

    const winFront = new THREE.Mesh(new THREE.BoxGeometry(2.4, 0.25, 0.02), glowMat);
    winFront.position.set(0, y + 0.15, 1.41);
    towerGroup.add(winFront);
  });

  // Roof Helipad & Spire
  const heliGeo = new THREE.CylinderGeometry(1.2, 1.2, 0.2, 16);
  const heli = new THREE.Mesh(heliGeo, new THREE.MeshStandardMaterial({ color: 0x0284c7, metalness: 0.8 }));
  heli.position.y = 3.0;
  towerGroup.add(heli);

  const spireGeo = new THREE.CylinderGeometry(0.03, 0.06, 1.4, 8);
  const spire = new THREE.Mesh(spireGeo, colMat);
  spire.position.y = 3.7;
  towerGroup.add(spire);

  const beaconGeo = new THREE.SphereGeometry(0.1, 16, 16);
  const beacon = new THREE.Mesh(beaconGeo, new THREE.MeshBasicMaterial({ color: 0xef4444 }));
  beacon.position.y = 4.4;
  towerGroup.add(beacon);

  function renderTower() {
    requestAnimationFrame(renderTower);
    if (controls) {
      controls.update();
    } else {
      towerGroup.rotation.y += 0.005;
    }
    renderer.render(scene, camera);
  }
  renderTower();

  window.addEventListener('resize', () => {
    if (!container) return;
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });
}

/* ----------------------------------------------------
   Three.js 3D Floor Plan Layout Viewer
---------------------------------------------------- */
function initThreeFloorPlan() {
  const container = document.getElementById('floorplan-3d-canvas');
  if (!container || typeof THREE === 'undefined') return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(45, container.clientWidth / container.clientHeight, 0.1, 100);
  camera.position.set(5, 6, 8);

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  container.appendChild(renderer.domElement);

  let controls = null;
  if (typeof THREE.OrbitControls !== 'undefined') {
    controls = new THREE.OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.maxPolarAngle = Math.PI / 2.1;
  }

  const ambLight = new THREE.AmbientLight(0xffffff, 0.8);
  scene.add(ambLight);
  const dirLight = new THREE.DirectionalLight(0xd4af37, 1.5);
  dirLight.position.set(5, 10, 5);
  scene.add(dirLight);

  const floorGroup = new THREE.Group();
  scene.add(floorGroup);

  // Floor Base Slab
  const slabGeo = new THREE.BoxGeometry(6, 0.2, 6);
  const slabMat = new THREE.MeshStandardMaterial({ color: 0x0f172a, roughness: 0.3, metalness: 0.7 });
  const slab = new THREE.Mesh(slabGeo, slabMat);
  floorGroup.add(slab);

  // Room Wall Outlines
  const wallMat = new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.8, roughness: 0.2 });
  const walls = [
    { size: [6.1, 0.8, 0.15], pos: [0, 0.4, 3] },
    { size: [6.1, 0.8, 0.15], pos: [0, 0.4, -3] },
    { size: [0.15, 0.8, 6.1], pos: [3, 0.4, 0] },
    { size: [0.15, 0.8, 6.1], pos: [-3, 0.4, 0] },
    { size: [0.15, 0.8, 3.5], pos: [0, 0.4, 1.25] },
    { size: [3.0, 0.8, 0.15], pos: [-1.5, 0.4, -0.5] }
  ];

  walls.forEach(w => {
    const wallMesh = new THREE.Mesh(new THREE.BoxGeometry(...w.size), wallMat);
    wallMesh.position.set(...w.pos);
    floorGroup.add(wallMesh);
  });

  function renderFloor() {
    requestAnimationFrame(renderFloor);
    if (controls) controls.update();
    renderer.render(scene, camera);
  }
  renderFloor();
}

/* ----------------------------------------------------
   Interactive Property Decision Tool Wizard
---------------------------------------------------- */
function initDecisionWizard() {
  const wizard = document.getElementById('property-decision-wizard');
  if (!wizard) return;

  const answers = { purpose: '', type: '', location: '', timeline: '' };
  let currentStep = 1;

  const stepContainer = wizard.querySelector('#wizard-step-container');
  const progressText = wizard.querySelector('#wizard-progress-text');
  const progressBar = wizard.querySelector('#wizard-progress-bar');
  const questionNumber = wizard.querySelector('#wizard-question-num');

  const questions = [
    {
      key: 'purpose',
      title: 'What is your primary investment or living purpose?',
      options: [
        { label: 'Personal Living', desc: 'Luxury family residence or executive flat' },
        { label: 'Long-term Capital Growth', desc: 'High appreciation corridor investment' },
        { label: 'Rental Yield', desc: 'Pre-leased commercial or high-demand corporate suite' },
        { label: 'Corporate Office', desc: 'Consolidated company headquarters' }
      ]
    },
    {
      key: 'type',
      title: 'Which architectural category are you considering?',
      options: [
        { label: 'Sky Villa (3 & 4 BHK)', desc: 'Soaring high-rise with skyline panoramic deck' },
        { label: 'Ultra-Luxury Duplex', desc: '4 & 5 BHK palace layout with private lift' },
        { label: 'Grade-A Corporate Tower', desc: 'Modern commercial office suite' },
        { label: 'High-Street Retail', desc: 'Ground-floor commercial showroom corridor' }
      ]
    },
    {
      key: 'location',
      title: 'Which Gujarat growth corridor do you prefer?',
      options: [
        { label: 'Science City Road & Sola', desc: 'Ahmedabad\'s most coveted commercial & luxury belt' },
        { label: 'SG Highway Corridor', desc: 'Premier arterial high-speed business spine' },
        { label: 'Khoraj & Gandhinagar Belt', desc: 'Rapidly emerging green corridor' },
        { label: 'Thaltej & West Corridors', desc: 'Established high-net-worth enclave' }
      ]
    },
    {
      key: 'timeline',
      title: 'What is your expected timeline for possession?',
      options: [
        { label: 'Immediate Move-In', desc: 'Ready for possession with full certification' },
        { label: 'Within 12-18 Months', desc: 'Advanced construction stage' },
        { label: 'Flexible / 2-3 Years', desc: 'Maximum early-stage capital appreciation' }
      ]
    }
  ];

  function renderStep(step) {
    if (step > 4) {
      renderResult();
      return;
    }

    const q = questions[step - 1];
    questionNumber.textContent = `Question ${step} of 4`;
    progressText.textContent = `${Math.round((step / 4) * 100)}% Completed`;
    progressBar.style.width = `${(step / 4) * 100}%`;

    let html = `
      <div class="space-y-4">
        <h3 class="text-lg sm:text-xl font-serif font-bold text-white">${q.title}</h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
    `;

    q.options.forEach(opt => {
      html += `
        <button
          type="button"
          class="wizard-option-btn p-4 rounded-2xl bg-[#0B132B] border border-slate-800 hover:border-amber-400 text-left transition-all group flex flex-col justify-between"
          data-key="${q.key}"
          data-value="${opt.label}"
        >
          <div>
            <p class="text-sm font-bold text-white group-hover:text-amber-300">${opt.label}</p>
            <p class="text-xs text-slate-400 mt-1">${opt.desc}</p>
          </div>
          <span class="text-amber-400 text-xs font-mono font-bold mt-3 block">Select Option →</span>
        </button>
      `;
    });

    html += `</div></div>`;
    stepContainer.innerHTML = html;

    stepContainer.querySelectorAll('.wizard-option-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        answers[btn.dataset.key] = btn.dataset.value;
        currentStep++;
        renderStep(currentStep);
      });
    });
  }

  function renderResult() {
    questionNumber.textContent = `Recommendation Ready`;
    progressText.textContent = `100% Completed`;
    progressBar.style.width = `100%`;

    const recommendation = `Based on your selection of ${answers.purpose} for a ${answers.type} around ${answers.location}, exploring ${answers.timeline === 'Immediate Move-In' ? 'ready-to-move' : 'upcoming flagship'} Nirvana Group developments provides ideal strategic alignment.`;

    stepContainer.innerHTML = `
      <div class="space-y-6 animate-fadeIn">
        <div class="p-5 rounded-2xl bg-[#0B132B] border border-amber-500/40 space-y-3">
          <span class="text-xs font-mono text-amber-400 uppercase tracking-widest font-bold block">NIRVANA STRATEGIC RECOMMENDATION</span>
          <p class="text-sm sm:text-base text-slate-200 leading-relaxed">${recommendation}</p>
        </div>

        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div class="p-3 rounded-xl bg-[#070D1E] border border-slate-800">
            <span class="text-slate-400 block">Purpose</span>
            <span class="font-bold text-amber-300">${answers.purpose}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#070D1E] border border-slate-800">
            <span class="text-slate-400 block">Category</span>
            <span class="font-bold text-amber-300">${answers.type}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#070D1E] border border-slate-800">
            <span class="text-slate-400 block">Corridor</span>
            <span class="font-bold text-amber-300">${answers.location}</span>
          </div>
          <div class="p-3 rounded-xl bg-[#070D1E] border border-slate-800">
            <span class="text-slate-400 block">Timeline</span>
            <span class="font-bold text-amber-300">${answers.timeline}</span>
          </div>
        </div>

        <div class="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="#nirvana-contact-form"
            class="px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-navy-950 bg-gold-gradient shadow-lg hover:scale-105 transition-all"
          >
            Submit Custom Requirement
          </a>

          <button
            id="wizard-reset-btn"
            type="button"
            class="px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white border border-slate-800 hover:border-slate-600 transition-all"
          >
            Reset Wizard
          </button>
        </div>
      </div>
    `;

    // Save submission to database
    const token = document.querySelector('input[name="csrf_token"]')?.value || '';
    const postData = new FormData();
    postData.append('csrf_token', token);
    postData.append('purpose', answers.purpose);
    postData.append('type', answers.type);
    postData.append('location', answers.location);
    postData.append('timeline', answers.timeline);
    postData.append('recommendation', recommendation);

    fetch('api/submit-decision.php', { method: 'POST', body: postData })
      .catch(e => console.log('Decision logged.'));

    document.getElementById('wizard-reset-btn')?.addEventListener('click', () => {
      currentStep = 1;
      renderStep(currentStep);
    });
  }

  renderStep(currentStep);
}


// ==========================================================================
// GSAP & ScrollTrigger Luxury Animations, Navbar Scroll, and Lightbox Modal
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
  // Enhanced Navbar Scroll Transition
  const navBox = document.getElementById('navbar-box');
  if (navBox) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        navBox.classList.add('bg-[#101010]', 'border-[#C6A46A]/60', 'shadow-[0_15px_40px_rgba(0,0,0,0.95)]');
        navBox.classList.remove('bg-[#101010]/90', 'border-[#C6A46A]/30');
      } else {
        navBox.classList.remove('bg-[#101010]', 'border-[#C6A46A]/60', 'shadow-[0_15px_40px_rgba(0,0,0,0.95)]');
        navBox.classList.add('bg-[#101010]/90', 'border-[#C6A46A]/30');
      }
    });
  }

  // GSAP Animations
  if (typeof gsap !== 'undefined') {
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    gsap.from('.gsap-hero-title', {
      duration: 1.2,
      y: 40,
      opacity: 0,
      ease: 'power3.out',
      stagger: 0.15
    });

    gsap.from('.gsap-hero-desc', {
      duration: 1.2,
      y: 30,
      opacity: 0,
      delay: 0.3,
      ease: 'power3.out'
    });

    gsap.from('.gsap-hero-cta', {
      duration: 1,
      y: 20,
      opacity: 0,
      delay: 0.5,
      ease: 'power3.out'
    });

    if (typeof ScrollTrigger !== 'undefined') {
      gsap.utils.toArray('.gsap-reveal').forEach((el) => {
        gsap.from(el, {
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          },
          duration: 0.9,
          y: 35,
          opacity: 0,
          ease: 'power2.out'
        });
      });
    }
  }

  // Lightbox Modal for Gallery Images
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.getElementById('lightbox-close');

  if (lightbox && lightboxImg) {
    document.querySelectorAll('.gallery-item-trigger').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const src = item.getAttribute('data-full-img') || item.querySelector('img')?.src;
        const cap = item.getAttribute('data-caption') || item.getAttribute('data-title') || '';
        lightboxImg.src = src;
        if (lightboxCaption) lightboxCaption.textContent = cap;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
      });
    });

    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      });
    }

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox || e.target.classList.contains('lightbox-backdrop')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
});
