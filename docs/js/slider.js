// Work slider

const $workCarousel = document.querySelector('.js-carousel--dual');

new Glider($workCarousel,{
  slidesToShow:2,
  slidesToScroll:2,
  scrollLock: true,
  dragVelocity: 2,
  draggable:true,
  dots:'.js-carousel--dual-dots',
  arrows: {
    prev:".js-carousel--dual-prev",
    next:".js-carousel--dual-next",
  }, 
  responsive: [ 
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 200,
      }
    },{
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    }
  ]
});

//Simple slider

const $clientCarousel = document.querySelector('.js-carousel--simple');

new Glider($clientCarousel,{
  autoplay: 2000,
  slidesToShow:1,
  duration:.5,
  draggable: true,
  dragVelocity:0.9,
  scrollLock: true,
  rewind: true,
  dots:'.js-carousel--simple-dots',
  arrows:{
  prev:".js-carousel--simple-prev",
  next:".js-carousel--simple-next",
},
});

function sliderAuto(slider, miliseconds) {
  slider.isLastSlide = function() {
    return slider.page >= slider.dots.childElementCount - 1;
  }
 
  var slide = function() {
    slider.slideTimeout = setTimeout(function() {
      function slideTo() {
        return slider.isLastSlide() ? 0 : slider.page + 1;
      }
 
      slider.scrollItem(slideTo(), true);
    }, miliseconds);
  }
 
  slider.ele.addEventListener('glider-animated', function(event) {
    window.clearInterval(slider.slideTimeout);
    slide();
  });
 
  slide();
 }