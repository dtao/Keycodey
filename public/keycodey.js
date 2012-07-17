var keyCharElement = document.getElementById("keychar");
var keyCodeElement = document.getElementById("keycode");

document.body.onkeypress = function(e) {
  keyCharElement.innerHTML = "Char: " + e.charCode;
};

document.body.onkeydown = function(e) {
  keyCodeElement.innerHTML = "Code: " + e.keyCode;
};
