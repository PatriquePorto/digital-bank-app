var swiper = new Swiper(".slide-depositions", {
  slidesPerView: 3,
  spaceBetween: 32,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000, // delay between slides in milliseconds
    disableOnInteraction: false, // don't stop autoplay on user interaction
  },
  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 17,
    },
    768: {
      slidesPerView: 2.1,
      spaceBetween: 20,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 32,
    }
  }
});

AOS.init({
  duration: 1000,
  disable: 'mobile',
  once: true
});