class ExperienceComponent extends HTMLElement {
    public connectedCallback(): void {
        this.render();
    }

    private render(): void {
        this.innerHTML = `
            <h2 class="text-2md font-bold text-gray-100 p-6">Experience</h2>
            <section id="experience" class="space-y-10">
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
                <div class="hover:bg-[#202334] p-6 rounded-xl transition">
                    <p class="text-sm text-gray-400">Sep — Feb 2022</p>
                    <h3 class="text-base font-semibold mt-2">Software engineer, Stage · Webics</h3>
                    <p class="text-sm text-gray-300 mt-2">As part of my internship, I contributed to feature development and QA automation. Improved my skills in full-stack development and team collaboration.</p>
                    <div class="flex flex-wrap gap-2 mt-3">
                        <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">Ruby on Rails</span>
                        <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">MySQL</span>
                        <span class="bg-teal-800 text-white text-xs px-2 py-1 rounded-full">React</span>
                    </div>
                </div>
            </section>
        `;
    }
}
// Register the custom element
customElements.define('experience-component', ExperienceComponent);