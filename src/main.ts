import './main.scss';
import { PixiApplication } from './services/PixiApplication';
import { Game } from './services/Game';

(() => {
  const pixiApplication = new PixiApplication(600, 600);
  pixiApplication.inject();

  const game = new Game(pixiApplication);
  game.populate();
  game.run();
})();
