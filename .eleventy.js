const slugify = require("slugify");
const showdown = require('showdown');

const convertMarkdownToHtml = (text) => {
  const converter = new showdown.Converter();
  let convertedText;

  convertedText = text.replace(/\n{2,}/g, m => m.replace(/\n/g, "<br/>"));
  convertedText = convertedText.replace(/<br\/>([^<])/g, "<br\/>\n\n$1");

  return converter.makeHtml(convertedText);
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/css");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/assets");

  eleventyConfig.addFilter("slug", (str) => {
    if (!str) {
      return;
    }

    return slugify(str, {
      lower: true,
      strict: true,
      remove: /["]/g,
    });
  });
  eleventyConfig.addFilter("html", (str) => {
    return convertMarkdownToHtml(str);
  })
  eleventyConfig.addFilter("cmsImage", (image) => {
    return image.data.attributes.url;
  });
  global.filters = eleventyConfig.javascriptFunctions;

  return {
    pathPrefix: "/",
    dir: {
      input: "src",
      output: "docs",
    },
  };
};