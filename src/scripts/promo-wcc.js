import AOS from 'aos';
import { initQuiz } from './modules/promo/quiz';
import { openHiddenContent } from './modules/promo/openHiddenСontent';
import { initSwipers } from './modules/promo/wcc/slider';
import { windInfoOpenClose } from './modules/promo/wcc/windInfo';

document.documentElement.style.scrollBehavior = 'smooth';
AOS.init();

initQuiz();
openHiddenContent();
initSwipers();
windInfoOpenClose();
