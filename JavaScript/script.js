var muller = window.document.getElementById('muller');
var pilatti = window.document.getElementById('pilatti');

function paginaMuller() {
    window.document.getElementById('muller').onclick = window.location.href = 'html/mullerHome.html';
}
function paginaPilatti() {
    window.document.getElementById('pilatti').onclick = window.location.href = 'html/pilattiHome.html';
}

muller.onclick = paginaMuller;
pilatti.onclick = paginaPilatti;
