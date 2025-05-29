class IndexPageComponent extends HTMLElement {
    public connectedCallback(): void {
      this.render();
    }
  
    private render(): void {
      this.innerHTML = `
        <section class="text-white min-h-screen flex flex-col md:flex-row items-start max-w-screen-xl mx-auto" id="background">
          <!-- Sidebar -->
          <aside class="w-full md:w-[45%] md:h-screen md:sticky md:top-0 flex flex-col px-6 pt-20 pb-10">
            <div>
              <h1 class="text-5xl font-bold">Simon Nes</h1>
              <h2 class="text-xl font-semibold mt-2 text-gray-100">Aspiring Full Stack Engineer</h2>
              <p class="text-base text-gray-400 mt-4">I create full-stack solutions.</p>
  
              <nav class="space-y-4 mt-10 text-gray-300 text-sm">
                <div class="flex items-center gap-4">
                  <span class="w-10 h-px bg-gray-500"></span>
                  <a href="#about" class="font-medium tracking-wide text-teal-400 hover:text-teal-300 transition-colors">ABOUT</a>
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
            </div>
  
            <div class="flex gap-6 text-gray-500 text-xl mt-20">
              <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            </div>
          </aside>
  
          <!-- Content rechts -->
          <main class="w-full md:w-[55%] flex flex-col gap-24 px-6 pt-20">
            <!-- About -->
            <section id="about" class="space-y-5 text-gray-300 text-md leading-relaxed p-6">
              <p>I am a motivated and eager software developer in training, holding a completed MBO qualification in Software Engineering (ROC Horizon College) and currently pursuing a Bachelor’s in ICT at the Amsterdam University of Applied Sciences (HvA). My passion is full-stack development, and I have hands-on experience with TypeScript, React Native, Docker, Ruby on Rails, PHP, Laravel, and MySQL.</p>
              <p>During my internships and part-time roles as a software engineer, I learned what it’s like to work in real development teams, participate in code reviews, and leverage modern development tools and workflows. For example, at Webics I contributed to both mobile applications and backend services.</p>
              <p>I’m always looking for ways to improve whether by learning new technologies or collaborating with colleagues on challenging projects. My goal is to grow into a reliable and skilled full-stack developer.</p>
            </section>
  
            <!-- Experience -->
            <section id="experience" class="space-y-12">
              <div class="hover:bg-[#202334] p-6 rounded-xl transition">
                <p class="text-sm text-gray-400">2022 — 2024</p>
                <h3 class="text-base font-semibold mt-2">Software engineer, Part-time · Webics</h3>
                <p class="text-sm text-gray-300 mt-2">Worked on production-ready backend services and mobile applications. Gained experience in agile development, version control, and developer collaboration.</p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">Ruby on Rails</span>
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">MySQL</span>
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">React</span>
                </div>
              </div>
  
              <div class="hover:bg-[#202334] p-6 rounded-xl transition">
                <p class="text-sm text-gray-400">Feb — July 2024</p>
                <h3 class="text-base font-semibold mt-2">Software engineer, Stage · Webics</h3>
                <p class="text-sm text-gray-300 mt-2">As part of my internship, I contributed to feature development and QA automation. Improved my skills in full-stack development and team collaboration.</p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">Ruby on Rails</span>
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">MySQL</span>
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">React</span>
                </div>
              </div>
            </section>
  
            <!-- Projects -->
            <section id="projects" class="space-y-10">
            <div class="space-y-4">
                <a href="#" class="block p-6 rounded-xl shadow-md hover:bg-[#202334] transition">
                <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <!-- Image (optioneel) -->
                    <img src="/images/portfolio-preview.png" alt="Portfolio Preview" class="w-full sm:w-56 rounded-lg object-cover">

                    <!-- Content -->
                    <div class="flex-1">
                    <h3 class="text-teal-400 text-lg font-semibold flex items-center gap-1">
                        Portfolio Website
                        <i class="fas fa-arrow-up-right-from-square text-sm"></i>
                    </h3>
                    <p class="text-gray-400 text-sm mt-2">A personal portfolio to showcase my projects and skills, built with TypeScript, React, and Tailwind CSS.</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">TypeScript</span>
                        <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">React</span>
                        <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">Tailwind CSS</span>
                    </div>
                    </div>
                </div>
                </a>
            </div>

            <div class="space-y-4">
                <a href="#" class="block bg-[#1a1d2e] p-6 rounded-xl shadow-md hover:bg-[#202334] transition">
                <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                    <!-- Image (optioneel) -->
                    <img src="/images/todo-preview.png" alt="Todo App Preview" class="w-full sm:w-56 rounded-lg object-cover">

                    <!-- Content -->
                    <div class="flex-1">
                    <h3 class="text-teal-400 text-lg font-semibold flex items-center gap-1">
                        Todo App
                        <i class="fas fa-arrow-up-right-from-square text-sm"></i>
                    </h3>
                    <p class="text-gray-400 text-sm mt-2">A simple task manager to create, update and delete todos, made with React and TypeScript.</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">TypeScript</span>
                        <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">React</span>
                    </div>
                    </div>
                </div>
                </a>
            </div>
            </section>

          </main>
        </section>
      `;
        this.backGroundAnimation();
        this.navbarTrackScroll();
        console.log('IndexPageComponent initialized');
    }

    private backGroundAnimation(): void {
        // get user cursor position
        document.addEventListener('mousemove', (event) => {
            const x = event.clientX;
            const y = event.clientY;
            const cursor = `${x}px ${y}px`;
            const background: HTMLElement | null = document.getElementById('app');

            
            // make animation effect that sits on top of the background
            if (background) {
                background.style.backgroundImage = `radial-gradient(circle at ${cursor}, rgba(255, 255, 255, 0.2) 1%, transparent 40%)`;
            }

        });
    }

    private navbarTrackScroll(): void {
        // Track scroll position and update navbar styles
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const navbar: HTMLElement | null = document.querySelector('nav');
            const aboutSection: HTMLElement | null = document.getElementById('about');
            const aboutSectionTop = aboutSection ? aboutSection.offsetTop : 0;
            const aboutSectionHeight = aboutSection ? aboutSection.offsetHeight : 0;
            const experienceSectionTop = document.getElementById('experience')?.offsetTop || 0;
            const projectsSectionTop = document.getElementById('projects')?.offsetTop || 0;
            const isAboutVisible = scrollY === 0 || (scrollY >= aboutSectionTop && scrollY < experienceSectionTop);
            const isExperienceVisible = scrollY >= experienceSectionTop && scrollY < projectsSectionTop;
            const isProjectsVisible = scrollY >= projectsSectionTop;
    
            const links = document.querySelectorAll('nav a');
            links.forEach(link => {
                link.classList.remove('text-teal-400', 'font-semibold');
                link.classList.add('text-gray-300', 'font-normal');
            });
            if (isAboutVisible) {
                // const aboutLink = document.querySelector('nav a[href="#about"]');
                // if (aboutLink) {
                //     aboutLink.classList.add('text-teal-400', 'font-semibold');
                //     aboutLink.classList.remove('text-gray-300', 'font-normal');
                // }
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
    }

}
  
  customElements.define('index-page', IndexPageComponent);
  