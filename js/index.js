const menuToggleBtn = document.querySelector('.menu-toggle-btn');
const menuHide = document.getElementById("gnb-mo");
let isHideMenu = false;

menuToggleBtn.addEventListener('click',function(){
    isHideMenu = !isHideMenu;
    if(isHideMenu){
        menuToggleBtn.classList.add('active');
        menuHide.classList.add('show');
    } else {
        menuToggleBtn.classList.remove('active')
        menuHide.classList.remove('show');
    }
})


// bx-slide

$('.bxslider').bxSlider({
    mode: 'fade',
        captions: true,
        auto: true,
        speed: 4000,
        autoHover:true,
        infiniteLoop:true,
        minSlides:1,
        controls: true,
        responsive: true
  });

//   button

$('.toggle').click(function(e){
  e.preventDefault(); // The flicker is a codepen thing
  $(this).toggleClass('toggle-on');
});


// calendar


$("select[name=location]").change(function(){
    console.log($(this).val()); //value값 가져오기
    console.log($("select[name=location] option:selected").text()); //text값 가져오기
  });


// 날짜계산


// 달력
// let dateControl = document.querySelector('input[type="date"]');
// dateControl.value = '2022.03.16';
// console.log(dateControl.value); 
// console.log(dateControl.valueAsNumber); 


// tab menu

    // let tabBtn = $('#tab-btn  ul  li');
    // let tabCont = $('#tab-cont > div');


    // tabBtn.click(function(){
    //     let target = $(this);
    //     let index = target.index();
    //     tabBtn.removeClass('active')
    //     target.addClass('active')
    //     tabCont.css('display','none');
    //     tabCont.eq(index).css('display','block')
    //     tabCont.addClass('active-bg')
    // })

    const tabList = document.querySelectorAll('.tab_menu .list li');
    const contents = document.querySelectorAll('.tab_menu .cont_area .cont')
    let activeCont = ''; // 현재 활성화 된 컨텐츠 (기본:#tab1 활성화)
  
    for(var i = 0; i < tabList.length; i++){
      tabList[i].querySelector('.btn').addEventListener('click', function(e){
        e.preventDefault();
        for(var j = 0; j < tabList.length; j++){
          // 나머지 버튼 클래스 제거
          tabList[j].classList.remove('is_on');
  
          // 나머지 컨텐츠 display:none 처리
          contents[j].style.display = 'none';
        }
  
        // 버튼 관련 이벤트
        this.parentNode.classList.add('is_on');
  
        // 버튼 클릭시 컨텐츠 전환
        activeCont = this.getAttribute('href');
        document.querySelector(activeCont).style.display = 'block';
      });
    }



    new Swiper(".low-price .swiper", {
        direction: 'horizontal', //방향
        loop: true, //무한반복
        autoplay : true, //자동시작
        speed: 4000,
        slidesPerView: 4, //한 번에 보여지는 슬라이드 개수
        spaceBetween: 10, //슬라이드와 슬라이드 간격
        navigation : {
            prevEl : ".swiper .swiper-prev",
            nextEl : ".swiper .swiper-next"
        },
        breakpoints: { //반응형 조건 속성
        320: { //320 이상일 경우
          slidesPerView: 1, //레이아웃 1열
        },
        768: {
          slidesPerView: 3, //레이아웃 3열
        },
        1440: {
          slidesPerView: 4, //레이아웃 4열
        },
      }
      });

    //   event

      new Swiper('.event-mo .swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        autoplay : true,
        speed: 4000,
        navigation : {
            prevEl : ".event-mo .swiper-prev",
            nextEl : ".event-mo .swiper-next"
        },
        breakpoints: { //반응형 조건 속성
          320: { //320 이상일 경우
            slidesPerView: 1, //레이아웃 1열
          },
          768: {
            slidesPerView: 1, //레이아웃 3열
          },
          1440: {
            slidesPerView: 4, //레이아웃 4열
          },
        }
    });


    // 더보기

    
function showMore(){
    // 더보기로보여줄 요소 변수에 저장
    const hide = document.querySelectorAll('.hide');
    
    // 배열로 변경하고 4개씩 배열을 쪼개서 보이기
    // .from => .hide를 배열로 변경
    //slice(0,4) => 4개씩 배열을 쪼개기
    const first = Array.from(hide).slice(0, 4);
    first.forEach(item => {
        item.classList.remove('hide');
    });
    if(hide.length <= 4) {
        hideMoreBtn();
    }
}
function hideMoreBtn() {
    document.getElementById('moreBtn').classList.add('hide');
}
    

// gsap - scroll 관련 함수





new Swiper(newFunction(), {
  // Optional parameters
  direction: 'vertical',
  loop: true,  
  speed: 1000,
  autoplay : true
});

function newFunction() {
  return '.notice-mo .swiper';
}



// drop down

  window.npup = (function (containerId, baseId) {
    // save the container of your special element
    var elementsContainer = document.getElementById(containerId);
    function doSelect(select) {
        // get value of select
        var value = select.value;
        // find element based on the value of the select
        var selected = findElement(value);
        if (!selected) {return;} // didn't find the element, bail
        // do hiding/showing of elements
        hideAll(elementsContainer);
        showElement(selected);
    }
    // retrieve some element based on the value submitted
    function findElement(value) {
        return document.getElementById(baseId+value);
    }
    // hide all element nodes within some parent element
    function hideAll(parent) {
        var children = parent.childNodes, child;
        // loop all the parent's children
        for (var idx=0, len = children.length; idx<len; ++idx) {
            child = children.item(idx);
            // if element node (not comment- or textnode)
            if (child.nodeType===1) {
                // hide it
                child.style.display = 'none';
            }
        }
    }
    // display a certain element
    function showElement(element) {
        element.style.display = '';
    }
    // hide all on page load (might want some extra logic here)
    hideAll(elementsContainer);

    // export api to use from select element's onchange or so
    return {
        doSelect: doSelect
    };
})('mySpecialElements', 'npup'); // give the routine a container id of your special elements, and the base id of those elements


// youtube


// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    videoId: '0qz_zGf93qs', //영상이 재생할 유튜브 ID
    playerVars : {
        autoplay : true, //자동재생 여부
        loop : true, //반복재생 여부
        playlist : "0qz_zGf93qs" //반복재생할 id 한번 더 설정해줘야함
    },
    events: {
      'onReady': function(event){
          event.target.mute(); //음소거 설정
      }
    }
  });
}