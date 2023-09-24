// TODO: ЗАДАЧА 1 на LocalStorage =========================================

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

const formEl = document.getElementById('task-form');
const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const list = document.getElementById('task-list');

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

formEl.addEventListener('submit', btnHandler);

function btnHandler(e) {
    e.preventDefault();

    const task = inputEl.value.trim();
    if (task !== '') {
        tasks.push(task);
        inputEl.value = '';

        renderTasks();

        localStorage.setItem('tasks', JSON.stringify(tasks));
    }
}

function renderTasks() {
    list.innerHTML = ''
    tasks.forEach((task, index) => {
        const liEl = document.createElement('li');
        const btn = document.createElement('button');

        liEl.innerText = task;
        btn.textContent = 'Видалити';

        btn.dataset.index = index;

        btn.addEventListener('click', removeTask);

        liEl.appendChild(btn);
        list.appendChild(liEl);

    })
}

function removeTask(e) {
    const taskIndex = e.target.dataset.index;

    tasks.splice(taskIndex, 1);
    renderTasks();
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

renderTasks();
