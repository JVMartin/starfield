export class Slider {
    private readonly inputElement: HTMLInputElement;
    private readonly outputElement: HTMLElement;
    private value: number;

    constructor(name: string) {
        this.inputElement = document.getElementById(`slider-${name}`) as HTMLInputElement;
        this.inputElement.oninput = this.onInput.bind(this);

        this.outputElement = document.getElementById(`slider-${name}-output`);

        this.onInput();
    }

    private onInput(): void {
        this.value = Number(this.inputElement.value);

        this.outputElement.innerHTML = String(this.value);
    }
}
