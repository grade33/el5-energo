export function openHiddenContent() {
  const btn = document.querySelector('#open-hidden-content');
  const content = document.querySelector('#hidden-content');

  if (!(btn && content)) return;

  content.computedStyleMap.display = 'none';
  btn.addEventListener('click', () => {
    content.computedStyleMap.display = null;
  });
}
