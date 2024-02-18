class ServiceCarouselPhotos {
  static update(providedService) {
    this.#updateTitle(providedService.nome);
    this.#updatePhotos(providedService);
  }
  static #updateTitle(serviceName) {
    const title = document.querySelector('.carousel_service_title');

    title.textContent = serviceName;
  }
  static #updatePhotos(providedService) {
    const parentDiv = document.querySelector('.service_photos');

    parentDiv.innerHTML = '';

    const photos = providedService.fotos.map((foto) => {
      return this.#createPhotoSlide(getCMSImageUri(foto.imagem), foto.tipoServico);
    });

    parentDiv.append(...photos);
  }
  static #createPhotoSlide(photoUri, serviceType) {
    const slide = document.createElement('li');

    slide.classList.add('service_photo');
    slide.classList.add('splide__slide');

    const slidePhoto = document.createElement('img');
    slidePhoto.src = photoUri;
    slidePhoto.alt = serviceType;

    const slideCaption = document.createElement('p');
    slideCaption.classList.add('service_photo_legend');
    slideCaption.innerHTML = `<strong>Serviço: </strong>${serviceType}`

    slide.append(slidePhoto, slideCaption);

    return slide;
  }
}

function clickOutsideCarousel() {
  const carousel = document.querySelector('.carousel_overlay');
  const containerEl = document.querySelector('.carousel_container');

  if (!containerEl.contains(event.target))
    carousel.classList.remove('show');
}

function toggleCarousel(providedService) {
  const carousel = document.querySelector('.carousel_overlay');
  const isOpen = carousel.classList.contains('show');

  if (!isOpen)
    carousel.classList.add('show');
  else carousel.classList.remove('show');

  if (providedService)
    ServiceCarouselPhotos.update(providedService);

  initServicePhotoCarousel();
}