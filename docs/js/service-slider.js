const initServicePhotoCarousel = () => {
  const splide = new Splide('.carousel_container', {
    type: 'loop',
    perPage: 1,
    autoplay: true,
    interval: 10000,
    pagination: false
  })

  splide.mount();
};