class IndexPageComponent extends HTMLElement {
    public connectedCallback(): void {
      this.render();
    }
  
    private render(): void {
      this.innerHTML = `
        <section class="text-white min-h-screen flex flex-col md:flex-row md:gap-80 items-start max-w-screen-lg mx-auto">
          <!-- Sidebar -->
          <aside class="w-full md:w-[55%] md:h-screen md:sticky md:top-0 flex flex-col justify-between px-6 pt-20">
            <div>
              <h1 class="text-5xl font-bold">Simon Nes</h1>
              <h2 class="text-xl font-semibold mt-2 text-gray-100">Aspiring Full Stack Engineer</h2>
              <p class="text-base text-gray-400 mt-4">I build end-to-end applications.</p>
  
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
            </div>
  
            <div class="flex gap-6 text-gray-500 text-xl mt-6">
              <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
              <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
              <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
            </div>
          </aside>
  
          <!-- Content rechts -->
          <main class="w-full md:w-[75%] flex flex-col gap-24 px-6 pt-20">
            <!-- About -->
            <section id="about" class="space-y-5 text-gray-300 text-md leading-relaxed">
              <p>I am a motivated and eager software developer in training, holding a completed MBO qualification in Software Engineering (ROC Horizon College) and currently pursuing a Bachelor’s in ICT at the Amsterdam University of Applied Sciences (HvA). My passion is full-stack development, and I have hands-on experience with TypeScript, React Native, Docker, Ruby on Rails, PHP, Laravel, and MySQL.</p>
              <p>During my internships and part-time roles as a software engineer, I learned what it’s like to work in real development teams, participate in code reviews, and leverage modern development tools and workflows. For example, at Webics I contributed to both mobile applications and backend services.</p>
              <p>I’m always looking for ways to improve whether by learning new technologies or collaborating with colleagues on challenging projects. My goal is to grow into a reliable and skilled full-stack developer.</p>
            </section>
  
            <!-- Experience -->
            <section id="experience" class="space-y-12">
              <div>
                <p class="text-sm text-gray-400">2022 — 2024</p>
                <h3 class="text-base font-semibold mt-2">Software engineer, Part-time · Webics</h3>
                <p class="text-sm text-gray-300 mt-2">Worked on production-ready backend services and mobile applications. Gained experience in agile development, version control, and developer collaboration.</p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">Ruby on Rails</span>
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">MySQL</span>
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">React</span>
                </div>
              </div>
  
              <div>
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
            <section id="projects" class="space-y-12">
              <div>
                <p class="text-sm text-gray-400">2023</p>
                <h3 class="text-base font-semibold mt-2">Portfolio website</h3>
                <p class="text-sm text-gray-300 mt-2">This portfolio website showcases my skills and projects. It is built with TypeScript, React, and Tailwind CSS.</p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">TypeScript</span>
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">React</span>
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">Tailwind CSS</span>
                </div>
              </div>
  
              <div>
                <p class="text-sm text-gray-400">2023</p>
                <h3 class="text-base font-semibold mt-2">Todo app</h3>
                <p class="text-sm text-gray-300 mt-2">A simple todo application built with React and TypeScript. It allows users to add, edit, and delete tasks.</p>
                <div class="flex flex-wrap gap-2 mt-3">
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">TypeScript</span>
                  <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">React</span>
                </div>
              </div>
            </section>
          </main>
        </section>
      `;
      console.log('IndexPageComponent initialized');
    }
  }
  
  customElements.define('index-page', IndexPageComponent);
  