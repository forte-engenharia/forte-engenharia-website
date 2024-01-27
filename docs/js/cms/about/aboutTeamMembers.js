class AboutTeamMembers {
  #aboutContent;
  update() {
    this.#aboutContent = siteData.from('sobre');
    this.#updateTitle();
    this.#updateTeamMembers(siteData.from('time-membros'));
  }
  #updateTitle() {
    const titleEl = document.querySelector('.team__heading b');
    titleEl.innerHTML = this.#aboutContent.timeTitulo;
  }
  #updateTeamMembers(members) {
    const parentEl = document.querySelector('.team__about');

    parentEl.innerHTML = '';

    members.forEach((member) => {
      parentEl.append(this.#createTeamMember(member.attributes));
    });
  }
  #createTeamMember(member) {
    const teamItemList = document.createElement('li');
    teamItemList.classList.add('team__eclipse');

    const portraitImg = document.createElement('img');
    portraitImg.classList.add('team__portrait');
    portraitImg.src = getCMSImageUri(member.foto)
    portraitImg.alt = member.nome;
    portraitImg.loading = 'lazy';

    const name = document.createElement('h3');
    name.classList.add('team__name');
    name.textContent = member.nome;

    const specialization = document.createElement('p');
    specialization.classList.add('team__special');
    specialization.textContent = member.especializacao;

    teamItemList.append(portraitImg, name, specialization);

    return teamItemList;
  }
}