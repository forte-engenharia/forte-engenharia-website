//journey slider

const $journeyCarousel = document.querySelector('.js-carousel--story')

new Glider($journeyCarousel,{
  slidesToShow:3,
  slidesToScroll:3,
  draggable:true,
  dragVelocity:2,
  dots:'.js-carousel--story-dots',
  arrows:{
    prev:".js-carousel--story-prev",
    next:".js-carousel--story-next",
  },
  scrollLock: true,
});
