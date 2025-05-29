class ProjectsComponent extends HTMLElement {
    public connectedCallback(): void {
        this.render();
    }

    private render(): void {
        this.innerHTML = `
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
        `;
    }
}
// Register the custom element
customElements.define('projects-component', ProjectsComponent);