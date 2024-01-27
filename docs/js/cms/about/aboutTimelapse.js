class AboutTimeline {
  #aboutContent;
  #timelineYears;
  update() {
    this.#aboutContent = siteData.from('sobre');
    this.#timelineYears = siteData.from('linhadotempos');
    this.#updateMainContent();
    this.#updateTimeline()
  }

  #updateMainContent() {
    const titleEl = document.querySelector('.journey__title');
    const subtitleEl = document.querySelector('.journey__subtitle');

    titleEl.innerHTML = this.#aboutContent.historiaTitulo;
    subtitleEl.innerHTML = convertMarkdownToHtml(this.#aboutContent.historiaSubtitulo);
  }
  #updateTimeline() {
    const parentEl = document.querySelector('.journey__timeline');

    parentEl.innerHTML = '';

    this.#timelineYears.forEach((timeline, idx) => {
      const rowItems = this.#createJourneyRow(timeline.attributes, idx);
      parentEl.append(...rowItems);
    });
  }
  #createJourneyRow(timeline, rowNumber) {
    let position;
    if (rowNumber === 0) position = 'first';
    else if (rowNumber === this.#timelineYears.length - 1) position = 'end';

    const horizontalPosition = rowNumber % 2 === 0 ? 'right' : 'left';

    const rowItems = [
      this.#createJourneyComponent(timeline, horizontalPosition),
      this.#createJourneyMiddle(position),
      this.#createJourneyComponent(null)
    ]

    if (horizontalPosition === 'right') rowItems.reverse();

    return rowItems;
  }
  #createJourneyComponent(content, position) {
    const journeyComponent = document.createElement('div');
    journeyComponent.classList.add('journey__component');

    if (!content) return journeyComponent;

    journeyComponent.classList.add('journey__component--bg');

    const yearTitle = document.createElement('h2');
    yearTitle.classList.add('journey__time');
    yearTitle.classList.add(`journey__time--${position}`)
    yearTitle.innerText = content.ano;

    const yearDescription = document.createElement('p');
    yearDescription.classList.add('journey__paragraph');
    yearDescription.classList.add(`journey__paragraph--${position}`)
    yearDescription.innerText = content.texto;

    journeyComponent.append(yearTitle, yearDescription);

    return journeyComponent;
  }
  #createJourneyMiddle(position) {
    const journeyMiddle = document.createElement('div');
    journeyMiddle.classList.add('journey__middle');
    if (position)
      journeyMiddle.classList.add(`journey__middle--${position}`);

    const journeyPoint = document.createElement('div');
    journeyPoint.classList.add('journey__point');
    if (position === 'start')
      journeyPoint.classList.add(`journey__point--first`)

    journeyMiddle.append(journeyPoint);

    return journeyMiddle;
  }
}