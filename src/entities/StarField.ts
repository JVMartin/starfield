import { PixiApplication } from '../services/PixiApplication';

import { Entity } from './Entity';
import { Star } from './Star';

export class StarField extends Entity {
    private stars: Star[];

    constructor(private pixiApplication: PixiApplication) {
        super();
    }

    public createStars(n: number): void {
        this.stars = [];

        for (let i = 0; i < n; ++i) {
            this.stars.push(new Star(this.pixiApplication));
        }
    }

    public update(): void {
        this.stars.map(star => star.update());
    }
}
