import { PixiApplication } from '../services/PixiApplication';
import { Utils } from '../services/Utils';

import { Entity } from './Entity';

export class Star extends Entity {
    private readonly gfx: PIXI.Graphics;
    private vy: number;
    private radius: number;
    private color: 'red' | 'blue';
    private alpha: number;

    constructor(private readonly pixiApplication: PixiApplication, private colorize: number) {
        super();

        this.gfx = new PIXI.Graphics();
        this.fromTheTop();
        this.gfx.y = Utils.randomInt(0, this.pixiApplication.height);
        this.draw();

        pixiApplication.application.stage.addChild(this.gfx);
    }

    /**
     * Clear and re-draw the star.
     */
    public draw(): void {
        this.gfx.clear();
        if (this.color === 'red') {
            this.gfx.beginFill(PIXI.utils.rgb2hex([
                1,
                1 - (this.colorize / 100),
                1 - (this.colorize / 100),
            ]), this.alpha);
        } else {
            this.gfx.beginFill(PIXI.utils.rgb2hex([
                1 - (this.colorize / 100),
                1 - (this.colorize / 100),
                1,
            ]), this.alpha);
        }
        this.gfx.drawCircle(0, 0, this.radius);
        this.gfx.endFill();
    }

    /**
     * Randomize the aspects of the star, and re-start from the top.
     */
    public fromTheTop(): void {
        this.radius = Utils.randomInt(1, 3);
        this.alpha = Utils.randomFloat(0.5, 1);
        this.gfx.x = Utils.randomInt(0, this.pixiApplication.width);
        this.gfx.y = -1 * Utils.randomInt(0, 100);
        this.vy = Utils.randomFloat(0.5, 3);

        // Flip a coin for a red or blue star
        if (Utils.randomInt(0, 1) === 0) {
            this.color = 'red';
        } else {
            this.color = 'blue';
        }
    }

    public setColorize(colorize: number): void {
        this.colorize = colorize;
        this.draw();
    }

    public update(): void {
        this.gfx.y += this.vy;
        if (this.gfx.y > this.pixiApplication.height) {
            this.fromTheTop();
            this.draw();
        }
    }

    public destroy(): void {
        this.pixiApplication.application.stage.removeChild(this.gfx);
    }
}
