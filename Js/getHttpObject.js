//»ñµÃXMLHttpRequest

function getHttpObject() {
  if (typeof XMLHttpRequest == "undefined") {
    XMLHttpRequest = function () {
      try {
        return new ActiveXObject("Msxml2.XmlHTTP.6.0");
      } catch (e) {
      }
      try {
        return new ActiveXObject("Msxml2.XmlHTTP.3.0");
      } catch (e) {
      }
      try {
        return new ActiveXObject("Msxml2.XmlHTTP");
      } catch (e) {
      }
    };
    return false;
  }
  return new XMLHttpRequest();
}
