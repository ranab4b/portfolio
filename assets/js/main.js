document.addEventListener('DOMContentLoaded', () => {

  const PROJECT_DATA = {
    "motive-driver": {
      kind: "Compliance & Safety / Fleet Tech", title: "Motive Driver App",
      summary: "The primary Android client used by hundreds of thousands of commercial drivers across North America to stay compliant with FMCSA and CCMTA electronic-logging regulations. Owned core ELD/HOS workflows and Bluetooth pairing with Motive's in-cab Vehicle Gateway hardware.",
      architecture: ["MVI with Clean Architecture and Domain-Driven Design across compliance-critical modules", "Bluetooth Low Energy pairing layer bridging the app to Motive's Vehicle Gateway ELD hardware", "Cloud-first ELD event pipeline built with the Cloud ELD team for reliable, low-discrepancy syncing"],
      contributions: ["Owned core ELD/HOS workflows: driving lock screen, HOS log generation, vehicle selection, co-driver flows, and DVIR inspections", "Led Android delivery for Remote Vehicle Search, enabling real-time fleet dispatching", "Delivered multiple Canadian ELD recertification projects, maintaining uninterrupted CCMTA compliance", "Migrated core compliance modules from legacy patterns to MVI/MVVM with DDD and SOLID principles"],
      stack: ["Kotlin", "Jetpack Compose", "MVVM/MVI", "Bluetooth (BLE)", "Room", "Firebase Crashlytics"],
      links: { play: "https://play.google.com/store/apps/details?id=com.keeptruckin.android&hl=en" }
    },
    "motive-fleet": {
      kind: "Fleet Management / SaaS Dashboard", title: "Motive Fleet App",
      summary: "The companion Android app for fleet managers and dispatchers \u2014 real-time GPS tracking, vehicle health telematics, and remote ELD compliance monitoring across an entire fleet from a single map view.",
      architecture: ["Shared domain/data layer with the Driver app for consistent compliance logic across both clients", "Real-time map rendering layer using Google Maps SDK with live location, satellite, and traffic overlays", "Vehicle Search API integration enabling dispatch-ready vehicle lookup by status, location, and HOS availability"],
      contributions: ["Led Android delivery for Remote Vehicle Search and Vehicle Search API integration", "Built maintenance telematics views surfacing DEF level, fuel level, engine fault codes, and odometer data", "Partnered with backend and Cloud ELD teams to keep fleet-side compliance data in sync with driver-side logs"],
      stack: ["Kotlin", "Jetpack Compose", "Google Maps SDK", "REST APIs", "MVVM"],
      links: { play: "https://play.google.com/store/apps/details?id=com.keeptruckin.android.fleet&hl=en" }
    },
    "airmiles": {
      kind: "Loyalty & Rewards", title: "Airmiles App",
      summary: "A regional loyalty rewards app built from architecture design through Play Store launch \u2014 letting members track their Air Miles balance, browse partner offers, and redeem rewards on the go.",
      architecture: ["Defined the app's tech stack, coding standards, and third-party integration strategy from a blank slate", "Modular rewards and redemption layer supporting multiple partner integrations"],
      contributions: ["Owned end-to-end architecture design through Play Store launch", "Established coding standards and integration patterns adopted across the team's subsequent apps"],
      stack: ["Kotlin", "MVVM", "REST APIs", "Push Notifications"],
      links: { play: "https://play.google.com/store/apps/details?id=com.aimia.android.me&hl=en" }
    },
    "gifti-oman": {
      kind: "E-Commerce / Gifting Platform", title: "Gifti Oman",
      summary: "Oman's e-commerce gifting app \u2014 letting users buy, personalize, and send digital gift cards from a growing network of retail partners, with tie-in offers for OAB credit card holders.",
      architecture: ["Partner-catalog and offer-redemption layer supporting a growing list of retail merchants", "Bank-tier promotional integration surfacing exclusive OAB cardholder deals"],
      contributions: ["Delivered the app as part of the Mylist/Merit Incentives engineering team, covering client requirement gathering and release management", "Coordinated with distributed cross-functional teams to ship on schedule"],
      stack: ["Kotlin", "MVVM", "Payment Integration", "REST APIs"],
      links: { play: "https://play.google.com/store/apps/details?id=com.oab.gifti" }
    },
    "offaraty": {
      kind: "Employee Benefits / Fintech Client", title: "Offaraty by Riyad Bank",
      summary: "An exclusive offers and benefits app built for Riyad Bank's employees \u2014 browse and redeem discounts across shopping, dining, and lifestyle categories using an employee-code login.",
      architecture: ["Employee-code authentication flow tailored to Riyad Bank's internal directory", "Category-based offer browsing and redemption engine shared across Merit Incentives' client portfolio"],
      contributions: ["Delivered as part of the Mylist/Merit Incentives engineering team serving a retail banking client", "Supported client requirement gathering and release coordination"],
      stack: ["Kotlin", "MVVM", "REST APIs"],
      links: { play: "https://play.google.com/store/apps/details?id=com.riyadhbank" }
    },
    "crypto-tracker": {
      kind: "Personal / Open Source", title: "Crypto Tracker",
      summary: "A full-featured crypto market tracker built to demonstrate modern Android architecture end to end \u2014 Compose UI, MVI, and a custom-drawn line chart, all wired together with Koin and Ktor.",
      architecture: ["Clean Architecture with MVI state management", "Koin-based dependency injection across all layers", "Adaptive navigation with Material 3 dynamic theming"],
      contributions: ["Built a custom Canvas-drawn line chart for historical price data, avoiding third-party charting dependencies", "Integrated a free crypto market data API via Ktor for live coin pricing and history"],
      stack: ["Kotlin", "Jetpack Compose", "Ktor", "Koin", "MVI", "Material 3"],
      links: { web: "https://github.com/ranab4b/Compose-Crypto-tracker/" }
    },
    "flutter-movie-explorer": {
      kind: "Personal / Open Source", title: "Flutter Movie Explorer",
      summary: "A production-grade Flutter movie discovery app built strictly to Clean Architecture and BLoC, with debounced live search, infinite scroll, and a full BLoC/UseCase unit test suite.",
      architecture: ["Strict separation of Data, Domain, and Presentation layers", "BLoC pattern for predictable, testable state management"],
      contributions: ["Implemented debounced real-time search against the TMDB API with dynamic genre-ID mapping", "Built a custom branded loading/initialization state", "Wrote a full BLoC and UseCase unit test suite using mocktail"],
      stack: ["Flutter", "Dart", "BLoC", "Clean Architecture", "mocktail"],
      links: { web: "https://github.com/ranab4b/tmdb-flutter-clean-architecture" }
    },
    "cmp-movie-explorer": {
      kind: "Personal / Open Source", title: "The Movie Explorer (CMP)",
      summary: "A production-ready cross-platform movie discovery app sharing 100% of its UI between Android and iOS using Compose Multiplatform \u2014 proof that KMP/CMP can deliver a fully native-feeling experience on both platforms from one codebase.",
      architecture: ["Clean Architecture and SOLID principles across a fully shared Compose Multiplatform UI layer", "Explicit DTO-to-Domain mapping keeping network models isolated from UI/domain entities"],
      contributions: ["Delivered infinite-scroll pagination and debounced (500ms) live search against the TMDB API", "Built dynamic client-side genre-ID-to-label mapping", "Wired the full app together with Koin for dependency injection"],
      stack: ["Kotlin Multiplatform", "Compose Multiplatform", "Koin", "Ktor"],
      links: { web: "https://github.com/ranab4b/compose-multiplatform-tmdb-app" }
    },
    "vitaltrack": {
      kind: "Health / Wearables", title: "VitalTrack Health",
      summary: "A wearable-synced health app was leaking memory during long tracking sessions. Re-architected around MVI with strict lifecycle-aware data streams.",
      architecture: ["MVI with lifecycle-aware data streams", "Repository layer isolating Health Connect from UI state", "Structured concurrency for sensor session management"],
      contributions: ["Re-architected session handling around MVI with strict lifecycle-aware data streams", "Diagnosed and closed three long-running memory leaks in the sensor pipeline", "Cut peak memory usage by 45% during multi-hour tracking sessions"],
      stack: ["Kotlin", "Compose", "Room", "Health Connect"],
      links: {  }
    },
    "pos-suite": {
      kind: "Retail / Cross-Platform", title: "Retail POS Suite",
      summary: "A retail chain needed one point-of-sale app across tablets and handheld scanners, each with different hardware peripherals.",
      architecture: ["BLoC pattern for predictable state across screens", "Platform channel bridges isolating hardware-specific code", "Local-first SQLite store with background sync"],
      contributions: ["Built a single Flutter codebase with pluggable hardware bridges for scanners and printers", "Rolled out to 120+ stores with zero platform-specific forks", "Designed offline-first checkout so registers keep working through outages"],
      stack: ["Flutter", "Dart", "Platform Channels", "SQLite"],
      links: {  }
    },
  };
  /* ---------- Footer year ---------- */
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* ---------- Mobile nav toggle ---------- */
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', () => {
      const open = navLinks.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', open);
    });
    navLinks.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => {
        navLinks.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------- Scroll-triggered reveal ---------- */
  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in-view'));
  }

  /* ---------- Animated counters ---------- */
  const counters = document.querySelectorAll('.js-counter');
  const animateCounter = (elx) => {
    const target = parseFloat(elx.dataset.target);
    const decimals = parseInt(elx.dataset.decimal || '0', 10);
    const suffix = elx.dataset.suffix || '';
    const duration = 1400;
    const start = performance.now();
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = target * eased;
      elx.textContent = value.toFixed(decimals) + suffix;
      if (progress < 1) requestAnimationFrame(step);
      else elx.textContent = target.toFixed(decimals) + suffix;
    };
    requestAnimationFrame(step);
  };
  if (counters.length) {
    if ('IntersectionObserver' in window) {
      const counterIo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) { animateCounter(entry.target); counterIo.unobserve(entry.target); }
        });
      }, { threshold: 0.6 });
      counters.forEach(c => counterIo.observe(c));
    } else {
      counters.forEach(animateCounter);
    }
  }

  /* ---------- Skill meters ---------- */
  const skillBars = document.querySelectorAll('.js-skill');
  if (skillBars.length) {
    if ('IntersectionObserver' in window) {
      const skillIo = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elx = entry.target;
            requestAnimationFrame(() => { elx.style.width = (elx.dataset.pct || 0) + '%'; });
            skillIo.unobserve(elx);
          }
        });
      }, { threshold: 0.4 });
      skillBars.forEach(b => skillIo.observe(b));
    } else {
      skillBars.forEach(b => { b.style.width = (b.dataset.pct || 0) + '%'; });
    }
  }

  /* ---------- Testimonial carousel ---------- */
  const track = document.getElementById('testimonialTrack');
  const prevBtn = document.getElementById('tPrev');
  const nextBtn = document.getElementById('tNext');
  if (track && prevBtn && nextBtn) {
    const scrollByCard = (dir) => {
      const card = track.querySelector('.t-card');
      if (!card) return;
      const gap = parseFloat(getComputedStyle(track).gap) || 0;
      const distance = card.getBoundingClientRect().width + gap;
      track.scrollBy({ left: dir * distance, behavior: 'smooth' });
    };
    prevBtn.addEventListener('click', () => scrollByCard(-1));
    nextBtn.addEventListener('click', () => scrollByCard(1));
  }

  /* ---------- Project modal ---------- */
  const overlay = document.getElementById('modalOverlay');
  const modalContent = document.getElementById('modalContent');
  const storeIcons = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M3 2.6v18.8c0 .5.3.9.7 1.1l10.6-10.5L3.7 1.5c-.4.2-.7.6-.7 1.1zM17.6 9.4l-2.9-1.7-2.5 2.5 2.5 2.5 2.9-1.7c.7-.4.7-1.2 0-1.6zM4.4 22.5l9.1-5.2-2.4-2.4-6.7 7.6zM13.5 6.7l-9.1-5.2 6.7 7.6 2.4-2.4z"/></svg>',
    app: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8.94-.11 1.84-.79 3.02-.87 1.42-.09 2.94.52 3.77 1.74-.09.06-2.25 1.31-2.22 3.9.03 3.09 2.7 4.11 2.73 4.13-.02.06-.42 1.44-1.38 2.27zM12.03 7.25c-.15-2.23 1.66-4.09 3.74-4.25.28 2.28-2.03 4.4-3.74 4.25z"/></svg>',
    web: '<svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm7.93 9h-3.05a15.7 15.7 0 00-1.13-5.28A8.02 8.02 0 0119.93 11zM12 4.06c.85 1.14 1.86 3.13 2.13 6.94H9.87c.27-3.81 1.28-5.8 2.13-6.94zM9.87 13h4.26c-.27 3.81-1.28 5.8-2.13 6.94-.85-1.14-1.86-3.13-2.13-6.94zM8.25 5.72A15.7 15.7 0 007.12 11H4.07a8.02 8.02 0 014.18-5.28zM4.07 13h3.05a15.7 15.7 0 001.13 5.28A8.02 8.02 0 014.07 13zm11.68 5.28A15.7 15.7 0 0016.88 13h3.05a8.02 8.02 0 01-4.18 5.28z"/></svg>'
  };
  const storeLabels = { play: 'Play Store', app: 'App Store', web: 'Web Demo' };

  const closeModal = () => {
    if (!overlay) return;
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  };

  const openModal = (key) => {
    const project = PROJECT_DATA[key];
    if (!overlay || !modalContent || !project) return;
    const linkButtons = project.links ? Object.keys(project.links).map(k =>
      `<a class="store-btn" href="${project.links[k]}" target="_blank" rel="noopener">${storeIcons[k] || ''}${storeLabels[k] || k}</a>`
    ).join('') : '';
    modalContent.innerHTML = `
      <button class="modal-close" aria-label="Close">&times;</button>
      <span class="kind">${project.kind}</span>
      <h3>${project.title}</h3>
      <p>${project.summary}</p>
      ${project.architecture ? `<span class="modal-section-label">Architecture</span><ul class="modal-detail-list">${project.architecture.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
      ${project.contributions ? `<span class="modal-section-label">Key Technical Contributions</span><ul class="modal-detail-list">${project.contributions.map(d => `<li>${d}</li>`).join('')}</ul>` : ''}
      <span class="modal-section-label">Stack</span>
      <div class="pill-row">${project.stack.map(s => `<span class="pill">${s}</span>`).join('')}</div>
      ${linkButtons ? `<div class="modal-store-row">${linkButtons}</div>` : ''}
    `;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    modalContent.querySelector('.modal-close').addEventListener('click', closeModal);
  };

  document.querySelectorAll('[data-modal]').forEach(card => {
    card.addEventListener('click', () => openModal(card.dataset.modal));
  });
  if (overlay) {
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeModal(); });
  }

  /* ---------- Showcase category filter ---------- */
  const filterBtns = document.querySelectorAll('.filter-btn');
  const showcaseGrid = document.getElementById('showcaseGrid');
  const emptyState = document.getElementById('emptyState');
  if (filterBtns.length && showcaseGrid) {
    const applyFilter = (filter) => {
      const cards = Array.from(showcaseGrid.querySelectorAll('.showcase-card'));
      let visibleCount = 0;
      cards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.cat === filter;
        if (matches) {
          card.classList.remove('filtered-out');
          card.style.transitionDelay = (visibleCount * 60) + 'ms';
          visibleCount++;
        } else {
          card.style.transitionDelay = '0ms';
          card.classList.add('filtered-out');
        }
      });
      if (emptyState) emptyState.style.display = visibleCount === 0 ? 'block' : 'none';
    };
    filterBtns.forEach((btn) => {
      btn.addEventListener('click', () => {
        filterBtns.forEach((b) => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
        btn.classList.add('active');
        btn.setAttribute('aria-selected', 'true');
        applyFilter(btn.dataset.filter);
      });
    });
  }

  /* ---------- Contact form validation ---------- */
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    const successMsg = document.getElementById('successMsg');
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validators = {
      fullName: (v) => v.trim().length > 1,
      emailAddress: (v) => emailPattern.test(v.trim()),
      roleType: (v) => v.trim().length > 0,
      budget: (v) => v.trim().length > 1,
      message: (v) => v.trim().length > 4
    };
    const validateField = (input) => {
      const fieldWrap = input.closest('.field');
      if (!fieldWrap) return true;
      const rule = validators[input.name];
      const valid = rule ? rule(input.value) : true;
      fieldWrap.classList.toggle('has-error', !valid);
      return valid;
    };
    contactForm.querySelectorAll('input, select, textarea').forEach((input) => {
      input.addEventListener('blur', () => validateField(input));
      input.addEventListener('input', () => {
        const fieldWrap = input.closest('.field');
        if (fieldWrap && fieldWrap.classList.contains('has-error')) validateField(input);
      });
    });
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let allValid = true;
      contactForm.querySelectorAll('input, select, textarea').forEach((input) => {
        if (!validateField(input)) allValid = false;
      });
      if (!allValid) {
        if (successMsg) successMsg.classList.remove('show');
        const firstError = contactForm.querySelector('.field.has-error input, .field.has-error select, .field.has-error textarea');
        if (firstError) firstError.focus();
        return;
      }
      if (successMsg) successMsg.classList.add('show');
      contactForm.reset();
      contactForm.querySelectorAll('.field').forEach(f => f.classList.remove('has-error'));
      if (successMsg) setTimeout(() => successMsg.classList.remove('show'), 6000);
    });
  }

});
