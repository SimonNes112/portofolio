class NavbarComponent extends HTMLElement {
    public connectedCallback(): void {
        this.render();
    }

    public render(): void {
        this.innerHTML = `
            <nav class="space-y-4 mt-10 text-gray-300 text-sm">
                <div class="flex items-center gap-4">
                  <span class="w-10 h-px bg-gray-500"></span>
                  <a href="#about" class="font-medium tracking-wide">ABOUT</a>
                </div>
                <div class="flex items-center gap-4">
                  <span class="w-10 h-px bg-gray-500"></span>
                  <a href="#experience" class="font-medium tracking-wide">EXPERIENCE</a>
                </div>
                <div class="flex items-center gap-4">
                  <span class="w-10 h-px bg-gray-500"></span>
                  <a href="#projects" class="font-medium tracking-wide">PROJECTS</a>
                </div>
            </nav>
        `;
        
        this.navbarTrackScroll();
    }

    private navbarTrackScroll(): void {
        // Track scroll position and update navbar styles
        window.addEventListener('scroll', () => {
          const scrollY = window.scrollY;
          const aboutSection: HTMLElement | null = document.getElementById('about');
          const aboutSectionTop = aboutSection ? aboutSection.offsetTop : 0;
          const experienceSectionTop = document.getElementById('experience')?.offsetTop || 0;
          const projectsSectionTop = document.getElementById('projects')?.offsetTop || 0;
  
          // Adjust visibility logic
          const isAboutVisible = scrollY === 0 || (scrollY >= aboutSectionTop && scrollY < experienceSectionTop);
          const isExperienceVisible = scrollY >= experienceSectionTop && scrollY < projectsSectionTop;
          const isProjectsVisible = scrollY >= projectsSectionTop;
  
          const links = document.querySelectorAll('nav a');
          links.forEach(link => {
            link.classList.remove('text-teal-400', 'font-semibold');
            link.classList.add('text-gray-300', 'font-normal');
          });
  
          if (isAboutVisible) {
            const aboutLink = document.querySelector('nav a[href="#about"]');
            if (aboutLink) {
              aboutLink.classList.add('text-teal-400', 'font-semibold');
              aboutLink.classList.remove('text-gray-300', 'font-normal');
            }
          } else if (isExperienceVisible) {
            const experienceLink = document.querySelector('nav a[href="#experience"]');
            if (experienceLink) {
              experienceLink.classList.add('text-teal-400', 'font-semibold');
              experienceLink.classList.remove('text-gray-300', 'font-normal');
            }
          } else if (isProjectsVisible) {
            const projectsLink = document.querySelector('nav a[href="#projects"]');
            if (projectsLink) {
              projectsLink.classList.add('text-teal-400', 'font-semibold');
              projectsLink.classList.remove('text-gray-300', 'font-normal');
            }
          }
        });
    
        // Ensure "About" is active on page load
        window.dispatchEvent(new Event('scroll'));
    }
}
// Register the custom element
customElements.define('navbar-component', NavbarComponent);