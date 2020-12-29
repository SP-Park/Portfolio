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
});


// 스크롤이 되면 화살표가 나타나도록 하는 기능
const arrowUp = document.querySelector('.arrow-up');
document.addEventListener('scroll', () => {
    if(window.scrollY > homeHeight / 2) {
        arrowUp.classList.add('visible');
    }else{
        arrowUp.classList.remove('visible');
    }
});

// 화살표 클릭 시 홈으로 올라가게 하는 기능
arrowUp.addEventListener('click', () => {
    scrollIntoView('#home');
});

//Projects
const workBtnContainer = document.querySelector('.work__categories');
const projectContainer = document.querySelector('.Work__projects');
const projects = document.querySelectorAll('.project');
workBtnContainer.addEventListener('click', (e) => {
    // span안에 들어있는 버튼을 클릭시에도 값이 나와야 하므로 || 이후 부분 적어줌 (디버깅으로 확인 가능)
    const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
    if (filter == null) {
        return;
    }
    
    // 애니메이션 효과를 부여
    projectContainer.classList.add('ani-out');
  
    // 일정 시간이 지나면 등록한 함수를 다시 불러주는 함수
    setTimeout(() => {
        // project 안의 멤버들의 타입을 하나씩 빙글빙글 돌면서 가져옴
        projects.forEach((project) => {
            console.log(project.dataset.type);
            if(filter == '*' || filter == project.dataset.type) {
                project.classList.remove('invisible');
            }else  {
                project.classList.add('invisible');
            }
        });
        projectContainer.classList.remove('ani-out');
    }, 300);
});

// 아래 3가지 함수는 동일함
// 1.
// projects.forEach((project) => {
//    console.log(project);
// });

// 2.
// for (let project of projects) {
//     console.log(project);
// }

// 3.
// let project;
// for (let i = 0; i <projects.length; i++) {
//     project = projects[i];
//     console.log(project);
// }



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
};
