/**
 * Created by miguel on 18/10/17.
 */
let Card = function (p) {
  const obj = {};
  const container = new createjs.Container();
  let background;
  let topRank;
  let bottomRank;
  const params = p;


  obj.init = function () {
    createBackground();
  };

  obj.getContainer = function () {
      return container;
  };

  function createBackground() {
      background = new createjs.Shape();
      background.graphics
        .beginFill(params.fill)
        .drawRect(0, 0, params.width, params.height);

      container.addChild(background);
  }


  return obj;
};
module.exports.Card = Card;
