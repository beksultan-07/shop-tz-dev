import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Swiper from "swiper";

export function commonSwipers() {
  let swiperHero = new Swiper(".hero-swiper", {
    speed: 400,
    spaceBetween: 20,
    loop: true,
    slidesPerView: "auto",
    centeredSlides: true,
    modules: [Pagination, Autoplay],
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      pauseOnMouseEnter: true,
    },
  });

  let swiperAdvantages = new Swiper(".advantages-swiper", {
    speed: 400,
    spaceBetween: 20,
    slidesPerView: "auto",
  });

  let swiperProducts = new Swiper(".products-swiper", {
    speed: 400,
    spaceBetween: 24,
    slidesPerView: "auto",
    modules: [Navigation],
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      1277: {
        slidesPerView: 4,
      },
    },
  });
}
