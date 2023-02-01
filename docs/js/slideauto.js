let counter = 1;
const radioButtons = document.querySelectorAll("input[type='radio']");
const manualButtons = document.querySelectorAll(".client__manual-btn");
const totalButtons = radioButtons.length;

for (let i = 0; i < totalButtons; i++) {
  radioButtons[i].addEventListener("click", function() {
    counter = i + 1;
  });
  manualButtons[i].addEventListener("click", function() {
    counter = i + 1;
  });
}

manualButtons[0].classList.add("active");
radioButtons[0].checked = true;

setInterval(function () {
  radioButtons.forEach(rb => rb.checked = false);
  manualButtons.forEach(mb => mb.classList.remove("active"));
  const currentButton = (counter - 1) % totalButtons;
  radioButtons[currentButton].checked = true;
  manualButtons[currentButton].classList.add("active");
  counter++;
}, 4000);
