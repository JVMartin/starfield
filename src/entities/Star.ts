import { PixiApplication } from '../services/PixiApplication';
import { Utils } from '../services/Utils';

import { Entity } from './Entity';

export class Star extends Entity {
    /**
     * The minimum velocity of a star.
     */
    private static readonly BASE_VY: number = 1.5;

    private readonly gfx: PIXI.Graphics;
    private vy: number;
    private radius: number;
    private color: 'red' | 'blue' | 'pink';
    private alpha: number;

    constructor(
        private readonly pixiApplication: PixiApplication,
        private colorize: number,
        private depth: number,
    ) {
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
        this.gfx.beginFill(PIXI.utils.rgb2hex(this.fillColor()), this.alpha);
        this.gfx.drawCircle(0, 0, this.radius);
        this.gfx.endFill();
    }

    public fillColor(): [number, number, number] {
        switch (this.color) {
            case 'red':
                return [
                    1,
                    1 - this.colorize / 100,
                    1 - this.colorize / 100,
                ];
            case 'blue':
                return [
                    1 - this.colorize / 100,
                    1 - this.colorize / 100,
                    1,
                ];
            case 'pink':
                return [
                    (1 - this.colorize / 100) * .1 + 0.9,
                    1 - this.colorize / 100,
                    1,
                ];
        }
    }

    /**
     * Randomize the aspects of the star, and re-start from the top.
     */
    public fromTheTop(): void {
        this.radius = Utils.randomFloat(1, 3);
        this.alpha = Utils.randomFloat(0.5, 1);
        this.gfx.x = Utils.randomInt(0, this.pixiApplication.width);
        this.gfx.y = -1 * Utils.randomInt(0, 100);
        this.vy = Utils.randomFloat(0, 2.5);

        switch (Utils.randomInt(0, 2)) {
            case 0:
                this.color = 'red';
                break;
            case 1:
                this.color = 'blue';
                break;
            case 2:
                this.color = 'pink';
                break;
        }
    }

    public setColorize(colorize: number): void {
        this.colorize = colorize;
        this.draw();
    }

    public setDepth(depth: number): void {
        this.depth = depth;
        this.draw();
    }

    public update(): void {
        this.gfx.y += Star.BASE_VY + (this.depth / 100) * this.vy;
        if (this.gfx.y > this.pixiApplication.height) {
            this.fromTheTop();
            this.draw();
        }
    }

    public destroy(): void {
        this.pixiApplication.application.stage.removeChild(this.gfx);
    }
}
