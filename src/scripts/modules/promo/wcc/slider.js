import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

export function initSwipers() {
  return new Swiper('.swiper', {
    modules: [Pagination, Navigation],
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 20,
    keyboard: true,
    rewind: true,
  });
}