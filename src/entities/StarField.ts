import { PixiApplication } from '../services/PixiApplication';

import { Entity } from './Entity';
import { Star } from './Star';

export class StarField extends Entity {
    private stars: Star[];

    constructor(
        private pixiApplication: PixiApplication,
        private x: number,
        private colorize: number,
        private depth: number,
    ) {
        super();

        this.stars = [];
    }

    /**
     * Add or remove stars from our stars array until the array is
     * the desired size.
     */
    public setDesiredStarCount(n: number): void {
        if (n >= this.stars.length) {
            // Add stars to the desired number.
            const numToAdd = n - this.stars.length;
            for (let i = 0; i < numToAdd; ++i) {
                this.stars.push(new Star(this.pixiApplication, this.x, this.colorize, this.depth));
            }
        } else {
            // Remove stars to the desired number.
            const numToRemove = this.stars.length - n;
            for (let i = 0; i < numToRemove; ++i) {
                const starToRemove = this.stars.pop();
                if (starToRemove) {
                    starToRemove.destroy();
                }
            }
        }
    }

    public setX(x: number): void {
        this.x = x;
        this.stars.forEach((star: Star) => star.setX(this.x));
    }

    public setColorize(colorize: number): void {
        this.colorize = colorize;
        this.stars.forEach((star: Star) => star.setColorize(this.colorize));
    }

    public setDepth(depth: number): void {
        this.depth = depth;
        this.stars.forEach((star: Star) => star.setDepth(this.depth));
    }

    /**
     * Delegate to the star entities.
     */
    public update(): void {
        this.stars.forEach((star: Star) => star.update());
    }
}
