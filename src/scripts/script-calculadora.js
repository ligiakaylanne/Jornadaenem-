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

    //verifica se todas as notas sao >= 0 e <= 1000, caso sim faz a operacao
    if(linguagens >= 0 && linguagens <= 1000 && matematica >= 0 && matematica <= 1000 && natureza >= 0 && natureza <= 1000 && humanas >= 0 && humanas <= 1000 && redacao >= 0 && redacao <= 1000){

        // Calcula a nota total (simples média aritmética)
        const totalScore = (linguagens + matematica + natureza + humanas + redacao) / 5;

        // Exibe o resultado
        document.getElementById('result').textContent = `Sua nota total é: ${totalScore.toFixed(2)}`;
        return;
    }
    
    alert("Notas inválidas, apenas são permitidas notas de 0 a 1000");
    return;
}
