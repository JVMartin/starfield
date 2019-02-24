import { Entity } from '../entities/Entity';
import { StarField } from '../entities/StarField';

import { PixiApplication } from './PixiApplication';

export class Game {
    private readonly entities: Entity[];

    constructor(private readonly pixiApplication: PixiApplication) {
        this.entities = [];
    }

    public populate(): void {
        const starField: StarField = new StarField(this.pixiApplication);
        starField.createStars(250);

        this.entities.push(starField);
    }

    public run(): void {
        requestAnimationFrame(() => this.run());

        this.entities.forEach((entity: Entity) => entity.update());
    }
}
