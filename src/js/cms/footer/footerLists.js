class FooterLists {
  #contact;
  #services;
  update() {
    this.#contact = siteData.from('contato');
    this.#services = siteData.from('servicos');
    this.#updateLists();
  }
  #updateLists() {
    const parentEl = document.querySelector('.contacts__information');
    parentEl.innerHTML = '';

    const navigationLinks = [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'Quem somos' },
      { href: '/services', text: 'Serviços' },
      { href: this.#contact.whatsappLink, target: '_blank', text: 'Contatos' }]

    const servicesLinks = this.#services.map(({ attributes: service }) => ({
      href: `/services#${service.nome}`, text: service.nome
    }));
    const contactsLinks = [
      {
        icon: {
          src: "/assets/svg/number.svg",
          alt: "Número",
        },
        href: this.#contact.whatsappLink,
        text: this.#contact.whatsapp,
        target: "_blank"
      },
      {
        icon: {
          src: "/assets/svg/email.svg",
          alt: "E-mail",
        },
        href: this.#contact.emailLink,
        text: this.#contact.email,
        target: "_blank"
      },
      {
        icon: {
          src: "/assets/svg/insta.svg",
          alt: "Instagram",
        },
        href: this.#contact.instagramLink,
        text: this.#contact.instagram,
        target: "_blank"
      },
      {
        icon: {
          src: "/assets/svg/localization.svg",
          alt: "Localização",
        },
        href: this.#contact.enderecoLink,
        text: this.#contact.endereco,
        target: "_blank"
      }
    ]

    const navigationLinksList = this.#createList('Institucional', navigationLinks);
    const servicesLinksList = this.#createList('Serviços', servicesLinks);
    const contactsLinksList = this.#createList('Contatos', contactsLinks);

    parentEl.append(navigationLinksList, servicesLinksList, contactsLinksList);
  }
  #createList(title, links) {
    const list = document.createElement('ul');
    list.classList.add('contacts__list');

    const listTitle = document.createElement('li');
    listTitle.classList.add('contacts__headtitle');

    listTitle.innerHTML = `<strong>${title}</strong>`;

    const listItems = links.map((content) => {
      const listItem = document.createElement('li');
      listItem.classList.add('contacts__roll');

      const listItemLink = document.createElement('a');
      listItemLink.classList.add('contacts__link');
      listItemLink.href = content.href;
      if (content.target)
        listItemLink.target = content.target;

      listItemLink.innerText = content.text;
      if (content.icon) {
        listItemLink.classList.add('contacts__link--line');
        const iconImg = document.createElement('img');
        iconImg.classList.add('contacts__frame');
        iconImg.alt = content.icon.alt;
        iconImg.src = content.icon.src;
        iconImg.loading = 'lazy';
        listItemLink.append(iconImg);
      }

      listItem.append(listItemLink);
      return listItem;
    });

    list.append(listTitle, ...listItems);

    return list;
  }
} 