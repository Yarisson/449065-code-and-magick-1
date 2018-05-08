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

var FAMILY_NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var COAT_COLORS = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLORS = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var FIREBALL_COLORS = [
  '#ee4830',
  '#30a8ee',
  '#5ce6c0',
  '#e848d5',
  '#e6e848'
];

var randomIndex = function (a) {
  return Math.round(a * Math.random());
};

  /* var showUserDialog = function () {
  var userDialog = document.querySelector('.setup');
  userDialog.classList.remove('hidden');
}; */

var renderWizard = function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = NAMES[randomIndex(NAMES.length - 1)] + ' ' + FAMILY_NAMES[randomIndex(FAMILY_NAMES.length - 1)];
  wizardElement.querySelector('.wizard-coat').style.fill = COAT_COLORS[randomIndex(COAT_COLORS.length)];
  wizardElement.querySelector('.wizard-eyes').style.fill = EYES_COLORS[randomIndex(COAT_COLORS.length)];

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

var showSetupSimilar = function () {
  var setupSimilar = document.querySelector('.setup-similar');
  setupSimilar.classList.remove('hidden');
};

var initSetup = function () {
  // showUserDialog();
  renderSimilarWizards();
  showSetupSimilar();
};

initSetup();

// 4 задание

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupUserName = document.querySelector('.setup-user-name');
var userNameInput = setup.querySelector('.setup-user-name');
var setupWizard = document.querySelector('.setup-wizard');
var wizardEyes = document.querySelector('.wizard-eyes');
var setupWizardAppearance = document.querySelector('.setup-wizard-appearance');
var setupFireballWrapper = document.querySelector('.setup-fireball-wrap');

var onSetupWizardClick = function () {
  setupWizardAppearance.querySelector('[name="eyes-color"] input').value = EYES_COLORS[randomIndex(EYES_COLORS.length)];
};

var onWizardEyesClick = function () {
  setupWizardAppearance.querySelector('[name="eyes-color"] input').value = EYES_COLORS[randomIndex(EYES_COLORS.length)];
};

var onsetupFireballWrapperClick = function () {
  setupFireballWrapper.setAttribute('style', 'background-color:' + FIREBALL_COLORS[randomIndex(FIREBALL_COLORS.length)] + '');
};

setupWizard.addEventListener('click', onSetupWizardClick);
wizardEyes.addEventListener('click', onWizardEyesClick);
setupFireballWrapper.addEventListener('click', onsetupFireballWrapperClick);

var onSetupOpenEnter = function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.remove('hidden');
  }
};

var onSetupUserNameBlur = function () {
  document.addEventListener('keydown', onSetupCloseEsc);
};

var onSetupUserNameFocus = function () {
  document.removeEventListener('keydown', onSetupCloseEsc);
};

var onSetupOpenClick = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onSetupCloseEsc);
  document.addEventListener('keydown', onSetupCloseEnter);
  setupClose.addEventListener('click', onSetupCloseClick);
  setupUserName.addEventListener('focus', onSetupUserNameFocus);
  setupUserName.addEventListener('blur', onSetupUserNameBlur);
};

var onSetupCloseEnter = function (evt) {
  if (evt.keyCode === 13) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupCloseEnter);
    document.removeEventListener('keydown', onSetupCloseEsc);
    setupClose.removeEventListener('click', onSetupCloseClick);
  }
};

var onSetupCloseEsc = function (evt) {
  if (evt.keyCode === 27) {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupCloseEnter);
    document.removeEventListener('keydown', onSetupCloseEsc);
    setupClose.removeEventListener('click', onSetupCloseClick);
  }
};

var onSetupCloseClick = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onSetupCloseEnter);
  setup.removeEventListener('keydown', onSetupCloseEsc);
  setupClose.removeEventListener('click', onSetupCloseClick);
};

var onUserNameInputInvalid = function () {
  if (userNameInput.validity.tooShort) {
    userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
  } else if (userNameInput.validity.valueMissing) {
    userNameInput.setCustomValidity('Обязательное поле');
  } else {
    userNameInput.setCustomValidity('');
  }
};

setupOpen.addEventListener('keydown', onSetupOpenEnter);
setupOpen.addEventListener('click', onSetupOpenClick);
userNameInput.addEventListener('invalid', onUserNameInputInvalid);
