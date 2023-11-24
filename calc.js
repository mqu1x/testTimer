const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = () => {
    return (seconds) => {
        timerUI(seconds);

        if (seconds == 0) {
            timerEl.textContent = 'Время вышло :3';
        }
    };
};

const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
    let value = inputEl.value;
    inputEl.value = value.replace(/\D/, '');
});

buttonEl.addEventListener('click', () => {
    let seconds = Number(inputEl.value);

    const Interval = setInterval(() => {
        seconds--;

        if (seconds == 0) {
            clearInterval(Interval);
        }

        animateTimer(seconds);
    }, 1000);

    inputEl.value = '';
});

const timerUI = (numbers) => {
    let hours = Math.floor(numbers / 3600);
    let minutes = Math.floor((numbers / 60) % 60);
    let sec = Math.floor(numbers % 60);

    timerEl.textContent = `${hours}ч ${minutes}м ${sec}с`;
};

//задание для автомата физра
// доклад: разработка комплекса упраженений с собственным весом:
//10 упражнений. Оригинальное, что-то новое, не банальное
