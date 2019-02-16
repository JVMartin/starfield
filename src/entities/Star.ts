import { PixiApplication } from '../services/PixiApplication';
import { Entity } from './Entity';
import { Utils } from '../services/Utils';

export class Star extends Entity {
    private gfx: PIXI.Graphics;
    private vy: number;

    constructor(private pixiApplication: PixiApplication) {
        super();

        this.gfx = new PIXI.Graphics();
        this.gfx.beginFill(0xFFFFFF);
        this.gfx.drawRect(0, 0, 2, 2);
        this.gfx.endFill();
        this.gfx.x = Utils.randomInt(0, this.pixiApplication.width);
        this.gfx.y = Utils.randomInt(0, this.pixiApplication.height);

        this.vy = Utils.randomFloat(0, 2.5);

        pixiApplication.application.stage.addChild(this.gfx);
    }

    public update(): void {
        this.gfx.y += this.vy;
        if (this.gfx.y > this.pixiApplication.height) {
            this.gfx.y = 0;
        }
    }
}
