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

    public inject(): void {
        const gameElement = document.getElementById('game');
        gameElement.innerHTML = '';
        gameElement.appendChild(this.application.view);
    }
}
