var footer = document.getElementById("footer");
var div = document.createElement("div");
var update = new Date(document.lastModified);
var day = update.getDate();
var month = update.getMonth();
var year = update.getFullYear();
div.innerHTML = "<p>Dernier: <time>" + day + "/" + month + "/" + year + "</time></p>"
footer.appendChild(div);
