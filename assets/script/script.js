var cardBruna = window.document.getElementById("card-bruna");
var cardSamantha = window.document.getElementById("card-samantha");
var cardLeonardo = window.document.getElementById("card-leonardo");
var setaDireita = window.document.getElementById("seta-direita");
var setaEsquerda = window.document.getElementById("seta-esquerda");

function mostrarCardDireita() {
  cardBruna.style.display = "none";
  cardLeonardo.style.display = "flex";
  setaDireita.style.display = "none";
  setaEsquerda.style.display = "flex";
}

function mostrarCardEsquerda() {
  cardLeonardo.style.display = "none";
  cardBruna.style.display = "flex";
  setaDireita.style.display = "flex";
  setaEsquerda.style.display = "none";
}
