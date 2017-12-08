const canvas = document.getElementById('stage');
const stage = new createjs.Stage(canvas);
let Card = require('card');

let card = Card({
  fill: 'red',
  width: 120,
  height: 170
});

/*const topRank = new createjs.Text('9');
topRank.x = 5;
topRank.y = 5;

const bottomRank = topRank.clone();
bottomRank.y = 165;
bottomRank.x = 115;
bottomRank.scaleY = -1;
bottomRank.scaleX = -1;


var card = new createjs.Container();*/

card.getContainer().x = canvas.width / 2;
card.getContainer().y = 0;


stage.addChild(card.getContainer());
stage.update();
