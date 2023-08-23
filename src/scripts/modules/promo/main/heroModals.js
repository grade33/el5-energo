export function heroModalsOpenClose() {
  const hiddenContent = document.querySelector('#hidden-content');
  const footer = document.querySelector('footer.GlobalFooterOi');
  const bgBlock = document.querySelector('.hero__kitchen-block');
  const btnCol = document.querySelectorAll('[data-promo-btn]');
  const modalCol = document.querySelectorAll('[data-promo-modal]');
  const endModal = document.querySelector('[data-promo-modal="end"]');
  const closeBtnCol = document.querySelectorAll('.hero__modal-close');

  hiddenContent.style.display = 'none';
  footer.style.display = 'none';

  function close(modal) {
    const currentData = modal.dataset.promoModal;
    const currentBtn = document.querySelector(`[data-promo-btn=${currentData}]`);

    modal.classList.remove('hero__modal_open');

    if (!currentBtn) return;

    modal.classList.remove('hero__modal_open');
    currentBtn.classList.add('hero__btn_close');
    const everyClosed = Array.from(btnCol).every((btn) => btn.classList.contains('hero__btn_close'));
    if (everyClosed) {
      bgBlock.classList.add('hero__kitchen-block_light');
      endModal.classList.add('hero__modal_open');
      hiddenContent.style.display = null;
      footer.style.display = null;
    }
  }

  btnCol.forEach((btn) => {
    btn.addEventListener('click', () => {
      modalCol.forEach((modal) => {
        if (!modal.classList.contains('hero__modal_open')) return;
        close(modal);
      });

      const currentData = btn.dataset.promoBtn;
      const currentModal = document.querySelector(`[data-promo-modal=${currentData}]`);
      currentModal.classList.add('hero__modal_open');
      btn.classList.add('hero__btn_opened');
    });
  });

  closeBtnCol.forEach((closeBtn) => {
    closeBtn.addEventListener('click', () => {
      const modal = closeBtn.closest('[data-promo-modal]');
      close(modal);
    });
  });
}
