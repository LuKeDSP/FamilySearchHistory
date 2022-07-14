var botaoMenu = window.document.getElementById('menuBtn');
var botaoArvore = window.document.getElementById('arvoreBtn');
var botaoFotos = window.document.getElementById('fotosBtn');
var botaoDocumentos = window.document.getElementById('documentosBtn');

function menu() {
    window.document.getElementById('menuBtn').onclick = window.location.href = "index.html";
}
function arvore() {
    window.document.getElementById('arvoreBtn').onclick = window.location.href = "#";
}
function fotos() {
    window.document.getElementById('fotosBtn').onclick = window.location.href = "#";
}
function documentos() {
    window.document.getElementById('documentosBtn').onclick = window.location.href = "#";
}

botaoMenu.onclick = menu;
botaoArvore.onclick = arvore;
botaoFotos.onclick = fotos;
botaoDocumentos.onclick = documentos;