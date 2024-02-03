class ScheduleSection {
  #scheduleContent;
  update() {
    this.#scheduleContent = siteData.from('contato-secao');
    this.#updateContent();
  }
  #updateContent() {
    const scheduleTitleEl = document.querySelector('.schedule__heading');
    const scheduleButton = document.querySelector('.schedule__bta');

    scheduleTitleEl.innerHTML = convertMarkdownToHtml(this.#scheduleContent.titulo);
    scheduleButton.innerHTML = this.#scheduleContent.botaoTexto;
    scheduleButton.href = this.#scheduleContent.botaoLink;
  }
}
