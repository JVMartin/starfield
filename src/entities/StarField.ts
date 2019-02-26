import { PixiApplication } from '../services/PixiApplication';

import { Entity } from './Entity';
import { Star } from './Star';

export class StarField extends Entity {
    private stars: Star[];

    constructor(private pixiApplication: PixiApplication, private colorize: number) {
        super();

        this.stars = [];
    }

    /**
     * Add or remove stars from our stars array until the array is
     * the desired size.
     */
    public setDesiredStarCount(n: number): void {
        if (n >= this.stars.length) {
            const numToAdd: number = n - this.stars.length;
            for (let i: number = 0; i < numToAdd; ++i) {
                this.stars.push(new Star(this.pixiApplication, this.colorize));
            }
        } else {
            const numToRemove: number = this.stars.length - n;
            for (let i: number = 0; i < numToRemove; ++i) {
                const starToRemove: Star = this.stars.pop();
                starToRemove.destroy();
            }
        }
    }

    public setColorize(colorize: number): void {
        this.colorize = colorize;
        this.stars.forEach((star: Star) => star.setColorize(this.colorize));
    }

    /**
     * Delegate to the star entities.
     */
    public update(): void {
        this.stars.forEach((star: Star) => star.update());
    }
}
