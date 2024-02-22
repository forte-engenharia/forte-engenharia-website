class HomeClientsSection {
  #homePageContent;
  update() {
    this.#homePageContent = siteData.from('pagina-inicial');
    this.#updateClientTitle();
    this.#updateClientsSlides(siteData.from('clientes'));
  }
  #updateClientTitle() {
    const clientTitleEl = document.querySelector('.client__title');

    clientTitleEl.innerHTML = this.#homePageContent.clientesTitulo;
  }

  #updateClientsSlides(clients) {
    const parentEl = document.querySelector('.client__slides');

    parentEl.innerHTML = '';

    for (let idx = 0; idx < clients.length; idx++) {
      const radioNavigation = this.#createSlideRadioNavigator(idx);
      parentEl.append(radioNavigation);
    }
    this.#insertSlideSelectorParents(parentEl);

    clients.forEach((client, idx) => {
      let isFirst = false;
      if (idx === 0) isFirst = true;
      this.#insertSlideNavigations(idx);
      const clientSlide = this.#createClientSlide(client.attributes, isFirst);
      parentEl.append(clientSlide);
    })
    setTimeout(() => {
      initClientsSlides();
    })
  }
  #insertSlideSelectorParents(parentEl) {
    const navigationAutoEl = document.createElement('div');
    navigationAutoEl.classList.add('client__navigation-auto');

    const navigationManual = document.createElement('div');
    navigationManual.classList.add('client__navigation-manual');

    parentEl.append(navigationAutoEl, navigationManual);
  }

  #createSlideRadioNavigator(idx) {
    const radioId = `radio${idx + 1}`;
    const slideRadioInput = document.createElement('input');
    slideRadioInput.id = radioId;
    slideRadioInput.type = 'radio';
    slideRadioInput.name = 'radio-btn';

    return slideRadioInput;
  }

  #insertSlideNavigations(id) {
    const radioId = `radio${id + 1}`;
    const navigationAutoEl = document.querySelector('.client__navigation-auto');
    const navigationManualEl = document.querySelector('.client__navigation-manual');

    const btn = document.createElement('div')
    btn.classList.add('client__auto-btn');

    navigationAutoEl.append(btn);

    const label = document.createElement('label')
    label.classList.add('client__manual-btn');
    label.htmlFor = radioId;
    if (id === 0) label.classList.add('active');

    navigationManualEl.append(label);
  }

  #createClientSlide(client, isFirst) {
    const slide = document.createElement('div')
    slide.classList.add('client__slide');
    if (isFirst) slide.classList.add('first');
    const clientImage = document.createElement('img');
    clientImage.classList.add('client__picture');
    clientImage.src = getCMSImageUri(client.imagem);
    clientImage.alt = client.nome;
    clientImage.loading = 'lazy';

    const clientTitle = document.createElement('h3');
    clientTitle.classList.add('client__headline');
    clientTitle.innerText = client.nome;

    const clientServiceType = document.createElement('p');
    clientServiceType.classList.add('client__par');
    clientServiceType.innerHTML = `<strong>Serviço: </strong> ${client.servicoTipo}`

    slide.append(clientImage, clientTitle, clientServiceType);

    return slide;
  }
}