import * as PIXI from 'pixi.js';

export class PixiApplication {
    public readonly application: PIXI.Application;

    constructor(
        public readonly width: number,
        public readonly height: number,
    ) {
        this.application = new PIXI.Application({
            width,
            height,
        });
    }

    /**
     * Replace the Pixi application into the DOM.
     * Enables hot-reloading.
     */
    public replaceInDOM(): void {
        const gameElement = document.getElementById('game');
        if (!gameElement) {
            throw new Error('Could not find #game element in DOM.');
        }
        gameElement.innerHTML = '';
        gameElement.appendChild(this.application.view);
    }
}
