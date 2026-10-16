/**
 * Reusable Components for Eaglenest Academy
 * Header, Footer, and Floating WhatsApp Button
 */

/* ==================== NAVIGATION LINKS ==================== */

const navLinks = [
    { label: 'Home', href: 'index.html' },
    { label: 'About', href: 'about.html' },
    { label: 'Academics', href: 'academics.html' },
    { label: 'Admissions', href: 'admission.html' },
    { label: 'Student Life', href: 'student-file.html' },
    { label: 'Contact', href: 'contact.html' },
];

/* ==================== HEADER COMPONENT ==================== */

/**
 * Injects sticky navigation header into #site-header
 * Features: logo, navigation links, active link highlighting, mobile menu
 */
function injectHeader() {
    const header = document.getElementById('site-header');
    if (!header) return;

    // Get current page filename for active link highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    // Build navigation links HTML
    const navLinksHTML = navLinks
        .map(link => {
            const isActive = currentPage === link.href;
            return `
        <a href="${link.href}" 
           class="nav-link ${isActive ? 'active-link text-leaf-600 font-semibold' : 'text-ink hover:text-sky-600'} 
                  transition-colors duration-300 px-3 py-2 rounded-lg hover:bg-sky-50">
          ${link.label}
        </a>
      `;
        })
        .join('');

    header.innerHTML = `
    <header class="sticky top-0 z-50 bg-white shadow-soft-md">
      <nav class="container-custom py-4">
        <div class="flex items-center justify-between">
          
          <!-- Logo -->
          <a href="index.html" class="flex items-center space-x-3 group">
            <div class="w-12 h-12 bg-brand-gradient rounded-xl flex items-center justify-center shadow-soft-sm group-hover:shadow-soft-md transition-shadow">
              <span class="text-2xl font-bold text-white">E</span>
            </div>
            <div class="hidden sm:block">
              <div class="font-heading text-xl font-bold text-ink">Eaglenest Academy</div>
              <div class="text-xs text-sky-600">Soaring to Excellence</div>
            </div>
          </a>

          <!-- Desktop Navigation -->
          <div class="hidden lg:flex items-center space-x-2">
            ${navLinksHTML}
          </div>

          <!-- CTA Button -->
          <div class="hidden lg:block">
            <a href="admission.html" 
               class="bg-leaf-500 hover:bg-leaf-600 text-white px-6 py-3 rounded-lg font-semibold 
                      shadow-soft-sm hover:shadow-soft-md transition-all duration-300 hover-lift">
              Apply Now
            </a>
          </div>

          <!-- Mobile Menu Button -->
          <button id="mobile-menu-toggle" 
                  class="lg:hidden p-2 rounded-lg hover:bg-sky-50 transition-colors"
                  aria-label="Toggle mobile menu">
            <svg class="w-6 h-6 text-ink" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path id="menu-icon" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              <path id="close-icon" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <!-- Mobile Menu Drawer -->
        <div id="mobile-menu" 
             class="hidden lg:hidden mt-4 pb-4 border-t border-sky-100 slide-down">
          <div class="flex flex-col space-y-2 mt-4">
            ${navLinks
            .map(link => {
                const isActive = currentPage === link.href;
                return `
                  <a href="${link.href}" 
                     class="nav-link ${isActive ? 'bg-leaf-50 text-leaf-600 font-semibold' : 'text-ink hover:bg-sky-50'} 
                            px-4 py-3 rounded-lg transition-colors duration-300">
                    ${link.label}
                  </a>
                `;
            })
            .join('')}
            <a href="admission.html" 
               class="bg-leaf-500 hover:bg-leaf-600 text-white px-4 py-3 rounded-lg font-semibold 
                      text-center shadow-soft-sm transition-all duration-300 mt-2">
              Apply Now
            </a>
          </div>
        </div>
      </nav>
    </header>
  `;
}

/* ==================== FOOTER COMPONENT ==================== */

/**
 * Injects comprehensive footer into #site-footer
 * Features: 4 columns - about, quick links, contact, hours & socials
 */
function injectFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer) return;

    const currentYear = new Date().getFullYear();

    footer.innerHTML = `
    <footer class="bg-ink text-white">
      <!-- Main Footer Content -->
      <div class="container-custom py-12">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <!-- Column 1: About -->
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <div class="w-10 h-10 bg-brand-gradient rounded-lg flex items-center justify-center shadow-soft-sm">
                <span class="text-xl font-bold text-white">E</span>
              </div>
              <div>
                <div class="font-heading text-lg font-bold">Eaglenest Academy</div>
                <div class="text-xs text-sky-300">Soaring to Excellence</div>
              </div>
            </div>
            <p class="text-sky-100 text-sm leading-relaxed">
              Nurturing young minds with quality education, strong values, and a commitment 
              to excellence. We prepare students for success in a dynamic world.
            </p>
            <div class="flex space-x-3">
              <a href="#" class="w-8 h-8 bg-sky-600 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" class="w-8 h-8 bg-sky-600 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors" aria-label="Twitter">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" class="w-8 h-8 bg-sky-600 hover:bg-sky-500 rounded-full flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Column 2: Quick Links -->
          <div class="space-y-4">
            <h3 class="font-heading text-lg font-bold text-white border-b border-sky-600 pb-2">Quick Links</h3>
            <ul class="space-y-2">
              ${navLinks
            .map(link => `
                  <li>
                    <a href="${link.href}" class="text-sky-100 hover:text-leaf-400 transition-colors text-sm flex items-center space-x-2">
                      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                      </svg>
                      <span>${link.label}</span>
                    </a>
                  </li>
                `)
            .join('')}
              <li>
                <a href="#" class="text-sky-100 hover:text-leaf-400 transition-colors text-sm flex items-center space-x-2">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                  </svg>
                  <span>Gallery</span>
                </a>
              </li>
            </ul>
          </div>

          <!-- Column 3: Contact Details -->
          <div class="space-y-4">
            <h3 class="font-heading text-lg font-bold text-white border-b border-sky-600 pb-2">Contact Us</h3>
            <ul class="space-y-3">
              <li class="flex items-start space-x-3 text-sm">
                <svg class="w-5 h-5 text-leaf-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span class="text-sky-100">123 Education Lane<br>Nairobi, Kenya</span>
              </li>
              <li class="flex items-center space-x-3 text-sm">
                <svg class="w-5 h-5 text-leaf-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href="tel:+254XXXXXXXXX" class="text-sky-100 hover:text-leaf-400 transition-colors">+254XXXXXXXXX</a>
              </li>
              <li class="flex items-center space-x-3 text-sm">
                <svg class="w-5 h-5 text-leaf-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <a href="mailto:info@eaglenestacademy.ac.ke" class="text-sky-100 hover:text-leaf-400 transition-colors">info@eaglenestacademy.ac.ke</a>
              </li>
            </ul>
          </div>

          <!-- Column 4: Office Hours & Additional Socials -->
          <div class="space-y-4">
            <h3 class="font-heading text-lg font-bold text-white border-b border-sky-600 pb-2">Office Hours</h3>
            <ul class="space-y-2 text-sm text-sky-100">
              <li class="flex justify-between">
                <span class="font-semibold">Monday - Friday:</span>
                <span>7:30 AM - 5:00 PM</span>
              </li>
              <li class="flex justify-between">
                <span class="font-semibold">Saturday:</span>
                <span>8:00 AM - 1:00 PM</span>
              </li>
              <li class="flex justify-between">
                <span class="font-semibold">Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            <div class="pt-4">
              <a href="admission.html" 
                 class="block bg-leaf-500 hover:bg-leaf-600 text-white text-center px-4 py-3 rounded-lg font-semibold 
                        shadow-soft-sm hover:shadow-soft-md transition-all duration-300">
                Schedule a Visit
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-sky-900">
        <div class="container-custom py-6">
          <div class="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-sky-200">
            <p>&copy; ${currentYear} Eaglenest Academy. All rights reserved.</p>
            <div class="flex space-x-6">
              <a href="#" class="hover:text-leaf-400 transition-colors">Privacy Policy</a>
              <a href="#" class="hover:text-leaf-400 transition-colors">Terms of Service</a>
              <a href="sitemap.xml" class="hover:text-leaf-400 transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
}

/* ==================== FLOATING WHATSAPP BUTTON ==================== */

/**
 * Creates a floating WhatsApp contact button
 * Positioned fixed at bottom-right with pulse animation
 */
function injectWhatsAppButton() {
    // Check if button already exists
    if (document.getElementById('whatsapp-float')) return;

    const whatsappNumber = '+254XXXXXXXXX';
    const whatsappMessage = encodeURIComponent('Hello! I would like to inquire about Eaglenest Academy.');
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    const button = document.createElement('a');
    button.id = 'whatsapp-float';
    button.href = whatsappURL;
    button.target = '_blank';
    button.rel = 'noopener noreferrer';
    button.setAttribute('aria-label', 'Chat on WhatsApp');
    button.className = 'no-print';

    button.innerHTML = `
    <div class="relative">
      <!-- Pulse animation ring -->
      <div class="absolute inset-0 bg-leaf-500 rounded-full animate-ping opacity-75"></div>
      <!-- Button -->
      <div class="relative w-14 h-14 bg-leaf-500 hover:bg-leaf-600 rounded-full shadow-soft-lg hover:shadow-soft-xl 
                  flex items-center justify-center transition-all duration-300 hover:scale-110">
        <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
    </div>
  `;

    // Add inline styles for fixed positioning
    button.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    z-index: 1000;
    cursor: pointer;
  `;

    document.body.appendChild(button);
}

/* ==================== INITIALIZATION ==================== */

/**
 * Initialize all components when DOM is ready
 */
document.addEventListener('DOMContentLoaded', function () {
    injectHeader();
    injectFooter();
    injectWhatsAppButton();
});
