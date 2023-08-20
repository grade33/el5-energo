export function initModal() {
  // получаем элементы по id
  const modalWCC = document.querySelector('.js-modal-wcc');
  const modalSDPP = document.querySelector('.js-modal-sdpp');
  const modalInfo = document.querySelector('.js-modal-info');

  const btnWater = document.querySelector('.js-modal-btn-water');
  const btnGas = document.querySelector('.js-modal-btn-gas');

  // получаем кнопки закрытия для каждого попапа
  const closeBtnsWCC = modalWCC.querySelectorAll('.js-modal-close');
  const closeBtnsSDPP = modalSDPP.querySelectorAll('.js-modal-close');

  // массив модальных окон
  const modals = [modalWCC, modalSDPP, modalInfo];

  // функция для скрытия всех модальных окон
  function closeAllModals() {
    modals.forEach((modal) => {
      modal.classList.remove('hero__modal_open');
    });
  }

  // функция для открытия определенного модального окна
  function openModal(modal) {
    closeAllModals();
    modal.classList.add('hero__modal_open');
  }

  // обработчики событий для кнопок открытия попапов
  btnWater.addEventListener('click', () => openModal(modalWCC));
  btnGas.addEventListener('click', () => openModal(modalSDPP));

  // обработчики событий для кнопок закрытия попапов
  closeBtnsWCC.forEach((btn) => btn.addEventListener('click', () => openModal(modalInfo)));
  closeBtnsSDPP.forEach((btn) => btn.addEventListener('click', () => openModal(modalInfo)));

  // при открытии страницы показываем только info modal
  window.onload = () => {
    openModal(modalInfo);
  };
}
