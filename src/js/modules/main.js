export function main() {
  const burger = document.querySelector(".hamburger");
  const headerMenu = document.querySelector(".header__top");

  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    headerMenu.classList.toggle("is-active");
  });
}
