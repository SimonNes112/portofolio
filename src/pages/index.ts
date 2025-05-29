class IndexPageComponent extends HTMLElement {
  public connectedCallback(): void {
    this.render();
  }
  
    private render(): void {
      this.innerHTML = `
          <section class="text-white min-h-screen flex flex-col md:flex-row items-start max-w-screen-xl mx-auto" id="background">
            <!-- Sidebar -->
            <aside class="w-full md:w-[45%] md:h-screen md:sticky md:top-0 flex flex-col px-6 pt-20 pb-10">
              <div class="p-6">
                <title-component></title-component>
                <navbar-component></navbar-component>
              </div>
    
              <div class="flex gap-6 text-gray-500 text-xl mt-20 p-6">
                <a href="https://github.com/SimonNes112" aria-label="GitHub"><i class="fab fa-github"></i></a>
                <a href="https://www.linkedin.com/in/simonnes/" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                <a href="mailto:sgjnes@icloud.com" aria-label="Email"><i class="fas fa-envelope"></i></a>
              </div>
            </aside>
    
            <!-- Content rechts -->
            <main class="w-full md:w-[55%] flex flex-col gap-24 px-6 pt-20 mb-6">
              <!-- About -->
              <about-component></about-component>

              <!-- Experience -->
              <experience-component></experience-component>
    
              <!-- Projects -->
              <projects-component></projects-component>

              <!-- Credits -->
              <div class="text-center text-sm text-gray-500 mt-12">
                <p>Designed in Figma and coded in Visual Studio Code by Simon Nes.</p>
                <p>Built with <a href="https://nextjs.org/" class="text-blue-500 hover:underline">Next.js</a> and <a href="https://tailwindcss.com/" class="text-blue-500 hover:underline">Tailwind CSS</a>, deployed with <a href="https://vercel.com/" class="text-blue-500 hover:underline">Vercel</a>.</p>
              </div>
            </main>
          </section>
      `;
      this.backGroundAnimation();
      console.log('IndexPageComponent initialized');
    }

    private backGroundAnimation(): void {
      document.addEventListener('mousemove', (event) => {
          const x = event.clientX + window.scrollX;
          const y = event.clientY + window.scrollY;
          const cursor = `${x}px ${y}px`;
          const background: HTMLElement | null = document.getElementById('app');
  
          if (background) {
              background.style.backgroundImage = `radial-gradient(circle at ${cursor}, rgba(173, 216, 230, 0.2) 1%, transparent 40%)`;
          }
      });
    }
}
  
  customElements.define('index-page', IndexPageComponent);
  