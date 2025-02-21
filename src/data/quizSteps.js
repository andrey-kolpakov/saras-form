export const quizSteps = [
    {
        question: 'В каком стиле вы хотите кухню?',
        options: [
            { text: 'Классика', image: './assets/images/1/1.webp' },
            { text: 'Модерн', image: './assets/images/1/2.jpg' },
            { text: 'Минимализм', image: './assets/images/1/3.jpg' },
            { text: 'Скандинавском', image: './assets/images/1/4.webp' },
            { text: 'Еще не знаю', image: './assets/images/idk.webp' },
        ],
        image: 'https://fakeimg.pl/600x300?text=Стиль+Кухни',
    },
    {
        question: 'В каком цвете вы бы хотели кухню?',
        options: [
            { text: 'Темные цвета', image: './assets/images/2/1.jpg' },
            { text: 'Светлые цвета', image: './assets/images/2/2.jpg' },
            { text: 'Цветная', image: './assets/images/2/3.jpg' },
            { text: 'Еще не знаю', image: './assets/images/idk.webp' },
        ],
        image: 'https://fakeimg.pl/600x300?text=Цвет+Кухни',
    },
    {
        question: 'Какой материал вам нравится?',
        options: [
            { text: 'Шпон', image: './assets/images/3/1.webp' },
            { text: 'Крашенный МДФ', image: './assets/images/3/2.jpg'  },
            { text: 'ЛДСП', image: './assets/images/3/3.webp'  },
            { text: 'Еще не знаю', image: './assets/images/idk.webp' },
        ],
        image: 'https://fakeimg.pl/600x300?text=Материал+Кухни',
    },
    {
        question: 'Как срочно вам нужна новая кухня?',
        type: 'text',
        options: [
            { text: 'В ближайшие 2-3 недели', image: './assets/images/4/1.jpg' },
            { text: 'В течение 1-2 месяцев', image: './assets/images/4/2.jpg' },
            { text: 'В течение полугода', image: './assets/images/4/3.jpg' },
            { text: 'Сроки не критичны, главное - качество', image: './assets/images/4/4.jpg' },
        ],
        image: 'https://fakeimg.pl/600x300?text=Срочность+Кухни',
    },
    {
        question: 'Какой бюджет вы планируете на кухню?',
        type: 'text',
        options: [
            { text: '500 000 - 1 000 000 тг.', image: './assets/images/5/1.jpg' },
            { text: '2 000 000 - 5 000 000 тг', image: './assets/images/5/2.jpg' },
            { text: '5 000 000 - 10 000 000 тг', image: './assets/images/5/3.jpg' },
            { text: 'Не ограничен', image: './assets/images/5/4.jpg' },
        ],
        image: 'https://fakeimg.pl/600x300?text=Бюджет+Кухни',
    },
]