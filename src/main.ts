import './main.scss';
import { Game } from './services/Game';
import { PixiApplication } from './services/PixiApplication';
import { Slider } from './widgets/Slider';

((): void => {
    const pixiApplication: PixiApplication = new PixiApplication(700, 700);
    pixiApplication.replaceInDOM();

    const starsSlider: Slider = new Slider('stars');

    const game: Game = new Game(pixiApplication, starsSlider);
    game.initialize();
    game.run();
})();
