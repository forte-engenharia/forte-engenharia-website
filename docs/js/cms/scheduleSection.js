class ScheduleSection {
  #scheduleContent;
  onUpdate() {
    this.#scheduleContent = siteData.from('contato-secao');
    this.#updateContent(new showdown.Converter());
  }
  #updateContent(mdConverter) {
    const scheduleTitleEl = document.getElementsByClassName('schedule__heading')[0];
    const scheduleButton = document.getElementsByClassName('schedule__bta')[0];

    scheduleTitleEl.innerHTML = mdConverter.makeHtml(this.#scheduleContent.titulo);
    scheduleButton.innerHTML = this.#scheduleContent.botaoTexto;
    scheduleButton.href = this.#scheduleContent.botaoLink;
  }
}
