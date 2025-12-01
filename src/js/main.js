import AOS from "aos";
import lozad from "lozad";
import {
  setBackgroundElement,
  detectCloseElement,
  buttonToTop,
  clickScrollToDiv,
  appendCaptchaASP,
  menuSpy,
  stickElementToEdge,
} from "./helper";
import { header } from "./header";
import { emblaInit } from "./embla";
import { paralaxInit } from "./paralax";
$(document).ready(function () {
  setBackgroundElement();
  stickElementToEdge();
  menuSpy();
  header.init();
  // emblaInit();
  paralaxInit(".paralax-wrap");
});

/*==================== Aos Init ====================*/
AOS.init({
  offset: 100,
});
/*==================== Lazyload JS ====================*/
const observer = lozad(); // lazy loads elements with default selector as '.lozad'
observer.observe();

window.lozad = observer.observe();
