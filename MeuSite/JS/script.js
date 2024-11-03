

function realizarPesquisa() {
    const campoPesquisa = document.getElementById("campoPesquisa");
    const valorPesquisa = campoPesquisa.value;
    const resultado = document.getElementById("resultado");

    if (valorPesquisa) {
        resultado.textContent = `Você pesquisou por: "${valorPesquisa}"`;
    } else {
        resultado.textContent = "Por favor, digite algo para pesquisar.";
    }
}