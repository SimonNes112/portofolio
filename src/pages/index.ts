class IndexPageComponent extends HTMLElement {
    public connectedCallback(): void {
      this.render();
    }
  
    private render(): void {
      this.innerHTML = `
        <section class="min-h-screen bg-[#0f111a] text-white px-8 pt-24 pb-8 flex flex-col justify-between">
          <div class="max-w-screen-xl mx-auto grid md:grid-cols-2 gap-12">
            <!-- Linkerzijde -->
            <div class="flex flex-col justify-start space-y-6">
              <div>
                <h1 class="text-4xl sm:text-5xl font-bold">Simon Nes</h1>
                <h2 class="text-xl sm:text-2xl font-semibold mt-2 text-gray-100">Aspiring Full Stack Engineer</h2>
                <p class="text-base sm:text-lg text-gray-400 mt-4">I build end-to-end applications.</p>
              </div>
  
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
  
            <!-- Rechterzijde (About Me) -->
            <div class="space-y-5 text-gray-300 text-sm leading-relaxed">
              <p>I am a motivated and eager software developer in training, holding a completed MBO qualification in Software Engineering (ROC Horizon College) and currently pursuing a Bachelor’s in ICT at the Amsterdam University of Applied Sciences (HvA). My passion is full-stack development, and I have hands-on experience with TypeScript, React Native, Docker, Ruby on Rails, PHP, Laravel, and MySQL.</p>
              <p>During my internships and part-time roles as a software engineer, I learned what it’s like to work in real development teams, participate in code reviews, and leverage modern development tools and workflows. For example, at Webics I contributed to both mobile applications and backend services.</p>
              <p>I’m always looking for ways to improve whether by learning new technologies or collaborating with colleagues on challenging projects. My goal is to grow into a reliable and skilled full-stack developer.</p>
            </div>
          </div>
  
          <!-- Footer social icons -->
          <div class="w-full flex justify-start items-center gap-6 mt-16 text-gray-500 text-xl px-2 sm:px-0 max-w-screen-xl mx-auto">
            <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </section>
      `;
      console.log('IndexPageComponent initialized');
    }
  }
  
  window.customElements.define('index-page', IndexPageComponent);
  