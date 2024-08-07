window.addEventListener("load", function () {
  var swpr = new Swiper(".productSlide", {
    slidesPerView: 1,
    spaceBetween: 25,
    // centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: { 780: { slidesPerView: 3 }, 320: { slidesPerView: 2, spaceBetween: 10 } },
  });
});
