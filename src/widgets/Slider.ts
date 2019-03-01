export class Slider {
    /**
     * The slider element itself.
     */
    private readonly inputElement: HTMLInputElement;

    /**
     * The <span> outputting the value to show the user.
     */
    private readonly outputElement: HTMLElement;

    /**
     * Initialized in .onInput() called from constructor
     */
    private value!: number;

    /**
     * An array of callbacks to run when onInput() is called.
     */
    private callback: (value: number) => void;

    constructor(name: string) {
        const inputElement = document.getElementById(`slider-${name}`);
        if (!inputElement) {
            throw new Error(`Could not find slider input element: #slider-${name}`);
        }
        this.inputElement = inputElement as HTMLInputElement;
        this.inputElement.oninput = this.onInput.bind(this);

        const outputElement = document.getElementById(`slider-${name}-output`);
        if (!outputElement) {
            throw new Error(`Could not find slider output element: #slider-${name}`);
        }
        this.outputElement = outputElement;

        this.callback = (): void => { return; };

        this.onInput();
    }

    public setCallback(callback: (value: number) => void): void {
        this.callback = callback;
    }

    public getValue(): number {
        return this.value;
    }

    private onInput(): void {
        this.value = Number(this.inputElement.value);

        this.outputElement.innerHTML = String(this.value);

        this.callback(this.value);
    }
}
