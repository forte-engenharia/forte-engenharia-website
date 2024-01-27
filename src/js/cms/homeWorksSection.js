class HomeWorksSection {
  #homePageContent;
  onUpdate() {
    this.#homePageContent = siteData.from('pagina-inicial');
    this.#updateTitle();
    this.#updateWorksCards(siteData.from('servicos'));
  }

  #updateTitle() {
    const workTitleEl = document.querySelector('.work__title');
    workTitleEl.innerHTML = this.#homePageContent.servicosTitulo;
  }

  #updateWorksCards(services) {
    const parentEl = document.querySelector('.work__services');

    parentEl.innerHTML = '';

    services.forEach((service) =>
      parentEl.append(this.#createWorkCard(service.attributes)))

    setTimeout(() => {
      initWorkCarousel();
    });
  }
  #createWorkCard(service) {
    const card = document.createElement('a');
    card.classList.add('work__back');
    card.ariaLabel = service.nome;
    card.href = '/services';
    card.style.backgroundImage = `url(${getCMSImageUri(service.imagem)})`;

    const title = document.createElement('h3');
    title.classList.add('work__text');
    title.innerText = service.nome.toUpperCase();
    card.append(title);

    return card;
  }
}