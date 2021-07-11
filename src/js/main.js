import {toggleMenu, toggleMenuHighlighter} from "./modules/header";
import {initSliders} from './modules/slider';
import {initPartnersSlider} from './modules/partners-slider';
import {initModals} from "./modules/init-modals";
import {initAnimation} from "./modules/init-animation";
import {initForms} from "./modules/form";

window.addEventListener('load', () => {
  initSliders();
  initPartnersSlider();
  toggleMenu();
  toggleMenuHighlighter();
  initModals();
  initAnimation();
  initForms();
});
