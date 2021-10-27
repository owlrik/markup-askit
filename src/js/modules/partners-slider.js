import SwiperCore, {Navigation} from "swiper/core";

const partnersSlider = document.querySelector('.partners-slider .swiper-container');

SwiperCore.use([Navigation]);

const initSwiper = (slider) => new SwiperCore(slider, {
  slidesPerView: 'auto',
  watchOverflow: true,

  navigation: {
    nextEl: '.partners-slider .slider-controls__btn--next',
    prevEl: '.partners-slider .slider-controls__btn--prev'
  }
});

const initPartnersSlider = () => {
  if (partnersSlider) {
    let swiperSlider;
    let partnersBreakpoint = window.matchMedia('(max-width:1023px)');

    const checkBreakpoint = () => {
      if (partnersBreakpoint.matches) {
        if (swiperSlider) {
          swiperSlider.destroy(true, true);
        }
      }
      else {
        swiperSlider = initSwiper(partnersSlider);
      }
    };

    checkBreakpoint();

    try {
      partnersBreakpoint.addEventListener('change', checkBreakpoint);
    } catch (e1) {
      try {
        // Safari < 15
        partnersBreakpoint.addListener(checkBreakpoint);
      } catch (e2) {
        console.error(e2);
      }
    }
  }
};

export {initPartnersSlider};
