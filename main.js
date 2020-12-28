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
    // console.log(event.target.dataset.link);
// 받아온 아이디를 이용해 스크롤을 실행 javascript scroll to id 검색
     // 중복 부분 함수화 (scrollIntoView)
    // const scrollTo = document.querySelector(link);
    // scrollTo.scrollIntoView({behavior: 'smooth'});
    scrollIntoView(link);
});

// contact me 클릭 시 이동 
const homeContactBtn = document.querySelector('.home__contact');
homeContactBtn.addEventListener('click', () => {
    // 중복 부분 함수화 (scrollIntoView)
    // const scrollTo = document.querySelector('#contact');
    // scrollTo.scrollIntoView({behavior: 'smooth'});
    scrollIntoView('#contact');
})

// 스크롤 시 홈 창을 점점 투명하게 만드는 기능 
const home = document.querySelector('.home__container');
const homeHeight = home.getBoundingClientRect().height;
document.addEventListener('scroll', ()=> {
    // 스크롤 위치와 투명도를 반대로 적용될 수 잇도록 식을 만듬
    // console.log(1 - window.scrollY / homeHeight);
    home.style.opacity = 1 - window.scrollY / homeHeight;
});

















// 클릭 시 이동 부분이 중복되므로 함수로 만들기 
function scrollIntoView(selector) {
    const scrollTo = document.querySelector(selector);
    scrollTo.scrollIntoView({behavior: 'smooth'});
}
