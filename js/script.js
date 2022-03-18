$(document).ready(function(){
    $('#bxslider').bxSlider({
        mode: 'horizontal',
        captions: true,
        slideWidth: 2020,
        auto: true,
        speed: 10000,
        autoHover:true,
        infiniteLoop:true,
        minSlides:1,
        pager:true
      });

      $('#slick-slider').slick({
        slide: 'div', //슬라이드 되어야 할 태그 ex) div, li
        infinite: true, //무한 반복 옵션
        slidesToShow: 4, // 한 화면에 보여질 컨텐츠 개수
        slidesToScroll: 1, //스크롤 한번에 움직일 컨텐츠 개수
        speed: 5000, // 다음 버튼 누르고 다음 화면 뜨는데까지 걸리는 시간(ms)
        arrows: true, // 옆으로 이동하는 화살표 표시 여부
        dots: false, // 스크롤바 아래 점으로 페이지네이션 여부
        autoplay: true, // 자동 스크롤 사용 여부
        autoplaySpeed: 5000, // 자동 스크롤 시 다음으로 넘어가는데 걸리는 시간 (ms)
        pauseOnHover: false, // 슬라이드 이동 시 마우스 호버하면 슬라이더 멈추게 설정
        vertical: false, // 세로 방향 슬라이드 옵션
        prevArrow: "<button type='button' class='slick-prev'>Previous</button>", // 이전 화살표 모양 설정nextArrow: "<button type='button' class='slick-next'>Next</button>", // 다음 화살표 모양 설정
        draggable: false, //드래그 가능 여부
      });

    //   nav

    $("header nav").hover(function(){
        $(this).find(".sub").stop().slideDown();
        $('.sub-bg').stop().slideDown();
    },function(){
        $(this).find(".sub").stop().slideUp();
        $('.sub-bg').stop().slideUp();
    });

    AOS.init({easing : 'ease-out-back', duration : 1000});
    
    // scroll

    $('.hero__scroll,.hero__scroll').on('click',function(e){
      $('html, body').animate({
        scrollTop: $(window).height()
      },4000);
    })

    $('.hero__scroll1').on('click',function(e){
      $('html, body').animate({
        scrollTop: $(window).height()
      },4000);
    })

    $('.hero__scroll2').on('click',function(e){
      $('html, body').animate({
        scrollTop: $(window).height()
      },4000);
    })

    
});




