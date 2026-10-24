const formulario = document.getElementById("formulario");
const mensagem = document.getElementById("mensagem");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const atividade = document.getElementById("atividade").value;

    if (nome === "" || email === "" || atividade === "") {
        mensagem.textContent = "Preencha todos os campos!";
        return;
    }

    mensagem.textContent =
        "Parabéns, " + nome +
        "! Sua inscrição para o Geek Fest foi realizada com sucesso.";

    alert("Inscrição realizada com sucesso!");

    formulario.reset();
});