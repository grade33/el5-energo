/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/promo/sdpp/modal.js
function initModal() {
  // получаем элементы по id
  var modalWCC = document.querySelector('.js-modal-wcc');
  var modalSDPP = document.querySelector('.js-modal-sdpp');
  var modalInfo = document.querySelector('.js-modal-info');
  var btnWater = document.querySelector('.js-modal-btn-water');
  var btnGas = document.querySelector('.js-modal-btn-gas');

  // получаем кнопки закрытия для каждого попапа
  var closeBtnsWCC = modalWCC.querySelectorAll('.js-modal-close');
  var closeBtnsSDPP = modalSDPP.querySelectorAll('.js-modal-close');

  // массив модальных окон
  var modals = [modalWCC, modalSDPP, modalInfo];

  // функция для скрытия всех модальных окон
  function closeAllModals() {
    modals.forEach(function (mod) {
      var modal = mod;
      modal.style.display = 'none';
    });
  }

  // функция для открытия определенного модального окна
  function openModal(mod) {
    var modal = mod;
    closeAllModals();
    modal.style.display = null;
  }

  // обработчики событий для кнопок открытия попапов
  btnWater.addEventListener('click', function () {
    return openModal(modalWCC);
  });
  btnGas.addEventListener('click', function () {
    return openModal(modalSDPP);
  });

  // обработчики событий для кнопок закрытия попапов
  closeBtnsWCC.forEach(function (btn) {
    return btn.addEventListener('click', function () {
      return openModal(modalInfo);
    });
  });
  closeBtnsSDPP.forEach(function (btn) {
    return btn.addEventListener('click', function () {
      return openModal(modalInfo);
    });
  });

  // при открытии страницы показываем только info modal
  window.onload = function () {
    openModal(modalInfo);
  };
}
;// CONCATENATED MODULE: ./src/scripts/modules/promo/quiz.js
function initQuiz() {
  var quizSectionCol = document.querySelectorAll('.quiz');
  quizSectionCol.forEach(function (quizSection) {
    var options = quizSection.querySelectorAll('.quiz__btn');
    function clickHandler(event) {
      quizSection.classList.add('quiz_selected');
      var correct = event.currentTarget.dataset.correct === 'true';
      if (correct) {
        event.currentTarget.classList.add('quiz__btn_correct');
      } else {
        event.currentTarget.classList.add('quiz__btn_incorrect');
      }
      options.forEach(function (delOption) {
        delOption.removeEventListener('click', clickHandler);
      });
    }
    options.forEach(function (option) {
      option.addEventListener('click', clickHandler);
    });
  });
}
;// CONCATENATED MODULE: ./src/scripts/modules/promo/openHiddenСontent.js
function openHiddenContent() {
  var btn = document.querySelector('#open-hidden-content');
  var content = document.querySelector('#hidden-content');
  if (!(btn && content)) return;
  content.computedStyleMap.display = 'none';
  btn.addEventListener('click', function () {
    content.computedStyleMap.display = null;
  });
}
;// CONCATENATED MODULE: ./src/scripts/promo-sdpp.js



initModal();
initQuiz();
openHiddenContent();
/******/ })()
;