function calculateScore() {
    // Obtém os valores dos inputs
    const linguagens = parseFloat(document.getElementById('linguagens').value);
    const matematica = parseFloat(document.getElementById('matematica').value);
    const natureza = parseFloat(document.getElementById('natureza').value);
    const humanas = parseFloat(document.getElementById('humanas').value);
    const redacao = parseFloat(document.getElementById('redacao').value);

    // Verifica se todos os campos foram preenchidos
    if (isNaN(linguagens) || isNaN(matematica) || isNaN(natureza) || isNaN(humanas) || isNaN(redacao)) {
        alert("Por favor, preencha todas as notas.");
        return;
    }

    // Calcula a nota total (simples média aritmética)
    const totalScore = (linguagens + matematica + natureza + humanas + redacao) / 5;

    // Exibe o resultado
    document.getElementById('result').textContent = `Sua nota total é: ${totalScore.toFixed(2)}`;
}
