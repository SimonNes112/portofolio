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
                <title-component></title-component>
                <navbar-component></navbar-component>
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
              <about-component></about-component>
    
              <!-- Experience -->
              <experience-component></experience-component>
    
              <!-- Projects -->
              <projects-component></projects-component>
            </main>
          </section>
      `;
      this.backGroundAnimation();
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
}
  
  customElements.define('index-page', IndexPageComponent);
  