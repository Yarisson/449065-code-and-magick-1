'use strict';
var X_CLOUD_POINT = 100;
var Y_CLOUD_POINT = 10;
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var GAP = 10;
var X_TEXT_POINT = 120;
var Y_TEXT_POINT = 40;
var GAP_TEXT = 20;
var X_GISTO_POINT = 140;
var Y_GISTO_POINT = 240;
var GISTO_WIDTH = 50;
var GISTO_HEIGHT = -135;
var GISTO_GAP_X = 40;
var Y_GISTO_NAME_POINT = 260;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);    
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];    
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }    
  return maxElement;
};

var randomColor = function () {
  return 'rgba(0, 0, 255, ' + Math.random() + ')';
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud (ctx, X_CLOUD_POINT + GAP, Y_CLOUD_POINT + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud (ctx, X_CLOUD_POINT, Y_CLOUD_POINT, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', X_TEXT_POINT, Y_TEXT_POINT);
  ctx.fillText('Список результатов:', X_TEXT_POINT, Y_TEXT_POINT + GAP_TEXT);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : randomColor();
    ctx.fillText(names[i], X_GISTO_POINT + (GISTO_WIDTH + GISTO_GAP_X) * [i], Y_GISTO_NAME_POINT);
    ctx.fillRect(X_GISTO_POINT + (GISTO_WIDTH + GISTO_GAP_X) * [i], Y_GISTO_POINT, GISTO_WIDTH, GISTO_HEIGHT * times[i] / maxTime);
  }
};
