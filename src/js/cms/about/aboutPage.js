class AboutPage {
  #aboutContent;
  update() {
    this.#aboutContent = siteData.from('sobre');
    this.#updateMainContent();
  }
  #updateMainContent() {
    const titleEl = document.querySelector('.talks__title');
    const mainTextEl = document.querySelector('.box__say');
    const missionElements = document.getElementsByClassName('mission__message');

    titleEl.innerHTML = this.#aboutContent.titulo;
    mainTextEl.innerHTML = convertMarkdownToHtml(this.#aboutContent.texto);

    missionElements[0].innerHTML = this.#aboutContent.missao;
    missionElements[1].innerHTML = this.#aboutContent.valores;
    missionElements[2].innerHTML = this.#aboutContent.visao;
  }
}

const aboutPage = new AboutPage();
const aboutTeamMembers = new AboutTeamMembers();
const aboutTimeline = new AboutTimeline();

window.addEventListener('updateSiteData', () => {
  aboutPage.update();
  aboutTeamMembers.update();
  aboutTimeline.update();
});