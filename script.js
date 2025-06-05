function enviarFeedback() {
  const input = document.getElementById("feedback");
  const btn = document.getElementById("btnEnviar");
  const confirmacao = document.getElementById("confirmacao");
  const texto = input.value.trim();

  if (texto === "") return;

  btn.disabled = true;
  btn.textContent = "Enviando...";

  setTimeout(() => {
    confirmacao.classList.remove("hidden");
    confirmacao.classList.add("show");

    btn.textContent = "Enviar";
    btn.disabled = false;
    input.value = "";

    setTimeout(() => {
      confirmacao.classList.remove("show");
      confirmacao.classList.add("hidden");
    }, 3000);
  }, 1500);
}


// 🖼️ Função para abrir imagem em tela cheia (modal)
const modal = document.getElementById("modal");
const img = document.getElementById("prototipoImg");
const modalImg = document.getElementById("imgModal");
const close = document.getElementsByClassName("close")[0];

// Abre o modal ao clicar na imagem
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;
}

// Fecha clicando no X
close.onclick = function () {
  modal.style.display = "none";
}

// Fecha clicando fora da imagem
window.onclick = function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
}
