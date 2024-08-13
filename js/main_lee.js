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
    breakpoints: { 1400: { slidesPerView: 4 }, 1100: { slidesPerView: 3 }, 700: { slidesPerView: 2 }, 601: { slidesPerView: 2 } },
  });

  // 모바일 메뉴바 클릭하면 메뉴 나오는거
  const mbNavi = document.querySelector(".mb-navi");
  const mbBtn = document.querySelector(".mb-menu");
  const head = document.querySelector(".header");
  const mbhead = document.querySelector(".mb-header");
  const closeBtn = document.querySelector(".closeBtn");

  mbBtn.addEventListener("click", function () {
    mbNavi.classList.toggle("mbactive");
    mbhead.classList.toggle("hdactive");
    // mbactive가 활성화되면 스크롤 없애기
    if (mbNavi.classList.contains("mbactive")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  });
  closeBtn.addEventListener("click", function () {
    mbNavi.classList.remove("mbactive");
    mbhead.classList.remove("hdactive");
    head.classList.remove("hdactive");
    document.body.style.overflow = "";
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768 && mbNavi.classList.contains("mbactive")) {
      mbNavi.classList.remove("mbactive");
      head.classList.remove("hdactive");
      mbhead.classList.remove("hdactive");
    }
  });
});
