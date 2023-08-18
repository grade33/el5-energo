import Swiper from 'swiper';
import { Pagination } from 'swiper/modules';

export function initSwiper() {
  return new Swiper('.swiper', {
    modules: [Pagination],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: true,
    rewind: true,
  });
}