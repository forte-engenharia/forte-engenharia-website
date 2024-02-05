class NavbarList {
  #contact
  update() {
    this.#contact = siteData.from('contato');
    this.#updateList();
  }
  #updateList() {
    const parentEl = document.querySelector('.header__list');

    parentEl.innerHTML = '';

    const links = [
      { href: '/', text: 'Home' },
      { href: '/about', text: 'Quem somos' },
      { href: '/services', text: 'Serviços' },
      { href: this.#contact.whatsappLink, text: 'Contato', button: true }
    ]

    links.forEach((link) => {
      parentEl.append(this.#createListItem(link));
    });
  }
  #createListItem(item) {
    const headerItem = document.createElement('li');
    headerItem.classList.add('header__item');

    const headerLink = document.createElement('a');
    headerLink.classList.add('header__link');
    headerLink.href = item.href
    headerLink.innerText = item.text;
    if (item.button) {
      headerLink.classList.add('header__link--cta');
      headerLink.target = '_blank';
    }

    headerItem.append(headerLink);

    return headerItem;
  }
}

const navbarList = new NavbarList();

window.addEventListener('updateSiteData', () => {
  navbarList.update();
});