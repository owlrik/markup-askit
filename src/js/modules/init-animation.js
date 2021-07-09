const screens = document.querySelectorAll('[data-animate]');

let elTop;
let windowHeight;

const returnAnimatePoint = (el) => {
  elTop = el.getBoundingClientRect().top;
  windowHeight = window.innerHeight;

  return windowHeight / 1.4 - elTop;
};

const trackScreenBlock = () => {
  screens.forEach((screen) => {
    if (returnAnimatePoint(screen) > 0 && !screen.classList.contains('animated')) {
      screen.classList.add('animated');
    }
  });
};

const initAnimation = () => {
  if (screens.length) {
    trackScreenBlock();
    window.addEventListener('scroll', trackScreenBlock);
    window.addEventListener('orientationchange', trackScreenBlock);
  }
};

export {initAnimation};
