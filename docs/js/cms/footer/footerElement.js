class FooterElement {
  update() {
    this.#updateImage();
  }
  #updateImage() {
    const parentEl = document.querySelector('.contacts__information');

    const footerImg = document.createElement('img');
    footerImg.classList.add('contacts__logo');
    footerImg.alt = 'Logo';
    footerImg.src = '/assets/svg/logo_rodape.svg';
    footerImg.loading = 'lazy';

    parentEl.insertBefore(footerImg, parentEl.firstElementChild);
  }
}

const footerElement = new FooterElement();
const footerLists = new FooterLists()

window.addEventListener('updateSiteData', () => {
  footerLists.update();
  footerElement.update();
});