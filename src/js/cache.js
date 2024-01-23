class SiteDataCacheManager {
  #CACHE_KEY = 'siteData';
  save(data) {
    localStorage.setItem(this.#CACHE_KEY, JSON.stringify(data));
  }
  get() {
    const cachedData = localStorage.getItem(this.#CACHE_KEY);

    return cachedData ? JSON.parse(cachedData) : null;
  }
}

const cacheManager = new SiteDataCacheManager();