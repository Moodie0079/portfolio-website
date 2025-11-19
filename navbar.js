function createNavbar(isHomePage = false) {
  const navLinks = isHomePage ? 
    `<li><a href="#skills" class="hover:text-blue-600 transition">Skills</a></li>
     <li><a href="#education" class="hover:text-blue-600 transition">Education</a></li>
     <li><a href="#projects" class="hover:text-blue-600 transition">Projects</a></li>
     <li><a href="#contact" class="hover:text-blue-600 transition">Contact</a></li>` :
    `<li><a href="index.html#skills" class="hover:text-blue-600 transition">Skills</a></li>
     <li><a href="index.html#education" class="hover:text-blue-600 transition">Education</a></li>
     <li><a href="index.html#projects" class="hover:text-blue-600 transition">Projects</a></li>
     <li><a href="index.html#contact" class="hover:text-blue-600 transition">Contact</a></li>`;

  const backButton = isHomePage ? 
    `<a href="#" class="text-xl sm:text-2xl font-bold text-gray-900 min-w-0">Mahmoud</a>` :
    `<a href="index.html" class="text-gray-700 hover:text-blue-600 transition">← Back to Portfolio</a>`;

  const nameDisplay = isHomePage ? '' :
    `<span class="font-semibold text-gray-900">Mahmoud</span>`;

  return `
    <nav class="bg-white/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50 shadow-sm border-b border-gray-200">
      <div class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        ${backButton}
        
        <div class="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
          <ul class="flex gap-6 xl:gap-8 font-medium whitespace-nowrap text-gray-700">
            ${navLinks}
          </ul>
        </div>
        
        <div class="hidden lg:flex items-center gap-4">
          ${nameDisplay}
          <a href="https://github.com/Moodie0079" target="_blank" class="p-2 rounded-lg hover:bg-gray-100 transition" aria-label="GitHub">
            <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <a href="https://www.linkedin.com/in/mahmoud-shalabi-07686433b/" target="_blank" class="p-2 rounded-lg hover:bg-gray-100 transition" aria-label="LinkedIn">
            <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
            </svg>
          </a>
          <button id="emailButtonDesktop" class="p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer" aria-label="Email">
            <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </button>
        </div>
        
        ${isHomePage ? `
        <div class="lg:hidden">
          <button id="mobileMenuToggle" class="p-2 rounded-lg hover:bg-gray-100 transition" aria-label="Toggle mobile menu">
            <svg id="hamburgerIcon" class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
            <svg id="closeIcon" class="w-6 h-6 hidden text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        ` : `
        <div class="lg:hidden">
          <button onclick="window.location.href='index.html'" class="p-2 rounded-lg hover:bg-gray-100 transition" aria-label="Back to Portfolio">
            <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        `}
      </div>
      
      ${isHomePage ? `
      <div id="mobileMenu" class="lg:hidden hidden bg-white/80 backdrop-blur-md border-t border-gray-200">
        <div class="px-4 py-6 space-y-3">
          <a href="#skills" class="block py-2 hover:text-blue-600 transition mobile-nav-link text-gray-700">Skills</a>
          <a href="#education" class="block py-2 hover:text-blue-600 transition mobile-nav-link text-gray-700">Education</a>
          <a href="#projects" class="block py-2 hover:text-blue-600 transition mobile-nav-link text-gray-700">Projects</a>
          <a href="#contact" class="block py-2 hover:text-blue-600 transition mobile-nav-link text-gray-700">Contact</a>
          <div class="flex gap-4 pt-4 border-t border-gray-200">
            <a href="https://github.com/Moodie0079" target="_blank" class="p-2 rounded-lg hover:bg-gray-100 transition">
              <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mahmoud-shalabi-07686433b/" target="_blank" class="p-2 rounded-lg hover:bg-gray-100 transition">
              <svg class="w-5 h-5 text-gray-700" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clip-rule="evenodd"></path>
              </svg>
            </a>
            <button id="emailButtonMobile" class="p-2 rounded-lg hover:bg-gray-100 transition cursor-pointer">
              <svg class="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      ` : ''}
    </nav>
  `;
}

function loadNavbar(isHomePage = false) {
  const navContainer = document.getElementById('navbar-container');
  if (navContainer) {
    navContainer.innerHTML = createNavbar(isHomePage);
    
    if (isHomePage) {
      initializeMobileMenu();
    }
  }
}

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
    
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        hamburgerIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
      });
    });
  }
}
