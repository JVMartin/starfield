import './main.scss';
import { Game } from './services/Game';
import { PixiApplication } from './services/PixiApplication';
import { Slider } from './widgets/Slider';

((): void => {
    // -------------------------------------------------
    // Create the Pixi application
    // -------------------------------------------------
    const pixiApplication: PixiApplication = new PixiApplication(700, 700);
    pixiApplication.replaceInDOM();

    // -------------------------------------------------
    // Create widgets for user input
    // -------------------------------------------------
    const starsSlider: Slider = new Slider('stars');
    const colorizeSlider: Slider = new Slider('colorize');
    const depthSlider: Slider = new Slider('depth');

    // -------------------------------------------------
    // Create our game and set it in motion
    // -------------------------------------------------
    const game: Game = new Game(pixiApplication, starsSlider, colorizeSlider, depthSlider);
    game.initialize();
    game.run();
})();
