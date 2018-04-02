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

var renderText = function (ctx, color, style, x, y) {
  ctx.fillStyle = color;
  ctx.font = style;
  ctx.fillText('Ура вы победили!', x, y);
  ctx.fillText('Список результатов:', x, y + GAP_TEXT);
};

var renderResult = function (ctx, arrayResults, maxResult) {
  for (var i = 0; i < arrayResults.length; i++) {
    ctx.font = '16px PT Mono';
    ctx.fillStyle = '#green';
    ctx.fillText(Math.round(arrayResults[i]), X_GISTO_POINT + (GISTO_WIDTH + GISTO_GAP_X) * [i], Y_GISTO_POINT + GISTO_HEIGHT * arrayResults[i] / maxResult - 5);
  }
};

var renderGisto = function (ctx, arrayNames, arrayTimes, max) {
  for (var i = 0; i < arrayNames.length; i++) {
    ctx.fillStyle = arrayNames[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : randomColor();
    ctx.fillText(arrayNames[i], X_GISTO_POINT + (GISTO_WIDTH + GISTO_GAP_X) * [i], Y_GISTO_NAME_POINT);
    ctx.fillRect(X_GISTO_POINT + (GISTO_WIDTH + GISTO_GAP_X) * [i], Y_GISTO_POINT, GISTO_WIDTH, GISTO_HEIGHT * arrayTimes[i] / max);
  }
};

window.renderStatistics = function (ctx, names, times) {

  renderCloud(ctx, X_CLOUD_POINT + GAP, Y_CLOUD_POINT + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, X_CLOUD_POINT, Y_CLOUD_POINT, '#fff');
  renderText(ctx, '#000', '16px PT Mono', X_TEXT_POINT, Y_TEXT_POINT);

  var maxTime = getMaxElement(times);

  renderResult(ctx, times, maxTime);
  renderGisto(ctx, names, times, maxTime);
};
