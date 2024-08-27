document.querySelectorAll('.faq-question').forEach((button) => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const icon = button.querySelector('i');
        const parent = button.parentElement;

        // Fecha todas as respostas abertas
        document.querySelectorAll('.faq-answer').forEach((item) => {
            if (item !== answer) {
                item.classList.remove('show');
            }
        });

        // Reseta o estado de todos os ícones
        document.querySelectorAll('.faq-question').forEach((btn) => {
            if (btn !== button) {
                btn.classList.remove('active');
                const icon = btn.querySelector('i');
                icon.style.transform = 'rotate(0deg)';
            }
        });

        // Fecha todas as bordas destacadas
        document.querySelectorAll('.faq-item').forEach((item) => {
            if (item !== parent) {
                item.classList.remove('highlight');
            }
        });

        // Alterna a exibição da resposta atual
        answer.classList.toggle('show');
        button.classList.toggle('active');
        icon.style.transform = icon.style.transform === 'rotate(180deg)' ? 'rotate(0deg)' : 'rotate(180deg)';
        parent.classList.toggle('highlight');
    });
});
