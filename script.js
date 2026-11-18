function sumir(imagem) {
    imagem.style.display = "none";
}

function voltar() {
    const imagens = document.querySelectorAll("#pilha img");

    imagens.forEach(function(imagem) {
        imagem.style.display = "block";
    });
}
