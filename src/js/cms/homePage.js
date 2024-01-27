class HomePage {
  #homePageContent;
  onUpdate() {
    this.#homePageContent = siteData.from('pagina-inicial');
    this.#updateMainContent(new showdown.Converter());
  }

  #updateMainContent(mdConverter) {
    const backgroundEl = document.querySelector('.hero');
    const titleEl = document.querySelector('.hero__title');
    const copyEl = document.querySelector('.hero__copy');

    titleEl.innerHTML = mdConverter.makeHtml(this.#homePageContent.titulo);
    copyEl.innerHTML = this.#homePageContent.subtitulo;
    const backgroundUri = getCMSImageUri(this.#homePageContent.background);
    backgroundEl.style.backgroundImage = `url(${backgroundUri})`;
  }
}

const homePage = new HomePage();
const homeWorksSection = new HomeWorksSection();
const homeClientsSection = new HomeClientsSection();
const scheduleSection = new ScheduleSection();

window.addEventListener('updateSiteData', () => {
  homePage.onUpdate()
  homeWorksSection.onUpdate();
  homeClientsSection.onUpdate();
  scheduleSection.onUpdate();
});
