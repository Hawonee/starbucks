const searchEl = document.querySelector('.search');
const searchInputEl = searchEl.querySelector('input');

searchEl.addEventListener('click', function () {
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
  searchEl.classList.add('focused');
  searchInputEl.setAttribute('placeholder', '통합 검색');
}); 

searchInputEl.addEventListener('blur', function () {
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder', '');
});


const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function () {
  console.log(window.scrollY);
  if (window.scrollY > 500) {
//스크롤 Y 좌표가 500보다 커지면 나타나는 배지를 숨기겠다~~
    // gsap.to(요소, 지속시간, {옵션}); :: 애니메이션 효과 gsap
    gsap.to(badgeEl, .6, {
      opacity: 0,
      display: 'none',
    });
  } else {
    //배지 보이기 
    gsap.to(badgeEl, .6, {
      opacity: 1,
      display: 'block',
    });
  }
}, 300));
//._throttle(함수, 시간)


// 메인 컵 애니메이션 효과 (CSS에서 먼저 오퍼시티 0 먹이고 하기)
const fadeEls = document.querySelectorAll('.visual .fade-in'); //변수 요소이름 = document.메소드실행 ('효과 먹일 class명 : .부모 .후손')
fadeEls.forEach(function (fadeEl, index) { //요소이름.메소드(익명 (요소직관적이름/단수가능, 반복횟수=index) {})
  gsap.to(fadeEl, 1, { // gsap.to(요소, 지속시간, {옵션}); / 애니메이션 효과 gsap
    delay: (index + 1)*.7, //=0.7 > 1.4 > 2.1 > 2.8초 이렇게 순서대로 나타남
    opacity: 1
  });
});
//fade-in이라는 class를 가지고 있는 요소들에게 gsap 효과로 0.6초씩 순차적으로 opacity1로 자동화한다~~ (HTML 기준 위에서부터 나타남)  


// new Swiper ('선택자', {옵션})
new Swiper (".notice-line .swiper", {
  direction: 'vertical',
  autoplay: true,
  loop: true,
});
new Swiper('.promotion .swiper', {
  slidesPerView: 3, //한 번에 보여 줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백 px
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 5000, //500은 0.5초
  },
  pagination: {
    el: '.promotion .swiper-pagination',
    clickable: true
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next',
  }
});


const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion')
let isHidePromotion = false;















































































































































































































































































































































































































































































































































