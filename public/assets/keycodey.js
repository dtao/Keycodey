var screenWrapper             = $("#screen-wrapper");
var keyCharElement            = $("#keychar");
var keyCodeElement            = $("#keycode");
var keepCodesOnScreenCheckbox = $("input#keep-codes-on-screen");
var clearLink                 = $("a.clear");

var currentCodes = {};

function keepCodesOnScreen() {
  return keepCodesOnScreenCheckbox.is(":checked");
}

function addToScreen() {
  setTimeout(function() {
    if (currentCodes.keyCode) {
      var codeElement     = $("<div>").addClass("codes").css("opacity", 0);
      var keyCodeElement  = $("<div>").addClass("key-code").text("Key: " + currentCodes.keyCode);
      var charCodeElement = $("<div>").addClass("char-code").html("&nbsp;").appendTo(codeElement);

      if (currentCodes.charCode) {
        if (currentCodes.char) {
          charCodeElement.text(currentCodes.char + " (" + currentCodes.charCode + ")");
        } else {
          charCodeElement.text("Char: " + currentCodes.charCode)
        }
      }

      keyCodeElement.appendTo(codeElement);
      charCodeElement.appendTo(codeElement);
      codeElement.appendTo(screenWrapper);

      codeElement.animate({ opacity: 1 }, 250);

      currentCodes = {};
    }
  }, 0);
}

function addChar(char) {
  currentCodes.char = char;
}

function addCharCode(code) {
  currentCodes.charCode = code;
  addToScreen();
}

function addKeyCode(code) {
  currentCodes.keyCode = code;
  addToScreen();
}

function clear() {
  screenWrapper.empty();
  keyCharElement.empty();
  keyCodeElement.empty();
}

$("body").keypress(function(e) {
  if (keepCodesOnScreen()) {
    addChar(String.fromCharCode(e.charCode));
    addCharCode(e.charCode);
  } else {
    keyCharElement.text("Char: " + e.charCode);
  }
});

$("body").keydown(function(e) {
  if (keepCodesOnScreen()) {
    addKeyCode(e.keyCode);
  } else {
    keyCharElement.empty();
    keyCodeElement.text("Code: " + e.keyCode);
  }

  // Prevent Backspace from navigating back.
  if (e.keyCode === 8) {
    return false;
  }
});

$("body").keyup(function(e) {
  return false;
});

keepCodesOnScreenCheckbox.change(clear);
clearLink.click(clear);
