import { Entity } from '../entities/Entity';
import { StarField } from '../entities/StarField';
import { Slider } from '../widgets/Slider';

import { PixiApplication } from './PixiApplication';

export class Game {
    private readonly entities: Entity[];

    constructor(
        private readonly pixiApplication: PixiApplication,
        private readonly starsSlider: Slider,
    ) {
        this.entities = [];
    }

    public populate(): void {
        const starField: StarField = new StarField(this.pixiApplication);
        starField.createStars(this.starsSlider.getValue());

        this.entities.push(starField);
    }

    public run(): void {
        requestAnimationFrame(this.run.bind(this));

        this.entities.forEach((entity: Entity) => entity.update());
    }
}
