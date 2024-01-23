class SiteData {
  #siteData;
  #cacheManager
  #contents = ['clientes', 'linhadotempos', 'servicos', 'time-membros', 'contato', 'contato-secao', 'pagina-inicial', 'servicos-pagina', 'sobre'];

  constructor(cacheManager) {
    this.#cacheManager = cacheManager;
    this.#siteData = cacheManager.get() ?? {};
    this.#init();
  }

  async #init() {
    for (const contentName of this.#contents) {
      const contentData = await getCMSContentByName(contentName);
      this.#siteData = Object.assign(this.#siteData, contentData);
    }
    this.#cacheManager.save(this.#siteData);
  }

  from(contentName) {
    const data = this.#siteData[contentName];
    const hasAttributesProperty = data.attributes && typeof data.attributes === 'object';
    return hasAttributesProperty ? data.attributes : data;
  }
}

const siteData = new SiteData(cacheManager);
