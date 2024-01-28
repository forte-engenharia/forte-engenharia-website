class ServicesCardsList {
  update() {
    this.#updateServicesCards(siteData.from('servicos'));
  }
  #updateServicesCards(services) {
    const parentDiv = document.querySelector('.show__direction');

    parentDiv.innerHTML = '';

    services.forEach((service) => {
      parentDiv.append(this.#createServiceCard(service.attributes));
    });
  }

  #createServiceCard(service) {
    const card = document.createElement('div');
    card.classList.add('show__same');

    const cardImg = document.createElement('img');
    cardImg.classList.add('show__pic');
    cardImg.loading = 'lazy';
    cardImg.src = getCMSImageUri(service.imagem);

    const cardContent = document.createElement('div');
    cardContent.classList.add('show__backin');
    const subtitle = document.createElement('h3');
    subtitle.classList.add('show__subtitle');
    subtitle.innerHTML = `<strong>${service.nome.toUpperCase()}<strong/>`

    const introText = document.createElement('p');
    introText.classList.add('show__indent');
    introText.innerText = service.textoIntro;

    const textLines = service.texto.split('\n');
    const textLinesElements = textLines.map((text) => {
      const line = document.createElement('p');
      line.classList.add('show__elsep');
      line.innerHTML = convertMarkdownToHtml(text);

      return line;
    });
    cardContent.append(subtitle, introText, ...textLinesElements);

    card.append(cardImg, cardContent);
    return card;
  }
}