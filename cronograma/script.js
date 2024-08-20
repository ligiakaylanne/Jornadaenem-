document.addEventListener('DOMContentLoaded', function() {
    // Função para gerar eventos
    function generateEvents(startDate, days) {
        let events = [];
        let dayEvents = {
            'sexta-feira': [
                { title: 'Português', color: 'black' },
                { title: 'História', color: 'blue' }
            ],
            'sábado': [
                { title: 'Biologia', color: 'pool green' },
                { title: 'Matemática', color: 'red' }
            ],
            'domingo':[
                { title: 'História', color: 'light blue'},
                { title:  'Física',color:'blue' }
            ],
            'segunda-feira':[
                { title: 'Sociologia', color: 'light blue'},
                { title:  'Filosofia',color:'blue' }
            ],
            'terça-feira':[
                { title: 'Redação', color: 'light blue'},
                { title:  'Quimica',color:'blue' }
            ],
            'quarta-feira':[
                { title: 'Linguas Estrangeiras', color: 'light blue'},
                { title:  'Geografia',color:'blue' }
            ],
            'quinta-feira':[
                { title: 'Matemática', color: 'light blue'},
                { title:  'Redação',color:'blue' }
            ]

           
        };

        let start = new Date(startDate);
        let end = new Date(start);  
        end.setDate(start.getDate() + days); // Adiciona o número de dias à data de início

        // Define a hora do início e do fim do período para garantir precisão
        start.setHours(0, 0, 0, 0);
        end.setHours(0, 0, 0, 0);

        while (start < end) {
            let currentDate = new Date(start);
            let dayName = currentDate.toLocaleDateString('pt-BR', { weekday: 'long' }).toLowerCase();
            let eventsForDay = dayEvents[dayName] || [];
            eventsForDay.forEach(event => {
                events.push({
                    title: event.title,
                    start: currentDate.toISOString().split('T')[0], // Apenas a parte da data
                    color: event.color
                });
            });
            start.setDate(start.getDate() + 1); // Avança um dia
        }
        return events;  
    }

    // Gerar eventos
    let eventos = generateEvents('2024-08-17', 85); // Gera eventos a partir de 2024-08-17

    // Inicializar o calendário
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        headerToolbar: {
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay' // Mês, semana e dia
        },
        initialView: 'dayGridMonth',
        locale: 'pt-br',
        navLinks: true,  // Ir para o dia quando clicar nele
        selectable: true,  // Selecionar as datas
        selectMirror: true,  // Mostrar seleção de evento
        editable: true,    // Permitir arrastar e redimensionar eventos
        dayMaxEvents: true,  // Mostrar número máximo de eventos por dia
        events: eventos, // Adiciona eventos ao calendário

        // Manipuladores de eventos
        dateClick: function(info) {
            console.log('Data clicada:', info.dateStr);
        },
        eventClick: function(info) {
            console.log('Evento clicado:', info.event);
        },
        eventDrop: function(info) {
            console.log('Evento movido:', info.event);
        }
    });

    // Definir a data inicial do calendário
    calendar.setOption('initialDate', '2024-08-17');

    calendar.render();
});
