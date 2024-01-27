class ScheduleSection {
  #scheduleContent;
  update() {
    this.#scheduleContent = siteData.from('contato-secao');
    this.#updateContent();
  }
  #updateContent() {
    const scheduleTitleEl = document.getElementsByClassName('schedule__heading')[0];
    const scheduleButton = document.getElementsByClassName('schedule__bta')[0];

    scheduleTitleEl.innerHTML = convertMarkdownToHtml(this.#scheduleContent.titulo);
    scheduleButton.innerHTML = this.#scheduleContent.botaoTexto;
    scheduleButton.href = this.#scheduleContent.botaoLink;
  }
}
