// Work slider

const $workCarousel = document.querySelector('.js-carousel--dual');

new Glider($workCarousel,{
  slidesToShow:2,
  slidesToScroll:2,
  scrollLock: true,
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


//journey slider

const $journeyCarousel = document.querySelector('js-carousel--story')

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
