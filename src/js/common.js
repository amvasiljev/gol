$(function () {
  $('.lazy').Lazy();
});



var navItem = $('.nav__item');
var bodyWidth = $('body').outerWidth();

var navWidth = 0;
navItem.each(function () {
  var itemWidth = $(this).outerWidth();
  navWidth += itemWidth;
})


var navMore = $('.nav__more');


navMore.hide();

if (navWidth >= bodyWidth) {
  navMore.show();
  $('<div>').addClass('nav__hide').appendTo(navMore).hide()
  var tempWidth = 0;
  navItem.each(function () {
    var itemW = $(this).outerWidth();

    if ((tempWidth + 300) <= bodyWidth) {
      tempWidth += itemW;
      console.log('динамическая ширина  ' + tempWidth);
    } else {
      $(this).appendTo($('.nav__hide'))
    }
  })
} else {
  navMore.hide();
  $('.nav__hide').remove();
}


navMore.hover(
  
  function () {
    $('.nav__hide').dequeue().stop(true, true).fadeIn()
    $('.nav').addClass('nav_active')
    $('<div>').addClass('nav__close').appendTo($('.nav__hide'))
   
  },
  function () {
    $('.nav__hide').dequeue().stop(true, true).fadeOut();
    $('.nav').removeClass('nav_active')
    $('.nav__close').remove()
  }
)


$('.nav__close').on('click', function(){
  console.log('click');
})



$('.slider__box_main').slick({
  lazyload: 'ondemand',
  infinite: false,
  dots: false,
  nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_main">',
  prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_main">',
  appendArrows: $('.slider__arrows_main'),
})
$('.slider__box_fk').slick({
  lazyload: 'ondemand',
  infinite: false,
  dots: false,
  nextArrow: '<div class="slider__arrow slider__arrow_next slider__arrow_next_fk">',
  prevArrow: '<div class="slider__arrow slider__arrow_prev slider__arrow_prev_fk">',
  appendArrows: $('.slider__arrows_fk'),
})

$('.slider-team__box').slick({
  lazyload: 'ondemand',
  infinite: false,
  slidesToShow: 12,
  slidesToScroll: 3,
  dots: false,
  nextArrow: '<div class="slider-team__arrow slider-team__arrow_next slider-team__arrow_next">',
  prevArrow: '<div class="slider-team__arrow slider-team__arrow_prev slider-team__arrow_prev">',
  appendArrows: $('.slider-team__arrows'),
})


$('.shedule__select').niceSelect();

$('.schedule__date_choice').datepicker();

jQuery(function ($) {
  $.datepicker.regional['ru'] = {
    closeText: 'Закрыть',
    prevText: '<Пред',
    nextText: 'След>',
    currentText: 'Сегодня',
    monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    monthNamesShort: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
      'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
    ],
    dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
    dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
    dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
    weekHeader: 'Нед',
    dateFormat: 'dd.mm.yy',
    firstDay: 1,
    isRTL: false,
    showMonthAfterYear: false,
    yearSuffix: ''
  };
  $.datepicker.setDefaults($.datepicker.regional['ru']);
});



$('.section').last().addClass('section_final')


// // inputs
// $(document).on('focus', 'input[type="text"]', function () {
//   $(this).addClass('input_focus');
// })
// $(document).on('blur', 'input[type="text"]', function () {
//   $(this).removeClass('input_focus');
// })

// // inputs

// //mobile menu

// var burger = $('.burger');
// var mobileMenu = $('.nav').clone().html();
// var closeMenu = $('<div>').addClass('nav__close');
// var auth = $('.auth').clone().addClass('auth_mobile').removeClass('auth').append(closeMenu);
// var contacts = $('.header__contacts').clone().addClass('header__contacts_mobile').removeClass('header__contacts')

// auth.find('.auth__reg').addClass('auth__reg_mobile')
// auth.find('.auth__log').addClass('auth__log_mobile')

// contacts.find('.email').addClass('email_mobile')
// contacts.find('.email__text').addClass('email__text_mobile')
// contacts.find('.email__link').addClass('email__link_mobile')
// contacts.find('.phone__text').addClass('phone__text_mobile')
// contacts.find('.phone__link').addClass('phone__link_mobile')

// burger.on('click', function () {
//   if ($('.nav_mobile').length) {
//     $('.nav_mobile').fadeIn(300);
//   } else {
//     $('<div>').addClass('nav_mobile').prependTo('body').append(mobileMenu);
//     $('.nav_mobile').prepend(auth).append(contacts).find('.nav__item').addClass('nav__item_mobile')
//   }
//   $('body').addClass('stop_scrolling ')
// })

// closeMenu.on('click', function () {
//   $('.nav_mobile').fadeOut(300);
//   $('body').removeClass('stop_scrolling ')
// })


// $(document).on('click', '.nav__item', function () {
//   closeMenu.trigger('click');
// })


// //mobile menu


// // slider 


// $('.slider__box').slick({
//   lazyload: 'ondemand',
//   // infinite: false,
//   fade: true,
//   cssEase: 'linear',
//   nextArrow: '<div class="slider__arrow slider__arrow_next">',
//   prevArrow: '<div class="slider__arrow slider__arrow_prev">',
//   // appendArrows: $('.slider__arrows'),
// })


// // slider 

// // news
// $('.news').last().addClass('news_final');
// // news



if (/Android|webOS|iPhone|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  $('.nav__hide').appendTo('body')
}
