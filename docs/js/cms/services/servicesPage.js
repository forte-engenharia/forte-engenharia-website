class ServicePage {
  #servicePageContent;
  update() {
    this.#servicePageContent = siteData.from('servicos-pagina');
    this.#updateMainContent();
  }
  #updateMainContent() {
    const titleEl = document.querySelector('.office__titles');
    const mainTextEl = document.querySelector('.box__say');

    titleEl.innerHTML = `<strong>${this.#servicePageContent.titulo}</strong>`;
    mainTextEl.innerHTML = convertMarkdownToHtml(this.#servicePageContent.subtitulo);
  }
}

const servicePage = new ServicePage();
const servicesCardsList = new ServicesCardsList();

window.addEventListener('updateSiteData', () => {
  servicePage.update();
  servicesCardsList.update();
});