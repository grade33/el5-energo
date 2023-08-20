import AOS from 'aos';
import { initQuiz } from './modules/promo/quiz';
import { openHiddenContent } from './modules/promo/openHiddenСontent';
import { initSwipers } from './modules/promo/wcc/slider';
import { windInfoOpenClose } from './modules/promo/wcc/windInfo';

AOS.init({
  duration: 1000,  
});

initQuiz();
openHiddenContent();
initSwipers();
windInfoOpenClose();
