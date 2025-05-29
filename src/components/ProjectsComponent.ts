class ProjectsComponent extends HTMLElement {
    public connectedCallback(): void {
        this.render();
    }

    private render(): void {
        this.innerHTML = `
            <h2 class="text-2md font-bold text-gray-100 p-6">Projects</h2>
            <section id="projects" class="space-y-10">
                <div class="space-y-4">
                    <a href="#" class="block p-6 rounded-xl shadow-md hover:bg-[#202334] transition">
                    <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <!-- Image -->
                        <img src="../images/StalDeLageNes.png" alt="Portfolio Preview" class="w-full sm:w-56 rounded-lg object-cover">

                        <!-- Content -->
                        <div class="flex-1">
                        <h3 class="text-teal-400 text-lg font-semibold flex items-center gap-1">
                            Stal De Lage Nes
                            <i class="fas fa-arrow-up-right-from-square text-sm"></i>
                        </h3>
                        <p class="text-gray-400 text-sm mt-2">A website for a boarding stable that showcases their services, horses, and contact information.</p>
                        <div class="flex flex-wrap gap-2 mt-3">
                            <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">TypeScript</span>
                            <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">Tailwind CSS</span>
                        </div>
                        </div>
                    </div>
                    </a>
                </div>
            </section>
        `;
    }
}
// Register the custom element
customElements.define('projects-component', ProjectsComponent);