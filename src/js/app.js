import * as flsFunctions from "./modules/functions.js";

import { main } from "./modules/main.js";
import { commonSwipers } from "./modules/swipers.js";

flsFunctions.isWebp();
main();

commonSwipers();

const footerDropdwons = document.querySelectorAll(".footer__content__list");
footerDropdwons.forEach((el, i) => {
  if (i !== 2) {
    el.addEventListener("click", function (e) {
      el.classList.toggle("active");
    });
  }
});

const productSizes = document.querySelectorAll(".products__slide__info__sizes");

productSizes.forEach((el) => {
  el.addEventListener("click", function (e) {
    for (const el1 of el.children) {
      console.log(el1.classList.remove("active"));
    }
    e.target.classList.add("active");
  });
});

console.log(productSizes[0].children[0]);
