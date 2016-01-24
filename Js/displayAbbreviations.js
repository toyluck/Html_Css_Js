/**
 * Created by toylu on 2016/1/24.
 * 用代码充实文档的内容
 */

function displayAbbreviations() {
    var abbrs = document.getElementsByTagName("abbr");
    //1. 获取每一个abbr的title和文本信息
    var dl = document.createElement("dl");
    for (var i = abbrs.length - 1; i >= 0; i--) {
        var abbr = abbrs[i];
        // 因为浏览器的历史遗留问题,在ie中 统计abbr元素的子节点个数时总是会返回一个错误的值--零
        if (abbr.childNodes.length < 1) {
            continue
        };
        
        var text = abbr.lastChild.nodeValue;
        var title = abbr.getAttribute("title");
        var dt = document.createElement("dt");
        var dd = document.createElement("dd");

        var dtdes = document.createTextNode(text);
        var dddes = document.createTextNode(title);

        dt.appendChild(dtdes);
        dd.appendChild(dddes);

        dl.appendChild(dt);
        dl.appendChild(dd);
    };
    var body = document.body;
    var h2 = document.createElement("h2");
    h2.appendChild(document.createTextNode("Abbreviations"))
    body.appendChild(h2);
    body.appendChild(dl);


}

addEventListener(displayAbbreviations);