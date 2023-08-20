export function openHiddenContent() {
  const btnCol = document.querySelectorAll('#open-hidden-content');
  const content = document.querySelector('#hidden-content');

  if (!(btnCol && content)) return;

  content.style.display = 'none';
  btnCol.forEach((btn) => {
    btn.addEventListener('click', () => {
      content.style.display = null;
    });
  });
}
