class IndexPageComponent extends HTMLElement {
    public connectedCallback(): void {
        this.render();
    }

    private render(): void {
        this.innerHTML = `
            <section class="min-h-screen bg-[#0f111a] text-white flex items-center px-8">
                <div class="max-w-screen-xl w-full mx-auto grid md:grid-cols-2 gap-12">
                    <!-- Linkerzijde -->
                    <div class="space-y-6">
                        <h1 class="text-5xl font-bold">Simon Nes</h1>
                        <h2 class="text-2xl font-semibold">Aspiring Full Stack Engineer</h2>
                        <p class="text-lg text-gray-300">I build end-to-end applications.</p>

                        <nav class="space-y-4 mt-8">
                            <div class="flex items-center gap-4">
                                <span class="w-12 h-px bg-gray-500"></span>
                                <a href="#about" class="font-semibold">About</a>
                            </div>
                            <div class="flex items-center gap-4">
                                <span class="w-12 h-px bg-gray-500"></span>
                                <a href="#experience" class="font-semibold">Experience</a>
                            </div>
                            <div class="flex items-center gap-4">
                                <span class="w-12 h-px bg-gray-500"></span>
                                <a href="#projects" class="font-semibold">Projects</a>
                            </div>
                        </nav>

                        <div class="flex items-center gap-6 mt-12 text-gray-400 text-2xl">
                            <a href="#" aria-label="GitHub"><i class="fab fa-github"></i></a>
                            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>

                    <!-- Rechterzijde (About Me) -->
                    <div class="space-y-4 text-gray-300 text-sm leading-relaxed">
                        <p>I am a motivated and eager software developer in training, holding a completed MBO qualification in Software Engineering (ROC Horizon College) and currently pursuing a Bachelor’s in ICT at the Amsterdam University of Applied Sciences (HvA). My passion is full-stack development, and I have hands-on experience with TypeScript, React Native, Docker, Ruby on Rails, PHP, Laravel, and MySQL.</p>
                        <p>During my internships and part-time roles as a software engineer, I learned what it’s like to work in real development teams, participate in code reviews, and leverage modern development tools and workflows. For example, at Webics I contributed to both mobile applications and backend services.</p>
                        <p>I’m always looking for ways to improve whether by learning new technologies or collaborating with colleagues on challenging projects. My goal is to grow into a reliable and skilled full-stack developer.</p>
                    </div>
                </div>
            </section>
        `;
        console.log('IndexPageComponent initialized');
    }
}

window.customElements.define('index-page', IndexPageComponent);
