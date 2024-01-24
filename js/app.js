function hidePhoneNumber() {
  document.getElementById("phone-number").hidden = true;
}
hidePhoneNumber();


var dark = false;
var allElements = document.body;
var switchButton = document.getElementById('theme-switch');

function themeColors() {
  if (!dark) {
    allElements.className = 'theme-dark';
    switchButton.innerHTML = 'Switch to light mode';
    switchButton.style.color = '#ffffff';
  } else {
    allElements.className = 'theme-light';
    switchButton.innerHTML = 'Switch to dark mode';
    switchButton.style.color = "#000000";
  }
  dark = !dark;
}