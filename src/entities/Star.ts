import { PixiApplication } from '../services/PixiApplication';
import { Entity } from './Entity';

export class Star extends Entity {
    private gfx: PIXI.Graphics;

    constructor(private pixiApplication: PixiApplication) {
        super();

        this.gfx = new PIXI.Graphics();
        this.gfx.beginFill(0xFFFFFF);
        this.gfx.drawRect(0, 0, 2, 2);
        this.gfx.endFill();
        this.gfx.x = 0;
        this.gfx.y = 0;

        pixiApplication.application.stage.addChild(this.gfx);
    }

    public update(): void {
        this.gfx.x += 1;
        if (this.gfx.x > this.pixiApplication.width) {
            this.gfx.x = 0;
        }
    }
}
