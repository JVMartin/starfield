import * as PIXI from 'pixi.js';
import './main.scss';

//Create a Pixi Application
let app = new PIXI.Application({width: 256, height: 256});

//Add the canvas that Pixi automatically created for you to the HTML document
const gameElement = document.getElementById('game');
gameElement.innerHTML = '';
gameElement.appendChild(app.view);

let rectangle = new PIXI.Graphics();
rectangle.lineStyle(4, 0xFF3300, 1);
rectangle.beginFill(0x66DDFF);
rectangle.drawRect(0, 0, 40, 40);
rectangle.endFill();
rectangle.x = 170;
rectangle.y = 170;
app.stage.addChild(rectangle);

function gameLoop() {
  // Call this `gameLoop` function on the next screen refresh
  // (which happens 60 times per second)
  requestAnimationFrame(gameLoop);

  //Move the cat
  rectangle.x += 1;
  if (rectangle.x > 256) {
    rectangle.x = 0;
  }
}

//Start the loop
gameLoop();
