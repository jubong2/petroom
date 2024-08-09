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
  const htmlRoot = document.querySelector("html");
  const mbmenubarBtn = this.document.querySelector(".mb-menu-bar");

  mbBtn.addEventListener("click", function () {
    // 현재 버튼에 'mbactive' 클래스가 있는지 확인합니다.
    const mbActive = mbBtn.classList.contains("mbactive");
    if (mbActive) {
      // 'mbactive' 클래스가 있으면 제거합니다.
      mbBtn.classList.remove("mbactive");
      mbNavi.classList.remove("mbactive");
      htmlRoot.classList.remove("mbactive");
    } else {
      // 'mbactive' 클래스가 없으면 추가합니다.
      mbBtn.classList.add("mbactive");
      mbNavi.classList.add("mbactive");
      htmlRoot.classList.add("mbactive");
    }
  });
  mbmenubarBtn.addEventListener("click", function () {
    const mbActive = mbBtn.classList.contains("mbactive");
    if (mbActive) {
      mbmenubarBtn.classList.remove("mbactive");
      mbNavi.classList.remove("mbactive");
    } else {
      mbmenubarBtn.classList.add("mbactive");
      mbNavi.classList.add("mbactive");
    }
  });
});
