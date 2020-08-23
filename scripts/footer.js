var months = ["enero", "febrero", "marzo",
"abril", "mayo", "junio",
"julio", "agosto", "septiembre",
"octubre", "noviembre", "diciembre"];

var footer = document.getElementById("footer");
var div = document.createElement("DIV");
var update = new Date(document.lastModified);
var day = update.getDate();
var month = update.getMonth();
var year = update.getFullYear();
div.innerHTML = "<p>Última actualización: <time>" + day + " de " + months[month] + " de " + year + "</time></p>"
footer.appendChild(div);
