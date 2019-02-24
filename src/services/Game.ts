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

    public initialize(): void {
        const starField: StarField = new StarField(this.pixiApplication);
        starField.setDesiredStarCount(this.starsSlider.getValue());

        this.entities.push(starField);

        this.starsSlider.addCallback((value: number) => {
            starField.setDesiredStarCount(value);
        });
    }

    public run(): void {
        requestAnimationFrame(this.run.bind(this));

        this.entities.forEach((entity: Entity) => entity.update());
    }
}
