class AboutComponent extends HTMLElement {
    public connectedCallback(): void {
        this.render();
    }

    public render(): void {
        this.innerHTML = `
            <section id="about" class="space-y-5 text-gray-300 text-md leading-relaxed p-6">
                <p>I am a motivated and eager software developer in training, holding a completed MBO qualification in Software Engineering (ROC Horizon College) and currently pursuing a Bachelor’s in ICT at the Amsterdam University of Applied Sciences (HvA). My passion is full-stack development, and I have hands-on experience with TypeScript, React Native, Docker, Ruby on Rails, PHP, Laravel, and MySQL.</p>
                <p>During my internships and part-time roles as a software engineer, I learned what it’s like to work in real development teams, participate in code reviews, and leverage modern development tools and workflows. For example, at Webics I contributed to both mobile applications and backend services.</p>
                <p>I’m always looking for ways to improve whether by learning new technologies or collaborating with colleagues on challenging projects. My goal is to grow into a reliable and skilled full-stack developer.</p>
            </section>
        `;
    }
}
// Register the custom element
customElements.define('about-component', AboutComponent);