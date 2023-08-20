export function windInfoOpenClose() {
  const btn = document.querySelector('.wind__btn');
  const closeBtn = document.querySelector('.wind__btn-close');
  const info = document.querySelector('.wind__slider');
  btn.addEventListener('click', () => {
    info.classList.add('wind__slider_open');
  });
  closeBtn.addEventListener('click', () => {
    info.classList.remove('wind__slider_open');
  });
}
