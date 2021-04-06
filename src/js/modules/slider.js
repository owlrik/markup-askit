import SwiperCore, {Navigation} from 'swiper/core';

let sliders = document.querySelectorAll('.slider');

export const initSliders = () => {
  if (!sliders.length) {
    return;
  }

  let sliderControls = document.querySelectorAll('.slider-controls__btn');

  sliders.forEach((slider) => {
    let btnNext = slider.querySelector('.slider-controls__btn--next');
    let btnPrev = slider.querySelector('.slider-controls__btn--prev');
    let isInfinite = slider.classList.contains('.slider--loop');

    SwiperCore.use([Navigation]);

    // eslint-disable-next-line no-unused-vars
    let swiperSlider = new SwiperCore(slider.querySelector('.slider__container'), {
      slidesPerView: 'auto',
      watchOverflow: true,
      // autoHeight: true,
      loop: isInfinite,

      navigation: {
        nextEl: btnNext,
        prevEl: btnPrev
      }
    });
  });

  sliderControls.forEach((btn) => {
    btn.addEventListener('click', () => {
      document.activeElement.blur();
    });
  });
};
