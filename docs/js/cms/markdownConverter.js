const convertMarkdownToHtml = (text) => {
  const converter = new showdown.Converter();
  let convertedText;

  convertedText = text.replace(/\n{2,}/g, m => m.replace(/\n/g, "<br/>"));
  convertedText = convertedText.replace(/<br\/>([^<])/g, "<br\/>\n\n$1");

  return converter.makeHtml(convertedText);
}