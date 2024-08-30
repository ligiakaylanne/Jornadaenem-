document.querySelectorAll('.faq-question').forEach((button, index) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('figure');
        const parent = button.parentElement;

        // Fechar todas as respostas e redefinir ícones e classes
        document.querySelectorAll('.faq-answer').forEach((item) => {
            item.classList.remove('show');
        });

        document.querySelectorAll('.faq-question').forEach((btn) => {
            btn.classList.remove('active');
            const icon = btn.querySelector('figure');
            icon.style.transform = 'rotate(180deg)';
        });

        document.querySelectorAll('.faq-item').forEach((item) => {
            item.classList.remove('highlight');
        });

        // Mostrar apenas a resposta clicada e girar o ícone
        answer.classList.toggle('show');
        button.classList.toggle('active');
        icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        parent.classList.toggle('highlight');
    });
});
