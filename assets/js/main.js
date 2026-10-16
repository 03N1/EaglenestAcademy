/**
 * Main JavaScript for Eaglenest Academy
 * Handles interactivity: mobile menu, scroll animations, counters, accordions, back-to-top
 */

/* ==================== MOBILE MENU TOGGLE ==================== */

/**
 * Toggle mobile navigation menu
 */
function initMobileMenu() {
    const toggleButton = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!toggleButton || !mobileMenu) return;

    toggleButton.addEventListener('click', function () {
        // Toggle menu visibility
        const isHidden = mobileMenu.classList.contains('hidden');

        if (isHidden) {
            mobileMenu.classList.remove('hidden');
            menuIcon.classList.add('hidden');
            closeIcon.classList.remove('hidden');
            document.body.classList.add('mobile-menu-open');
        } else {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.classList.remove('mobile-menu-open');
        }
    });

    // Close menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('hidden');
            menuIcon.classList.remove('hidden');
            closeIcon.classList.add('hidden');
            document.body.classList.remove('mobile-menu-open');
        });
    });
}

/* ==================== SCROLL REVEAL ANIMATIONS ==================== */

/**
 * Observe elements and trigger reveal animations on scroll
 */
function initScrollReveal() {
    // Select all elements with reveal classes
    const revealElements = document.querySelectorAll(
        '.reveal, .reveal-left, .reveal-right, .reveal-scale'
    );

    if (revealElements.length === 0) return;

    // Create intersection observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: unobserve after animation (one-time animation)
                // observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all reveal elements
    revealElements.forEach(element => {
        observer.observe(element);
    });
}

/* ==================== ANIMATED STAT COUNTERS ==================== */

/**
 * Animate number counters when they come into view
 * Usage: Add data-target="1000" to an element with class "counter"
 */
function initCounters() {
    const counters = document.querySelectorAll('.counter');

    if (counters.length === 0) return;

    const observerOptions = {
        threshold: 0.5
    };

    const counterObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                animateCounter(entry.target);
                entry.target.classList.add('counted');
                counterObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

/**
 * Animate a single counter element
 * @param {HTMLElement} element - Counter element with data-target attribute
 */
function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000; // 2 seconds
    const increment = target / (duration / 16); // 60fps
    let current = 0;

    const updateCounter = () => {
        current += increment;

        if (current < target) {
            element.textContent = Math.floor(current).toLocaleString();
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target.toLocaleString();
        }
    };

    updateCounter();
}

/* ==================== ACCORDION HANDLER ==================== */

/**
 * Handle accordion expand/collapse functionality
 * Usage: Add class "accordion-trigger" to buttons and "accordion-content" to content
 */
function initAccordions() {
    const accordionTriggers = document.querySelectorAll('.accordion-trigger');

    if (accordionTriggers.length === 0) return;

    accordionTriggers.forEach(trigger => {
        trigger.addEventListener('click', function () {
            const content = this.nextElementSibling;
            const icon = this.querySelector('.accordion-icon');

            if (!content || !content.classList.contains('accordion-content')) return;

            // Toggle content
            const isOpen = !content.classList.contains('hidden');

            if (isOpen) {
                // Close accordion
                content.classList.add('hidden');
                if (icon) icon.style.transform = 'rotate(0deg)';
                this.setAttribute('aria-expanded', 'false');
            } else {
                // Open accordion
                content.classList.remove('hidden');
                if (icon) icon.style.transform = 'rotate(180deg)';
                this.setAttribute('aria-expanded', 'true');
            }
        });
    });
}

/* ==================== BACK TO TOP BUTTON ==================== */

/**
 * Show/hide back-to-top button based on scroll position
 * Creates button if it doesn't exist
 */
function initBackToTop() {
    let backToTopButton = document.getElementById('back-to-top');

    // Create button if it doesn't exist
    if (!backToTopButton) {
        backToTopButton = document.createElement('button');
        backToTopButton.id = 'back-to-top';
        backToTopButton.className = 'no-print';
        backToTopButton.setAttribute('aria-label', 'Back to top');
        backToTopButton.innerHTML = `
      <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
      </svg>
    `;

        // Inline styles for positioning
        backToTopButton.style.cssText = `
      position: fixed;
      bottom: 2rem;
      left: 2rem;
      width: 3rem;
      height: 3rem;
      background: linear-gradient(135deg, #0EA5E9 0%, #22C55E 100%);
      color: white;
      border: none;
      border-radius: 50%;
      cursor: pointer;
      opacity: 0;
      visibility: hidden;
      transition: all 0.3s ease;
      box-shadow: 0 4px 16px rgba(15, 42, 67, 0.12);
      z-index: 999;
      display: flex;
      align-items: center;
      justify-content: center;
    `;

        document.body.appendChild(backToTopButton);
    }

    // Show/hide button on scroll
    function toggleBackToTop() {
        if (window.pageYOffset > 300) {
            backToTopButton.style.opacity = '1';
            backToTopButton.style.visibility = 'visible';
        } else {
            backToTopButton.style.opacity = '0';
            backToTopButton.style.visibility = 'hidden';
        }
    }

    // Scroll to top when clicked
    backToTopButton.addEventListener('click', function () {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Listen for scroll events
    window.addEventListener('scroll', toggleBackToTop);

    // Check initial scroll position
    toggleBackToTop();
}

/* ==================== SMOOTH SCROLL FOR ANCHOR LINKS ==================== */

/**
 * Add smooth scrolling to all anchor links
 */
function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const href = this.getAttribute('href');

            // Skip empty hash links
            if (href === '#' || href === '#!') return;

            const target = document.querySelector(href);

            if (target) {
                e.preventDefault();

                const headerOffset = 80; // Account for sticky header
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/* ==================== FORM VALIDATION HELPERS ==================== */

/**
 * Add basic form validation styling
 * Usage: Add class "validate-form" to forms
 */
function initFormValidation() {
    const forms = document.querySelectorAll('.validate-form');

    forms.forEach(form => {
        const inputs = form.querySelectorAll('input[required], textarea[required], select[required]');

        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                validateInput(this);
            });

            input.addEventListener('input', function () {
                if (this.classList.contains('invalid')) {
                    validateInput(this);
                }
            });
        });

        form.addEventListener('submit', function (e) {
            let isValid = true;

            inputs.forEach(input => {
                if (!validateInput(input)) {
                    isValid = false;
                }
            });

            if (!isValid) {
                e.preventDefault();
            }
        });
    });
}

/**
 * Validate a single input field
 * @param {HTMLElement} input - Input element to validate
 * @returns {boolean} - True if valid, false if invalid
 */
function validateInput(input) {
    const value = input.value.trim();
    let isValid = true;

    // Check if required field is empty
    if (input.hasAttribute('required') && value === '') {
        isValid = false;
    }

    // Check email format
    if (input.type === 'email' && value !== '') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            isValid = false;
        }
    }

    // Check phone format (basic)
    if (input.type === 'tel' && value !== '') {
        const phoneRegex = /^[+]?[\d\s()-]+$/;
        if (!phoneRegex.test(value)) {
            isValid = false;
        }
    }

    // Update classes
    if (isValid) {
        input.classList.remove('invalid', 'border-red-500');
        input.classList.add('valid', 'border-leaf-500');
    } else {
        input.classList.remove('valid', 'border-leaf-500');
        input.classList.add('invalid', 'border-red-500');
    }

    return isValid;
}

/* ==================== LAZY LOADING IMAGES ==================== */

/**
 * Lazy load images with data-src attribute
 */
function initLazyLoading() {
    const lazyImages = document.querySelectorAll('img[data-src]');

    if (lazyImages.length === 0) return;

    const imageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });

    lazyImages.forEach(img => {
        imageObserver.observe(img);
    });
}

/* ==================== INITIALIZATION ==================== */

/**
 * Initialize all interactive features when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function () {
    initMobileMenu();
    initScrollReveal();
    initCounters();
    initAccordions();
    initBackToTop();
    initSmoothScroll();
    initFormValidation();
    initLazyLoading();

    // Log initialization for debugging
    console.log('Eaglenest Academy - All scripts initialized successfully');
});

/* ==================== UTILITY FUNCTIONS ==================== */

/**
 * Debounce function to limit function calls
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} - Debounced function
 */
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/**
 * Throttle function to limit function execution rate
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} - Throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}
