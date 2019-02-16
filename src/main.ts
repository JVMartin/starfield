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
rectangle.drawRect(0, 0, 40, 64);
rectangle.endFill();
rectangle.x = 170;
rectangle.y = 170;
app.stage.addChild(rectangle);
