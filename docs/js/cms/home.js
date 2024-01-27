class HomePage {
  #homePageContent;
  onUpdate() {
    this.#homePageContent = siteData.from('pagina-inicial');
    this.#updateHeroSection();
    this.#updateWorkSection();
    this.#updateClientSection();
  }

  #updateClientSection() {
    const clientTitleEl = document.querySelector('.client__title');

    clientTitleEl.innerHTML = this.#homePageContent.clientesTitulo;
  }

  #updateHeroSection() {
    const backgroundEl = document.querySelector('.hero');
    const titleEl = document.querySelector('.hero__title');
    const copyEl = document.querySelector('.hero__copy');
    const mdConverter = new showdown.Converter();

    titleEl.innerHTML = mdConverter.makeHtml(this.#homePageContent.titulo);
    copyEl.innerHTML = this.#homePageContent.subtitulo;
    const backgroundUri = getCMSImageUri(this.#homePageContent.background);
    backgroundEl.style.backgroundImage = `url(${backgroundUri})`;
  }

  #updateWorkSection() {
    const workTitleEl = document.querySelector('.work__title');
    workTitleEl.innerHTML = this.#homePageContent.servicosTitulo;

    this.#updateWorksCards(siteData.from('servicos'));
  }

  #updateWorksCards(services) {
    const parentEl = document.querySelector('.work__services');

    parentEl.innerHTML = '';

    services.forEach((service) => this.#createWorkCard(parentEl, service.attributes))

    setTimeout(() => {
      initWorkCarousel();
    });
  }
  #createWorkCard(parentEl, service) {
    const card = document.createElement('a');
    card.classList.add('work__back');
    card.ariaLabel = service.nome;
    card.href = '/services';
    card.style.backgroundImage = `url(${getCMSImageUri(service.imagem)})`;
    card.style.setProperty('background-size', 'cover', 'important')

    const title = document.createElement('h3');
    title.classList.add('work__text');
    title.innerText = service.nome.toUpperCase();
    card.append(title);

    parentEl.append(card);
  }
}
const homePage = new HomePage();
window.addEventListener('updateSiteData', homePage.onUpdate.apply(homePage));
