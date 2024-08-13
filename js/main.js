window.addEventListener("load", function () {
  var swpr = new Swiper(".productSlide", {
    slidesPerView: 2,
    spaceBetween: 20,
    // centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoints: { 1100: { slidesPerView: 3 }, 600: { slidesPerView: 2 } },
  });
  // top버튼 스크롤 기능=======================
  const topBtn = document.getElementById("top-btn");
  topBtn.addEventListener("click", function (event) {
    event.preventDefault();
    console.log(window.scrollY);
    if (window.scrollY == 0) {
      window.scrollTo({
        top: 7970,
        behavior: "smooth",
      });
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  });
  // 화살표 이미지 회전
  const topBtnImg = document.getElementById("top-btn-img");
  window.addEventListener("scroll", function (scTop) {
    scTop = window.document.documentElement.scrollTop;
    if (scTop > 0) {
      topBtnImg.classList.add("up");
    } else {
      topBtnImg.classList.remove("up");
    }
  });
    //gotop - SNS버튼
    const snsBtn = document.querySelector(".sns-btn2");
    const snsIcon = document.querySelector(".sns-icon");
    snsBtn.addEventListener("click", () => {
      snsIcon.classList.toggle("active");
    });
    

  
  //모달창(안내창)=========================
  const body = document.querySelector("body");
  const modal = document.querySelector(".modal-wrap");
  const modalClose = document.querySelector(".modal-close");
  // isOpen 값에 따라 스크롤을 제어하는 함수
  function controlScroll(isOpen) {
    if (isOpen) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "auto";
    }
  }
  // 초기 모달창 상태 설정
  const isOpen = true;
  controlScroll(isOpen);
  modalClose.addEventListener("click", function () {
    modal.style.display = "none";
    // 모달창이 닫히면 스크롤이 재활성화됨
    controlScroll(false);
  });
  // 마우스 커서 따라다니기
  document.addEventListener("mousemove", (e) => {
    let mouseX = e.pageX + 10; // document의 x좌표값
    let mouseY = e.pageY + 10; // document의 y좌표값

    let cursor = document.querySelector(".cursor");
    cursor.style.left = mouseX + "px";
    cursor.style.top = mouseY + "px";
  });
});
