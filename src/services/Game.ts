import { Entity } from '../entities/Entity';
import { StarField } from '../entities/StarField';
import { PixiApplication } from './PixiApplication';

export class Game {
    private entities: Entity[];

    constructor(private pixiApplication: PixiApplication) {
        this.entities = [];
    }

    public populate(): void {
        const starField = new StarField(this.pixiApplication);
        starField.createStars(250);

        this.entities.push(starField);
    }

    public run(): void {
        requestAnimationFrame(() => this.run());

        this.entities.map(entity => entity.update());
    }
}
