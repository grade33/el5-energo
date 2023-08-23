export function openHiddenContent() {
  const footer = document.querySelector('footer.GlobalFooterOi');
  const btnCol = document.querySelectorAll('#open-hidden-content');
  const content = document.querySelector('#hidden-content');

  if (!(btnCol && content)) return;

  content.style.display = 'none';
  footer.style.display = 'none';

  btnCol.forEach((btn) => {
    btn.addEventListener('click', () => {
      content.style.display = null;
      footer.style.display = null;
    });
  });
}
