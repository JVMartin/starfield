import './index.scss';
import { Game } from './services/Game';
import { PixiApplication } from './services/PixiApplication';
import { Slider } from './widgets/Slider';

((): void => {
    // -------------------------------------------------
    // Create the Pixi application
    // -------------------------------------------------
    const pixiApplication = new PixiApplication(700, 700);
    pixiApplication.replaceInDOM();

    // -------------------------------------------------
    // Create widgets for user input
    // -------------------------------------------------
    const starsSlider = new Slider('stars');
    const colorizeSlider = new Slider('colorize');
    const depthSlider = new Slider('depth');

    // -------------------------------------------------
    // Create our game and set it in motion
    // -------------------------------------------------
    const game = new Game(pixiApplication, starsSlider, colorizeSlider, depthSlider);
    game.initialize();
    game.run();
})();
