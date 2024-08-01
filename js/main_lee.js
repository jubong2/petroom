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
    slidesPerView: 4,
    spaceBetween: 30,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
      },
  });
});
