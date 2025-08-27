// Shared Navbar Component
function createNavbar(isHomePage = false) {
  const navLinks = isHomePage ? 
    `<li><a href="#projects" class="hover:text-blue-600 transition">Projects</a></li>
     <li><a href="#skills" class="hover:text-blue-600 transition">Skills</a></li>
     <li><a href="#contact" class="hover:text-blue-600 transition">Contact</a></li>` :
    `<li><a href="index.html#projects" class="hover:text-blue-600 transition">Projects</a></li>
     <li><a href="index.html#skills" class="hover:text-blue-600 transition">Skills</a></li>
     <li><a href="index.html#contact" class="hover:text-blue-600 transition">Contact</a></li>`;

  const backButton = isHomePage ? 
    `<a href="#" class="text-xl sm:text-2xl font-bold text-gray-900 min-w-0">Mahmoud&nbsp;Shalabi</a>` :
    `<a href="index.html" class="text-gray-700 hover:text-blue-600 transition">← Back to Portfolio</a>`;

  const nameDisplay = isHomePage ? '' :
    `<span class="font-semibold">Mahmoud&nbsp;Shalabi</span>`;

  return `
    <nav class="bg-white/80 backdrop-blur sticky top-0 z-50 shadow-sm">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        ${backButton}
        
        <!-- Desktop Navigation - Centered -->
        <div class="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <ul class="flex gap-8 font-medium whitespace-nowrap">
            ${navLinks}
          </ul>
        </div>
        
        <!-- Desktop Actions -->
        <div class="hidden md:flex items-center gap-4">
          ${nameDisplay}
          <a href="https://www.linkedin.com/in/mahmoud-shalabi-07686433b/" target="_blank" class="px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition flex items-center gap-1">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
            </svg>
            LinkedIn
          </a>
        </div>
        
        ${isHomePage ? `
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button id="mobileMenuToggle" class="p-2 rounded-lg hover:bg-gray-100 transition" aria-label="Toggle mobile menu">
            <svg id="hamburgerIcon" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg id="closeIcon" class="w-6 h-6 hidden" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        ` : `
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button onclick="window.location.href='index.html'" class="p-2 rounded-lg hover:bg-gray-100 transition" aria-label="Back to Portfolio">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        `}
      </div>
      
      ${isHomePage ? `
      <!-- Mobile Navigation Menu -->
      <div id="mobileMenu" class="md:hidden hidden bg-white/95 backdrop-blur border-t border-gray-200">
        <div class="px-4 py-6 space-y-4">
          <a href="#projects" class="block py-2 hover:text-blue-600 transition mobile-nav-link">Projects</a>
          <a href="#skills" class="block py-2 hover:text-blue-600 transition mobile-nav-link">Skills</a>
          <a href="#contact" class="block py-2 hover:text-blue-600 transition mobile-nav-link">Contact</a>
          <a href="https://www.linkedin.com/in/mahmoud-shalabi-07686433b/" target="_blank" class="inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition mt-4">
            <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
            </svg>
            LinkedIn
          </a>
        </div>
      </div>
      ` : ''}
    </nav>
  `;
}

// Load navbar when page loads
function loadNavbar(isHomePage = false) {
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) {
    navContainer.innerHTML = createNavbar(isHomePage);
    
    // Initialize mobile menu functionality for home page
    if (isHomePage) {
      initializeMobileMenu();
    }
  }
}

// Mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeIcon = document.getElementById('closeIcon');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  
  if (mobileMenuToggle && mobileMenu) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      hamburgerIcon.classList.toggle('hidden');
      closeIcon.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on nav links
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }
}
