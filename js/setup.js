'use strict';

var INDEXSIMILARWIZARD = 4;

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var userDialogHidden = function () {
  userDialog.classList.remove('hidden');
};

userDialogHidden();

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

var renderWizard = function () {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = NAMES[randomIndex(7)] + ' ' + FAMILYNAMES[randomIndex(7)];
  wizardElement.querySelector('.wizard-coat').style.fill = COATCOLORS[randomIndex(5)];
  wizardElement.querySelector('.wizard-eyes').style.fill = EYESCOLORS[randomIndex(5)];

  return wizardElement;
};

var fragment = document.createDocumentFragment();
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for (var i = 0; i < INDEXSIMILARWIZARD; i++) {
  fragment.appendChild(renderWizard());
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
