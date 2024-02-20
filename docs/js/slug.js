const slug = (text) => slugify(text, {
  lower: true,
  strict: true,
  remove: /["]/g,
});