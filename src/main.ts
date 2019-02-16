import './main.scss';
import { PixiApplication } from './services/PixiApplication';
import { Game } from './services/Game';

(() => {
    const pixiApplication = new PixiApplication(700, 700);
    pixiApplication.inject();

    const game = new Game(pixiApplication);
    game.populate();
    game.run();
})();
