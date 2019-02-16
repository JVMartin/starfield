import { PixiApplication } from '../services/PixiApplication';
import { Star } from './Star';
import { Entity } from './Entity';

export class StarField extends Entity {
    private stars: Star[];

    constructor(private pixiApplication: PixiApplication) {
        super();

        this.stars = [];
        this.stars.push(
            new Star(this.pixiApplication),
        );
    }

    public update(): void {
        this.stars.map(star => star.update());
    }
}
