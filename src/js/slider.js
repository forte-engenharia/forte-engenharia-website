// Dual slider

const $dualCarousel = document.querySelector('.js-carousel--dual');

new Glider($dualCarousel,{
  slidesToShow:3,
  slidesToScroll:2,
  scrollLock: true,
  draggable:true,
  dots:'.js-carousel--dual-dots',
  arrows: {
    prev:".js-carousel--dual-prev",
    next:".js-carousel--dual-next",
  }
});

//Simple slider

const $simpleCarousel = document.querySelector('.js-carousel--simple');

new Glider($simpleCarousel,{
  slidesToShow:1,
  slidesToScroll:1,
  draggable:true,
  dragVelocity:2,
  dots:'.js-carousel--simple-dots',
  arrows:{
    prev:".js-carousel--simple-prev",
    next:".js-carousel--simple-next",
  },
  scrollLock: true,
});