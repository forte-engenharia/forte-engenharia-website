const selector = "#hero__direction";
const element = document.querySelector(selector);
if (element) {
  element.scrollIntoView({ behavior: "smooth" });
} else {
  console.error(`Element with selector ${selector} not found.`);
}