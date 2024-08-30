// Defina a data de término da oferta especial (ano, mês (0-11), dia, hora, minuto, segundo)
var endDateTime = new Date(2024, 11, 3, 0, 0, 0); // 

// Função para atualizar a contagem regressiva
function updateCountdown() {
    var now = new Date();
    var distance = endDateTime - now;

    // Calcula os dias, horas, minutos e segundos restantes
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Exibe a contagem regressiva na página
    document.getElementById("countdown-clock").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // Atualiza a contagem a cada segundo
    if (distance <= 0) {
        clearInterval(interval);
        document.getElementById("countdown-clock").innerHTML = "Oferta Expirada!";
    }
}

// Chama a função de atualização da contagem regressiva inicialmente para evitar atrasos
updateCountdown();

// Atualiza a contagem regressiva a cada segundo
var interval = setInterval(updateCountdown, 1000);
