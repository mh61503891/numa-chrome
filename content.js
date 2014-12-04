var div = document.createElement('div');
div.id = 'numakuro-wrapper'

var img = document.createElement('img');
img.id = 'numakuro-img'
img.src = chrome.extension.getURL("numakuro.png");

div.appendChild(img);
document.body.appendChild(div);
