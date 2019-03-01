import { throttle } from 'lodash/fp';

import { Entity } from '../entities/Entity';
import { StarField } from '../entities/StarField';
import { Slider } from '../widgets/Slider';

import { PixiApplication } from './PixiApplication';

export class Game {
    private readonly entities: Entity[];

    constructor(
        private readonly pixiApplication: PixiApplication,
        private readonly xSlider: Slider,
        private readonly starsSlider: Slider,
        private readonly colorizeSlider: Slider,
        private readonly depthSlider: Slider,
    ) {
        this.entities = [];
    }

    /**
     * Populate the entities array, and perform any binding with the user
     * inputs that the entities may need.
     */
    public initialize(): void {
        const starField = new StarField(
            this.pixiApplication,
            this.xSlider.getValue(),
            this.colorizeSlider.getValue(),
            this.depthSlider.getValue(),
        );
        starField.setDesiredStarCount(this.starsSlider.getValue());

        this.entities.push(starField);

        this.xSlider.setCallback((value: number) => {
            starField.setX(value);
        });
        this.starsSlider.setCallback((value: number) => {
            starField.setDesiredStarCount(value);
        });
        this.colorizeSlider.setCallback(throttle(50, (value: number) => {
            starField.setColorize(value);
        }));
        this.depthSlider.setCallback((value: number) => {
            starField.setDepth(value);
        });
    }

    /**
     * This is our game / animation loop.
     */
    public run(): void {
        requestAnimationFrame(this.run.bind(this));

        this.entities.forEach((entity: Entity) => entity.update());
    }
}
