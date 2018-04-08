'use strict';
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'];

var familyName = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColor = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColor = [
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

  wizardElement.querySelector('.setup-similar-label').textContent = names[randomIndex(7)] + ' ' + familyName[randomIndex(7)];
  wizardElement.querySelector('.wizard-coat').style.fill = coatColor[randomIndex(5)];
  wizardElement.querySelector('.wizard-eyes').style.fill = eyesColor[randomIndex(5)];

  return wizardElement;
};

var fragment = document.createDocumentFragment();
var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

for (var i = 0; i < 4; i++) {
  fragment.appendChild(renderWizard());
}

similarListElement.appendChild(fragment);

document.querySelector('.setup-similar').classList.remove('hidden');
