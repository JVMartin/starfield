import { PixiApplication } from '../services/PixiApplication';
import { Entity } from './Entity';
import { Utils } from '../services/Utils';

export class Star extends Entity {
    private gfx: PIXI.Graphics;
    private vy: number;

    constructor(private pixiApplication: PixiApplication) {
        super();


        this.gfx = new PIXI.Graphics();
        this.reset();
        this.gfx.y = Utils.randomInt(0, this.pixiApplication.height);

        pixiApplication.application.stage.addChild(this.gfx);
    }

    /**
     * Same as in constructor, except start from the top of the screen (y=0).
     */
    public reset(): void {
        const size = Utils.randomInt(1, 3);
        this.gfx.beginFill(0xFFFFFF, Utils.randomFloat(0.5, 1));
        this.gfx.drawCircle(0, 0, size);
        this.gfx.endFill();
        this.gfx.x = Utils.randomInt(0, this.pixiApplication.width);
        this.gfx.y = 0;

        this.vy = Utils.randomFloat(0.5, 3);
    }

    public update(): void {
        this.gfx.y += this.vy;
        if (this.gfx.y > this.pixiApplication.height) {
            this.gfx.y = 0;
        }
    }
}
