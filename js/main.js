$(function(){
    $('.header-slider').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="./images/prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./images/next.svg" alt="next"></button>',
        vertical: true,
        responsive: [
          {
            breakpoint: 401,
            settings: {
              dots: false,
              arrows: false,
              autoplay: true,
              autoplaySpeed: 3000,
            }
          }
        ],
    });


    $('.product__name').slick({
        slidesToShow: 4.5,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.product__content',
        vertical: true,
        centerMode: true,
        prevArrow: '<button type="button" class="product-prev"><img src="./images/product-prev.svg" alt="prev"></button>',
        nextArrow: '<button type="button" class="product-next"><img src="./images/product-next.svg" alt="next"></button>',
        responsive: [
          {
            breakpoint: 901,
            settings: {
              vertical: false,
              slidesToShow: 3,
              arrows: false,
              dots: true,
              centerMode: false,
            }
          },
          {
            breakpoint: 701,
            settings: {
              vertical: false,
              slidesToShow: 2,
              arrows: false,
              dots: true,
              centerMode: false,
            }
          },
          {
            breakpoint: 461,
            settings: {
              vertical: false,
              slidesToShow: 1,
              arrows: false,
              dots: true,
              centerMode: false,
            }
          }
        ],
      });
      $('.product__content').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.product__name',
        fade: true,
        arrows: false,
      });

      $('.menu__btn').on('click',function(){
        $('.menu__list').toggleClass('menu__list--active');
      });
});