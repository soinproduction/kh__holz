$(function () {
  $('.main-slider__box').slick({
    accessibility: true,
    arrows: false,
    dots: true,
    speed: 1500,
    dotsClass: "main-slider__dots",
  });


  var $status = $('.count');
  var $slickElement = $('.main-slider2');

  $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
      var i = (currentSlide ? currentSlide : 0) + 1;
      $status.text(i + '/' + slick.slideCount);
  });




  $('.main-slider2').slick({
    accessibility: true,
    arrows: true,
    dots: false,
    speed: 1500,
    autoPlay:true,
    asNavFor: '.secondary-slider',
    prevArrow: '<div class="slick__slider-left slick__slider__btn"><img src="../img/left-arrow.svg" alt="Слайд"></div>',
    nextArrow: '<div class="slick__slider-right slick__slider__btn"><img src="../img/right-arrows.svg" alt="Слайд"></div>',
  });

  $('.secondary-slider').slick({
    accessibility: true,
    arrows: false,
    dots: false,
    speed: 1500,
    slidesToShow:1,
    asNavFor: '.main-slider2',
  });


  $('.second-slider').slick({
    accessibility: true,
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass: "second-slider__dots",
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });

  $('.top__brand-slider').slick({
    accessibility: true,
    prevArrow: '<button class="slick__slider-left slick__slider__btn"></button>',
    nextArrow: '<button class="slick__slider-right slick__slider__btn"></button>',
    dots: false,
    infinite: true,
    dotsClass: "baner__slider-dots",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 1480,
        settings: {
          slidesToShow: 11,
          slidesToScroll: 1,
          infinite: true,
          centerMode: false,
          dots: false
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          arrows: false,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        }
      }
    ]
  });
    $('.product-item__favorite').click(function () {
      $(this).toggleClass('product-item__favorite-active')
    });

    var acc = document.getElementsByClassName("search");
    var i;

    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function () {
        this.classList.toggle("search__active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
          panel.style.maxHeight = null;
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        }
      });
    }

    $(document).ready(function() {
      $(".open-image").fancybox();
    });




    $('.tab').on('click', function(e){
      e.preventDefault();
      $('.tab-section').removeClass('tabs-content--active');
      $('.tab').removeClass('tab_active');

      $($(this).attr('href')).addClass('tabs-content--active');
      $(this).addClass('tab_active');
  });






});
