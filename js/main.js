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
  document.addEventListener('mousemove', (e) => {
    let mouseX = e.pageX + 10; // document의 x좌표값
    let mouseY = e.pageY + 10; // document의 y좌표값

    let cursor = document.querySelector('.cursor');
    cursor.style.left = mouseX + 'px';
    cursor.style.top = mouseY + 'px';
})
// const h1 = document.querySelector("h1");
// const box = document.querySelector(".box");
// //   마우스 좌표 전달
// // 도착해야 하는 목표위치값
// let tgX = 0;
// let tgY = 0;
// // 현재위치
// let x = 0;
// let y = 0;
// // 속도
// let speed = 0.02;
// //  움직임 함수정의
// function moveFn(event) {
//     // 현재 마우스 위치
//     x = event.clientX;
//     y = event.clientY;
//     // 위치값 글자 출력
//     h1.innerHTML = "x: " + x + ", y:" + y;
// }
// window.addEventListener("mousemove", moveFn);
// // 하드웨어 가속을 이용한 화면 모션 처리
// function loop() {
//     // 감속도(부드럽게 목표위치로 간다. smooth)
//     // 새로운 도착위치값 += (현재위치 - 도착위치) * 소숫점
//     tgX += (x - tgX) * speed;
//     tgY += (y - tgY) * speed;
//     // 화면을 갱신함
//     box.style.transform = "translate(" + tgX + "px, " + tgY + "px)";
//     window.requestAnimationFrame(loop);
// }

// loop();

});
