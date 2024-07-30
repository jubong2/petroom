window.addEventListener("load",function () {
    var swpr = new Swiper(".productSlide", {
    slidesPerView: 2,
    spaceBetween: 30,
    // centeredSlides: true,
    autoplay: {
    delay: 2500,
    disableOnInteraction: false,
    },
    pagination: {
    el: ".productSlide .swiper-pagination",
    clickable: true,
    },
  });
});
