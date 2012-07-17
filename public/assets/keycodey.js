var keyCharElement = document.getElementById("keychar");
var keyCodeElement = document.getElementById("keycode");

document.body.onkeypress = function(e) {
  keyCharElement.innerText = "Char: " + e.charCode;
};

document.body.onkeydown = function(e) {
  keyCodeElement.innerText = "Code: " + e.keyCode;
};
