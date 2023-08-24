export function initQuiz() {
  const quizSectionCol = document.querySelectorAll('.quiz');

  quizSectionCol.forEach((quizSection) => {
    const options = quizSection.querySelectorAll('.quiz__btn');

    function clickHandler(event) {
      quizSection.classList.add('quiz_selected');
      const correct = event.currentTarget.dataset.correct === 'true';
      if (correct) {
        event.currentTarget.classList.add('quiz__btn_correct');
      } else {
        event.currentTarget.classList.add('quiz__btn_incorrect');
      }

      options.forEach((delOption) => {
        delOption.removeEventListener('click', clickHandler);
      });
    }

    options.forEach((option) => {
      option.addEventListener('click', clickHandler);
    });
  });
}
