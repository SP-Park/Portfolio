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

//메뉴를 클릭하면 이동
const navbarMenu = document.querySelector('.navbar__menu');
//클릭 이벤트를 받아오는 과정
navbarMenu.addEventListener('click', (event) => { //클릭 시 이벤트를 받아옴
    //클릭시 받아온 이벤트의 타켓을 출력
    const target = event.target;
    const link = target.dataset.link;
    if(link == null) {
        return;
    }
    console.log(event.target.dataset.link);
// 받아온 아이디를 이용해 스크롤을 실행 javascript scroll to id 검색
    const scrollTo = document.querySelector(link);
    scrollTo.scrollIntoView({behavior: 'smooth'});
});

