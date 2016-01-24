function addLoadEventFunc(func) {
  var older = window.onlick;
  if (typeof older != "function") {
    window.onload = func();
  } else {
    window.onload = function () {
      older();
      func();
    }
  }
}