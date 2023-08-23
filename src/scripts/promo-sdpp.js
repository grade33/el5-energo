import AOS from 'aos';
import { initModal } from './modules/promo/sdpp/modal';
import { initQuiz } from './modules/promo/quiz';
import { openHiddenContent } from './modules/promo/openHiddenСontent';
import { initSwiper } from './modules/promo/sdpp/scheme';

document.documentElement.style.scrollBehavior = 'smooth'
AOS.init();
initModal();
initQuiz();
openHiddenContent();
initSwiper();
