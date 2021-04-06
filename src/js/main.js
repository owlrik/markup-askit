import {toggleMenu, toggleMenuHighlighter} from "./modules/header";
import {initSliders} from './modules/slider';
import {initPartnersSlider} from './modules/partners-slider';

window.addEventListener('load', () => {
  initSliders();
  initPartnersSlider();
  toggleMenu();
  toggleMenuHighlighter();
});
