'use strict';

var INDEX_SIMILAR_WIZARD = 4;

var NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var FAMILYNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COATCOLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYESCOLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var randomIndex = function (a) {
  return Math.round(a * Math.random());
};

var showUserDialog = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
};

var renderWizard = function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = NAMES[randomIndex(7)] + ' ' + FAMILYNAMES[randomIndex(7)];
  wizardElement.querySelector('.wizard-coat').style.fill = COATCOLORS[randomIndex(5)];
  wizardElement.querySelector('.wizard-eyes').style.fill = EYESCOLORS[randomIndex(5)];

  return wizardElement;
};

var renderSimilarWizards = function () {
  var fragment = document.createDocumentFragment();
  var similarListElement = document.querySelector('.setup-similar-list');
  for (var i = 0; i < INDEX_SIMILAR_WIZARD; i++) {
    fragment.appendChild(renderWizard());
  }
  similarListElement.appendChild(fragment);
};

/* var fragment = document.createDocumentFragment();
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for (var i = 0; i < INDEX_SIMILAR_WIZARD; i++) {
  fragment.appendChild(renderWizard());
}

similarListElement.appendChild(fragment); */

var showSetupSimilar = function () {
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
};

showUserDialog();

renderSimilarWizards();

showSetupSimilar();
