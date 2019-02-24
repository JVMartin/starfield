export class Slider {
    /**
     * The slider element itself.
     */
    private readonly inputElement: HTMLInputElement;

    /**
     * The <span> outputting the value to show the user.
     */
    private readonly outputElement: HTMLElement;

    private value: number;

    /**
     * An array of callbacks to run when onInput() is called.
     */
    private readonly callbacks: Array<(value: number) => void>;

    constructor(name: string) {
        this.inputElement = document.getElementById(`slider-${name}`) as HTMLInputElement;
        this.inputElement.oninput = this.onInput.bind(this);

        this.outputElement = document.getElementById(`slider-${name}-output`);

        this.callbacks = [];

        this.onInput();
    }

    public addCallback(callback: (value: number) => void): void {
        this.callbacks.push(callback);
    }

    public getValue(): number {
        return this.value;
    }

    private onInput(): void {
        this.value = Number(this.inputElement.value);

        this.outputElement.innerHTML = String(this.value);

        for (const callback of this.callbacks) {
            callback(this.value);
        }
    }
}
