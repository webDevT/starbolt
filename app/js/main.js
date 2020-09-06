$(function(){

// start menu
$('.menu-btn').click(function(){
	$('.menu').addClass('active');
});
$('.menu__close, .menu__button').click(function(){
	$('.menu').removeClass('active');
});
jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".menu"); 
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div.removeClass('active');

    }
  });
});
jQuery(function($){
  $(document).mouseup(function (e){ 
    var div2 = $(".menu-btn"); 
    if (!div2.is(e.target) 
        && div2.has(e.target).length === 0) {
      div.removeClass('active');

    }
  });
});

$(".menu__leng-tab").click(function() {
	$(".menu__leng-tab").removeClass("active").eq($(this).index()).addClass("active");
}).eq(0).addClass("active");
// end menu

// start video modal
$('.video__button').click(function(){
  $('.video-modal').fadeIn();
});
$('.close-video').click(function(){
  $('.video-modal').fadeOut();
});

// end video modal

// start slider
$('.slider').slick({
prevArrow: false,
nextArrow: false,
slidesToShow: 4,
});



 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  focusOnSelect: true,
  pauseOnHover: true,

});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  pauseOnHover: true
});

$(document).ready(function() {
    $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  autoplay: true,
  fade: true,
  asNavFor: '.slider-nav',
  autoplaySpeed: 5000,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  focusOnSelect: true,
  pauseOnHover: true
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  focusOnSelect: true,
  pauseOnHover: true
});


    $( window ).on('resize',function() {
     $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  autoplay: true,
  asNavFor: '.slider-nav',
  autoplaySpeed: 5000,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  focusOnSelect: true,
  pauseOnHover: true
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: true,
  centerMode: true,
  focusOnSelect: true,
  pauseOnFocus: true,
  pauseOnDotsHover: true,
  pauseOnHover: true
});
  });

});
// end slider

//-----start reviews tab------
// $(".reviews__tab").click(function() {
//   $(".reviews__tab").removeClass("active").eq($(this).index()).addClass("active");
//   $(".reviews__tab-content").hide().eq($(this).index()).fadeIn(800)
// }).eq(0).addClass("active");
//-----end reviews tab--------

//-----start map tab------
$(".map-section-tab").click(function() {
  $(".map-section-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".map-section-tab-content").hide().eq($(this).index()).fadeIn(800)
}).eq(0).addClass("active");
//-----end map tab--------

$(".characteristics-tab").click(function() {
  $(".characteristics-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".characteristics-tab-content-item").hide().eq($(this).index()).fadeIn(800)
}).eq(0).addClass("active");

$(".solution-tab").click(function() {
  $(".solution-tab").removeClass("active").eq($(this).index()).addClass("active");
  $(".solution__tab-item").hide().eq($(this).index()).fadeIn(800)
}).eq(0).addClass("active");

$('.map-section-tab--scooter').click(function(){
  $('.route2').addClass('active');
  $('.map-dot1').addClass('active');
  $('.route1').hide();
  $('.map-dot2').removeClass('active');
  $('.white-route1').removeClass('fade-animation2');
  $('.map-dot5').removeClass('active');
  $('.map-dot3').removeClass('active');

  $('.route3').removeClass('active');
});
$('.map-section-tab--scooter2').click(function(){
  $('.route2').removeClass('active');
  $('.route3').addClass('active');
   $('.route1').hide();
   $('.map-dot2').addClass('active');
  $('.map-dot3').addClass('active');
  $('.map-dot5').addClass('active');
  $('.map-dot1').removeClass('active');
  

});
$('.map-section-tab--bike').click(function(){
  $('.route2').removeClass('active');
  $('.route3').removeClass('active');
  $('.route1').show();
  $('.map-dot1').removeClass('active');
  $('.map-dot5').removeClass('active');
  $('.map-dot3').removeClass('active');
  $('.map-dot2').removeClass('active');

});

$('.add-btn-wrapper').click(function(){
  $(this).toggleClass('active');
  $(this).parent().parent().parent().find('.product-details').slideToggle(1000);
});

$('.manifest__btn').click(function(){
  $(this).toggleClass('active');
  $(this).parent().toggleClass('active')
 
});

// var params = {
//   count: $(".reviews__tab-content").length,
//   now: 0
// }

// function set_active() {
//   if(params.now == params.count) {
//     params.now = 0;
//   }
//   $(".reviews__tab-content").hide();
//   $(".reviews__tab-content[data-id=\"" + params.now + "\"]").fadeIn();
//   params.now++;
// }
// set_active();

// setInterval(set_active, 6000);





// var params2 = {
//   count: $(".reviews__tab").length,
//   now: 0
// }

// function set_active2() {
//   if(params2.now == params2.count) {
//     params2.now = 0;
//   }
//   $(".reviews__tab").removeClass('active');
//   $(".reviews__tab[data-id=\"" + params2.now + "\"]").addClass('active');
//   params2.now++;
// }
// set_active2();

// setInterval(set_active2, 6000);



 });



jQuery(function($){
  $(document).mouseup(function (e){ 
    var div = $(".iframe__wrapper"); 
    var div2 = $(".video-modal");
    if (!div.is(e.target) 
        && div.has(e.target).length === 0) {
      div2.fadeOut();
    }
  });
});

$(document).on('click', '.video-modal', function() {
  var $video2 = $('#video-trailer'),
    src = $video2.attr('src');
 
  $video2.attr('src', src + 'pause');
});

$(document).on('click', '.video__button', function() {
  var $video2 = $('#video-trailer'),
    src = $video2.attr('src');
 
  $video2.attr('src', src + '&autoplay=1');




});

// ------start sticky header------
$(window).scroll(function() {
if ($(this).scrollTop() > 150){
$('.main-text-wrap').addClass("fade");
}
else{
$('.main-text-wrap').removeClass("fade");
}
});

$(window).scroll(function() {
if ($(this).scrollTop() > 400){
$('.main-text-wrap').addClass("none");
}
else{
$('.main-text-wrap').removeClass("none");
}
});


$(window).scroll(function() {
if ($(this).scrollTop() > 1 && $(this).scrollTop() < 250){
$('.header').addClass("hide");
}
else{
$('.header').removeClass("hide");
}
});
// var maintext = $('.main-text-wrap'),
//   scrollPrevs = 0;

// $(window).scroll(function() {
//   var scrolleds = $(window).scrollTop();
 
//   if ( scrolleds > 100 && scrolleds > scrollPrevs ) {
//     maintext.addClass('fade');
//   } else {
//     maintext.removeClass('fade');
//   }
//   scrollPrevs = scrolleds;
// });



var header = $('.header'),
  scrollPrev = 0;

$(window).scroll(function() {
  var scrolled = $(window).scrollTop();
 
  if ( scrolled > 100 && scrolled > scrollPrev ) {
    header.removeClass('sticky');

  } else {
    header.addClass('sticky');
  }
  scrollPrev = scrolled;
});


// $(window).scroll(function() {
// if ($(this).scrollTop() > 10){
// $('.main-screeen__images').addClass("active");
// }
// else{
// $('.main-screeen__images').removeClass("active");
// }
// });
//-------end sticky header--------

$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});

$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $('.solution-tab').on("click", function () {
        //if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 500 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});
