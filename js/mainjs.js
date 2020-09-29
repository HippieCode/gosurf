$(document).ready(function(){
    $('.header__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
        asNavFor: '.slider-dots',
        arrows: true,
    });

    $('.slider-dots').slick({
        // centerMode: true,
        focusOnSelect: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        infinite: false,
        draggable: false,
        swipe: false,
        touchMove: false,
        asNavFor: '.header__slider',
        responsive: [
          {
            breakpoint: 961,
            settings: "unslick"
          }
        ]
    });

    $('.surf-slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        // draggable: false,
        // swipe: false,
        touchMove: false,
        focusOnSelect: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
        asNavFor: '.slider-map',
        // autoplay: true,
        // autoplaySpeed: 2000,
      responsive: [
                    {
                      breakpoint: 1210,
                      settings: {
                      slidesToShow: 3,
                    }
                  },
                  {
                    breakpoint: 900,
                    settings: {
                      slidesToShow: 2,
                      // centerMode: true,
                    }
                  },
                  {
                    breakpoint: 720,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      // centerMode: true,
                    }
                  },
                  {
                    breakpoint: 426,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1,
                      centerMode: false,
                    }
                  },
                ]
    });

    $('.slider-map').slick({
        // centerMode: true,
        focusOnSelect: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        infinite: false,
        draggable: false,
        swipe: false,
        arrows: false,
        touchMove: false,
        asNavFor: '.surf-slider',
        responsive: [
                    {
                      breakpoint: 1102,
                      settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                      }
                    },
                    {
                      breakpoint: 900,
                      settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        // centerModer: true,
                        // variableWidth: true,
                        // variableHeight: true,
                      }
                    },
                    {
                      breakpoint: 720,
                      settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                      }
                    },
                  ]
    });

    $('.holder__slider, .shop__slider').slick({
        infinite: true,
        fade: true,
        prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
        nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
    });


    $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../images/plus.svg" alt="rating"></div><div class="quantity-button quantity-down"><img src="../images/minus.svg" alt="rating"></div></div>').insertAfter('.quantity input');
    $('.quantity').each(function() {
      var spinner = $(this),
        input = spinner.find('input[type="number"]'),
        btnUp = spinner.find('.quantity-up'),
        btnDown = spinner.find('.quantity-down'),
        min = input.attr('min'),
        max = input.attr('max');

      btnUp.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue >= max) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue + 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

      btnDown.click(function() {
        var oldValue = parseFloat(input.val());
        if (oldValue <= min) {
          var newVal = oldValue;
        } else {
          var newVal = oldValue - 1;
        }
        spinner.find("input").val(newVal);
        spinner.find("input").trigger("change");
      });

    });


    $('.quantity-button').on('click', function(){
      let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);
    });

    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
    $('.summ').html('$' + summ);


$('.surfboard-box__circle').on('click', function(){
  $(this).toggleClass('active')
});

new WOW().init();

$('.menu-btn').on('click', function(){
  $('.menu').toggleClass('active');
});

});





// $(document).ready(function(){
//   $('.header__slider').slick({
//       infinite: true,
//       fade: true,
//       prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
//       nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
//       asNavFor: '.slider-dots',
//       arrows: true,
//   });

//   $('.slider-dots').slick({
//       // centerMode: true,
//       focusOnSelect: true,
//       slidesToShow: 4,
//       slidesToScroll: 4,
//       infinite: false,
//       draggable: false,
//       swipe: false,
//       touchMove: false,
//       asNavFor: '.header__slider',
//   });

//   $('.surf-slider').slick({
//       infinite: true,
//       slidesToShow: 4,
//       slidesToScroll: 1,
//       // draggable: false,
//       // swipe: false,
//       touchMove: false,
//       focusOnSelect: true,
//       prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
//       nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
//       asNavFor: '.slider-map',
//       responsive: [
//                     {
//                       breakpoint: 1210,
//                       settings: {
//                       slidesToShow: 3,
//                     }
//                   },
//                   {
//                     breakpoint: 900,
//                     settings: {
//                       slidesToShow: 2,
//                       // centerMode: true,
//                     }
//                   },
//                   {
//                     breakpoint: 720,
//                     settings: {
//                       slidesToShow: 1,
//                       slidesToScroll: 1,
//                       centerMode: true,
//                     }
//                   },
//                   {
//                     breakpoint: 426,
//                     settings: {
//                       slidesToShow: 1,
//                       slidesToScroll: 1,
//                       centerMode: false,
//                     }
//                   },
//                 ]
//   });

//   $('.slider-map').slick({
//       // centerMode: false,
//       focusOnSelect: true,
//       slidesToShow: 8,
//       slidesToScroll: 8,
//       infinite: false,
//       draggable: false,
//       swipe: false,
//       touchMove: false,
//       arrows: false,
//       asNavFor: '.surf-slider',
//       responsive: [
//           {
//             breakpoint: 1102,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 1,
//             }
//           },
//           {
//             breakpoint: 900,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 1,
//               // centerModer: true,
//               // variableWidth: true,
//               // variableHeight: true,
//             }
//           },
//           {
//             breakpoint: 720,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//             }
//           },
//         ]
        
//   });

//   $('.holder__slider, .shop__slider').slick({
//       infinite: true,
//       fade: true,
//       prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
//       nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
//   });














//   $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../images/plus.svg" alt="rating"></div><div class="quantity-button quantity-down"><img src="../images/minus.svg" alt="rating"></div></div>').insertAfter('.quantity input');
//   $('.quantity').each(function() {
//     var spinner = $(this),
//       input = spinner.find('input[type="number"]'),
//       btnUp = spinner.find('.quantity-up'),
//       btnDown = spinner.find('.quantity-down'),
//       min = input.attr('min'),
//       max = input.attr('max');

//     btnUp.click(function() {
//       var oldValue = parseFloat(input.val());
//       if (oldValue >= max) {
//         var newVal = oldValue;
//       } else {
//         var newVal = oldValue + 1;
//       }
//       spinner.find("input").val(newVal);
//       spinner.find("input").trigger("change");
//     });

//     btnDown.click(function() {
//       var oldValue = parseFloat(input.val());
//       if (oldValue <= min) {
//         var newVal = oldValue;
//       } else {
//         var newVal = oldValue - 1;
//       }
//       spinner.find("input").val(newVal);
//       spinner.find("input").trigger("change");
//     });

    

//   });



//   $('.quantity-button').on('click', function(){
//     let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
//   $('.summ').html('$' + summ);
//   });

//   let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
//   $('.summ').html('$' + summ);




// $('.surfboard-box__circle').on('click', function(){
// $(this).toggleClass('active')
// });






// });












































































$(document).ready(function(){
  $('.header__slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
      asNavFor: '.slider-dots',
      arrows: true,
  });

  $('.slider-dots').slick({
      // centerMode: true,
      focusOnSelect: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: false,
      draggable: false,
      swipe: false,
      touchMove: false,
      asNavFor: '.header__slider',
      responsive: [
        {
          breakpoint: 961,
          settings: "unslick"
        }
      ]
  });

  $('.surf-slider').slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      // draggable: false,
      // swipe: false,
      touchMove: false,
      focusOnSelect: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
      asNavFor: '.slider-map',
      // autoplay: true,
      // autoplaySpeed: 2000,
      responsive: [
          {
            breakpoint: 1210,
            settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
          }
        },
      ]
  });

  $('.slider-map').slick({
      // centerMode: true,
      focusOnSelect: true,
      slidesToShow: 8,
      slidesToScroll: 1,
      infinite: false,
      draggable: false,
      swipe: false,
      arrows: false,
      touchMove: false,
      asNavFor: '.surf-slider',
      responsive: [
        {
          breakpoint: 1102,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 2,
            centerModer: true,
          }
        },
      ]
  });

  $('.holder__slider, .shop__slider').slick({
      infinite: true,
      fade: true,
      prevArrow: '<img class="slider-arrows slider-arrows__left" src="images/arrows-left.svg" alt="">',
      nextArrow: '<img class="slider-arrows slider-arrows__right" src="images/arrows-right.svg" alt="">',
  });


  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="../images/plus.svg" alt="rating"></div><div class="quantity-button quantity-down"><img src="../images/minus.svg" alt="rating"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = $(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });


  $('.quantity-button').on('click', function(){
    let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);
  });

  let summ = $('.nights').val() * $('.summ').data('nights') + ($('.guests').val() - 1) * $('.summ').data('guests');
  $('.summ').html('$' + summ);


$('.surfboard-box__circle').on('click', function(){
$(this).toggleClass('active')
});

new WOW().init();

$('.menu-btn').on('click', function(){
$('.menu').toggleClass('active');
});

});