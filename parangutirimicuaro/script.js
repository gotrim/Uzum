window.onload = ajustarTop;
window.onresize = ajustarTop;
document.addEventListener('DOMContentLoaded', ajustarTop);

function ajustarTop() {
  const header = document.querySelector('header');
  const topo = document.getElementById('topo');
  const esquerda = document.getElementById('esquerda');
  const container = document.querySelector('.container');

  if (header && topo && esquerda && container) {
    const headerHeight = header.offsetHeight;
    const topoHeight = topo.offsetHeight;

    const totalHeight = headerHeight + topoHeight;

    esquerda.style.top = `${headerHeight}px`;
    container.style.top = `${totalHeight}px`;
    topo.style.top = `${headerHeight}px`;
  } else {
    console.error('Um ou mais elementos não foram encontrados.');
  }
}



function barra() {
  var menu = document.getElementById('menu-hamburguer');
  menu.classList.toggle('active');

  const esquerda = document.getElementById("esquerda");

  if (menu.classList.contains('active')) {
    esquerda.classList.add('aberto');
    esquerda.style.background = "#FFD34D";
    document.getElementById("conteudo-barra").style.display = "block";
  } else {
    esquerda.classList.remove('aberto');
    esquerda.style.background = "#303440";
    document.getElementById("conteudo-barra").style.display = "none";
  }

  ajustarTop();
}
