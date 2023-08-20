/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};

;// CONCATENATED MODULE: ./src/scripts/modules/promo/main/heroModals.js
function heroModalsOpenClose() {
  var bgBlock = document.querySelector('.hero__kitchen-block');
  var btnCol = document.querySelectorAll('[data-promo-btn]');
  var modalCol = document.querySelectorAll('[data-promo-modal]');
  var endModal = document.querySelector('[data-promo-modal="end"]');
  var closeBtnCol = document.querySelectorAll('.hero__modal-close');
  function close(modal) {
    var currentData = modal.dataset.promoModal;
    var currentBtn = document.querySelector("[data-promo-btn=".concat(currentData, "]"));
    modal.classList.remove('hero__modal_open');
    if (!currentBtn) return;
    modal.classList.remove('hero__modal_open');
    currentBtn.classList.add('hero__btn_close');
    var everyClosed = Array.from(btnCol).every(function (btn) {
      return btn.classList.contains('hero__btn_close');
    });
    if (everyClosed) {
      bgBlock.classList.add('hero__kitchen-block_light');
      endModal.classList.add('hero__modal_open');
    }
  }
  btnCol.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modalCol.forEach(function (modal) {
        if (!modal.classList.contains('hero__modal_open')) return;
        close(modal);
      });
      var currentData = btn.dataset.promoBtn;
      var currentModal = document.querySelector("[data-promo-modal=".concat(currentData, "]"));
      currentModal.classList.add('hero__modal_open');
      btn.classList.add('hero__btn_opened');
    });
  });
  closeBtnCol.forEach(function (closeBtn) {
    closeBtn.addEventListener('click', function () {
      var modal = closeBtn.closest('[data-promo-modal]');
      close(modal);
    });
  });
}
;// CONCATENATED MODULE: ./src/scripts/promo-main.js

heroModalsOpenClose();
/******/ })()
;