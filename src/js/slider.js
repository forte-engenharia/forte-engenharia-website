// Work slider

const $workCarousel = document.querySelector('.js-carousel--dual');

new Glider($workCarousel, {
  slidesToShow: 2,
  slidesToScroll: 2,
  scrollLock: true,
  dragVelocity: 1,
  draggable: true,
  dots: '.js-carousel--dual-dots',
  arrows: {
    prev: ".js-carousel--dual-prev",
    next: ".js-carousel--dual-next",
  },
  responsive: [
    {
      breakpoint: 780,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        itemWidth: 200,
      }
    }, {
      breakpoint: 1180,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 2,
      }
    }
  ]
});