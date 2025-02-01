// Obter o modal
var modal = document.getElementById("myModal");

// Obter o elemento <span> que fecha o modal
var span = document.getElementsByClassName("close")[0];

// Obter o elemento <p> dentro do modal
var modalContent = document.getElementById("modalContent");
var modalTitle = document.getElementById("modalTitle");
var modalIcon = document.getElementById("modalIcon");

// Adicionar evento de clique aos botões
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function() {
        // Obter o ID do botão clicado
        var buttonId = this.id;

        // Obter o conteúdo correspondente ao botão
        var title = document.getElementById('title' + buttonId.slice(-1));
        var icon = document.getElementById('icon' + buttonId.slice(-1));
        var content = document.getElementById('content' + buttonId.slice(-1));
        
        // Verificar se o conteúdo existe
        if (content) {
            // Definir o conteúdo do modal
            modalTitle.innerText = title.innerText;
            modalIcon.innerHTML = icon.outerHTML; // Usar outerHTML para incluir o ícone
            modalContent.innerText = content.innerText;

            // Exibir o modal
            modal.style.display = "block";
        } else {
            console.error("Elemento com ID 'content" + buttonId.slice(-1) + "' não encontrado.");
        }
    });
});
// Quando o usuário clicar no <span> (x), fecha o modal
span.onclick = function() {
  modal.style.display = "none";
}

// Quando o usuário clicar fora do modal, fecha o modal
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
