document.querySelectorAll('.faq-question').forEach((button, index) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');
        const parent = button.parentElement; // Acessa o elemento pai

        // Gira o ícone
        icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';

        // Alterna a classe "show" para a resposta
        answer.classList.toggle('show');

        // Alterna a classe "active" para o botão
        button.classList.toggle('active');

        // Alterna a classe "highlight" no elemento pai
        parent.classList.toggle('highlight'); // Você pode adicionar ou remover uma classe

        // Diferentes ações baseadas no índice do botão
       
    });
});
