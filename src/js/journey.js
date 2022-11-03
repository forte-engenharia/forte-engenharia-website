//journey slider

const $journeyCarousel = document.querySelector('.js-carousel--story')

new Glider($journeyCarousel,{
  slidesToShow:2,
  slidesToScroll:2,
  draggable:true,
  dragVelocity:2,
  dots:'.js-carousel--story-dots',
  arrows:{
    prev:".js-carousel--story-prev",
    next:".js-carousel--story-next",
  },
  scrollLock: true,
  responsive: [ 
    {
      breakpoint: 910,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 200,
      }
    },{
      breakpoint: 925,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    }
  ]
});
