import ConvertDate from './convertDate';

var footer = document.getElementById("footer");
var div = document.createElement("DIV");
var update = new Date(document.lastModified);

div.innerHTML = "<p>Dernière mise à jour: <time>" + ConvertDate.getConvertedDate() + "</time></p>";
footer.appendChild(div);
