function modoEscuro() {
  document.body.classList.toggle("dark");
}

// botão da história da música
function irHistoria() {
  document.getElementById("historia").scrollIntoView({
    behavior: "smooth"
  });
}

// formulário
function enviarMensagem(event) {
  event.preventDefault();
  document.getElementById("msg").innerText =
    "Mensagem enviada com sucesso! 🎶 Obrigado pelo contato.";
}function ir(id) {
  document.getElementById(id).scrollIntoView({
    behavior: "smooth"
  });
}
