import './main.scss';
import { Game } from './services/Game';
import { PixiApplication } from './services/PixiApplication';

(async (): Promise<void> => {
    const pixiApplication: PixiApplication = new PixiApplication(700, 700);
    pixiApplication.inject();

    const game: Game = new Game(pixiApplication);
    game.populate();
    game.run();
})();
