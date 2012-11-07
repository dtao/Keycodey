var screenWrapper             = $("#screen-wrapper");
var keyCharElement            = $("#keychar");
var keyCodeElement            = $("#keycode");
var keepCodesOnScreenCheckbox = $("input#keep-codes-on-screen");
var clearLink                 = $("a.clear");

var currentCodes = {};

function keepCodesOnScreen() {
  return keepCodesOnScreenCheckbox.is(":checked");
}

function addToScreenIfReady() {
  if (currentCodes.charCode && currentCodes.keyCode) {
    var codeElement = $("<div>").addClass("codes");
    $("<div>").addClass("char-code").text("Char: " + currentCodes.charCode).appendTo(codeElement);
    $("<div>").addClass("key-code").text("Key: " + currentCodes.keyCode).appendTo(codeElement);
    codeElement.appendTo(screenWrapper);
    currentCodes = {};
  }
}

function addChar(char) {
  currentCodes.char = char;
}

function addCharCode(code) {
  currentCodes.charCode = code;
  addToScreenIfReady();
}

function addKeyCode(code) {
  currentCodes.keyCode = code;
  addToScreenIfReady();
}

function clear() {
  screenWrapper.empty();
  keyCharElement.empty();
  keyCodeElement.empty();
}

$("body").keypress(function(e) {
  if (keepCodesOnScreen()) {
    addCharCode(e.charCode);
  } else {
    keyCharElement.text("Char: " + e.charCode);
  }
});

$("body").keydown(function(e) {
  if (keepCodesOnScreen()) {
    addKeyCode(e.keyCode);
  } else {
    keyCodeElement.text("Code: " + e.keyCode);
  }
});

keepCodesOnScreenCheckbox.change(clear);
clearLink.click(clear);
