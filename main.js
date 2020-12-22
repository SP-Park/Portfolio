'use strict'
// Nav 바가 스크롤시 살짝 커지면서 색상이 진해지는 기능 구현 

//Nav 바의 height을 알아와야 하므로 javascript element size 로 검색 html nav 의 요소이므로 .. 
const navbar = document.querySelector('#navbar');
const navbarHeight = navbar.getBoundingClientRect().height;

// 스크롤 위치를 가져와야 하고 (Google에서 javascript scroll position 검색하여 window.scrollY 함수 찾음-MDN)
document.addEventListener('scroll', () => {
    // console.log(window.scrollY);
    // console.log(`navbarHeight: ${navbarHeight}`);
    if(window.scrollY > navbarHeight) {
        navbar.classList.add('navbar--dark');
    }else {
        navbar.classList.remove('navbar--dark');
    }
});  /* 애로우 펑션 인자를 받지 않고 우리가 입력한 명령을 실행 */

