window.addEventListener("load", function () {
  const header = this.document.querySelector(".header");
  const banner = this.document.querySelector(".banner");
  let scy = 0;
  //   console.log(scy);
  this.window.addEventListener("scroll", function () {
    scy = this.window.document.documentElement.scrollTop;
    if (scy > 0) {
      header.classList.add("active");
      banner.classList.add("bannerActive");
    } else {
      header.classList.remove("active");
      banner.classList.remove("bannerActive");
    }
  });

  var swiper = new Swiper(".ad-Swiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: { 1400: { slidesPerView: 4 }, 1100: {slidesPerView: 3 }, 700: { slidesPerView: 2}, 601: { slidesPerView: 2 } },
  });
});
