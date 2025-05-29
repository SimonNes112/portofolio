class TitleComponent extends HTMLElement {
    public connectedCallback(): void {
        this.render();
    }

    public render(): void {
        this.innerHTML = `
            <h1 class="text-5xl font-bold">Simon Nes</h1>
            <h2 class="text-xl font-semibold mt-2 text-gray-100">Aspiring Full Stack Engineer</h2>
            <p class="text-base text-gray-400 mt-4">I create full-stack solutions.</p>
        `;
    }
}

// Register the custom element
customElements.define('title-component', TitleComponent);