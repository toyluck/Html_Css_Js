function getNewContent() {
    var requset = getHttpObject();
    if (requset) {
        requset.open("GET", "Message.txt", true);
        requset.onreadystatechange = function() {
            if (requset.readyState == 4) {
                var para = document.createElement("p");
                var txt = document.createTextNode(requset.responseText);
                var xml = document.createElement("span");
                xml.innerHTML = requset.responseXML;
                para.appendChild(txt);
                para.appendChild(xml);
                document.getElementById("new").appendChild(para);
                para.i
            }
        };
        requset.send(null);

    } else {
        alert(" abord");
    }
}

addLoadEventFunc(getNewContent);
