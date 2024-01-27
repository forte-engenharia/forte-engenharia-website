class SiteData {
  #siteData;
  #cacheManager
  #contents = ['clientes', 'linhadotempos', 'servicos', 'time-membros', 'contato', 'contato-secao', 'pagina-inicial', 'servicos-pagina', 'sobre'];
  #event = new CustomEvent('updateSiteData');

  constructor(cacheManager) {
    this.#cacheManager = cacheManager;
    this.#siteData = cacheManager.get() ?? {};
    this.#init();
  }

  async #init() {
    const requests = this.#contents.map((contentName) => getCMSContentByName(contentName));
    const data = await Promise.all([
      ...requests
    ]);
    data.map((content) => {
      const contentName = Object.keys(content)[0];
      this.#siteData[contentName] = Object.values(content)[0];
    });
    window.dispatchEvent(this.#event);
    this.#cacheManager.save(this.#siteData);
  }

  has(contentName) {
    return !!this.#siteData[contentName];
  }

  from(contentName) {
    if (!this.has(contentName)) return null;

    const data = this.#siteData[contentName];
    const hasAttributesProperty = data.attributes && typeof data.attributes === 'object';
    return hasAttributesProperty ? data.attributes : data;
  }
}

const siteData = new SiteData(cacheManager);
