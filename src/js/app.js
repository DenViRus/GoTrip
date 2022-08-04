const owl = $(".owl-carousel");
owl.owlCarousel({
  center: true,
  loop: true,
  margin: 20,
  startPosition: 0,
  items: 1,
  responsive: {
    550: {
      startPosition: 1,
      items: 3,
    },
    1200: {
      margin: 30,
      items: 3,
    },
  },
});

$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});

// nav icon start
const body = document.querySelector("body");
const nav = body.querySelector(".nav");
const navBtn = nav.querySelector(".nav__toggle");
const menuIcon = navBtn.querySelector(".menu-icon");

const navBtnListener1 = (event) => {
  const target = event.target;
  if (target.closest(".nav__toggle")) {
    event.preventDefault();
    nav.classList.toggle("nav--mobile");
    menuIcon.classList.toggle("menu-icon--active");
    body.classList.toggle("no-scroll");
  }
};
body.addEventListener("click", navBtnListener1);
