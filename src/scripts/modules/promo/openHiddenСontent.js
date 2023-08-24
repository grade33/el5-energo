export function openHiddenContent() {
  const footer = document.querySelector('footer.GlobalFooterOi');
  const btnCol = document.querySelectorAll('#open-hidden-content');
  const content = document.querySelector('#hidden-content');

  const quizSection = document.querySelector('.quiz');

  if (!(btnCol && content)) return;

  content.style.display = 'none';
  footer.style.display = 'none';

  btnCol.forEach((btn) => {
    btn.addEventListener('click', () => {
      content.style.display = null;
      footer.style.display = null;

      setTimeout(() => {
        quizSection.scrollIntoView({ block: 'end', behavior: 'smooth' });
      }, 0);
    });
  });
}
