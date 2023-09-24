// TODO: ЗАДАЧА 1 на LocalStorage =========================================

// Створи перелік справ.
// Є інпут, який вводиться назва завдання.
// Після натискання на кнопку "Додати" завдання додається до списку #list.
// Поруч із кожним завданням знаходиться кнопка "Видалити", щоб можна було
// Забрати завдання зі списку.
// Список із завданнями має бути доступним після перезавантаження сторінки.

// const formEl = document.getElementById('task-form');
// const inputEl = document.querySelector('input');
// const list = document.getElementById('task-list');

// let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// formEl.addEventListener('submit', btnHandler);

// function btnHandler(e) {
//     e.preventDefault();

//     const task = inputEl.value.trim();
//     if (task !== '') {
//         tasks.push(task);
//         inputEl.value = '';

//         renderTasks();

//         localStorage.setItem('tasks', JSON.stringify(tasks));
//     }
// }

// function renderTasks() {
//     list.innerHTML = ''
//     tasks.forEach((task, index) => {
//         const liEl = document.createElement('li');
//         const btn = document.createElement('button');

//         liEl.innerText = task;
//         btn.textContent = 'Видалити';

//         btn.dataset.index = index;

//         btn.addEventListener('click', removeTask);

//         liEl.appendChild(btn);
//         list.appendChild(liEl);

//     })
// }

// function removeTask(e) {
//     const taskIndex = e.target.dataset.index;

//     tasks.splice(taskIndex, 1);
//     renderTasks();
//     localStorage.setItem('tasks', JSON.stringify(tasks));
// }

// renderTasks();

// TODO: ЗАДАЧА 5 на обіцянки (Promise) ====================================

// - Використовуй prompt та повертай значення звідти.
// - Створи функцію, яка буде набувати значення з prompt і всередині якої буде проміс.
// Якщо значення не є числом, відхиляй проміс та логіруй "error".
// Якщо значення парне, вирішуй проміс та повертай "even" через 1 секунду.
// Якщо значення не парне, вирішуй проміс та повертай "odd" через 2 секунди.

// function getValue(value) {
//   if (!Number(value)) {
//     return Promise.reject(
//       "Фігня якась, давай по новій. Тільки не нуль. Не туди. Благаю"
//     );
//   }
//   let text = "even";
//   let delay = 1000;
//   if (value % 2 !== 0) {
//     text = "odd";
//     delay = 2000;
//   }
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(text);
//     }, delay);
//   });
// }

// getValue(prompt("Введіть число"))
//   .then((value) => console.log(value))
//   .catch((error) => console.log(error));


// TODO: ЗАДАЧА 2  на LocalStorage =========================================

// Зробити перемикач теми. Зберігати тему у локальному сховище.
// При перезавантаженні сторінки перевіряти сховище та ставити тему, яка там вказана.
// Додати класи для змін тем

// const themeInputRef = document.querySelector("#checkbox");
// const bodyThemeRef = document.querySelector("body");
// const THEME_KEY = "theme";
// const lightTheme = "light";
// const darkTheme = "dark";

// const currentTheme = localStorage.getItem(THEME_KEY);

// switch (currentTheme) {
//   case lightTheme:
//     bodyThemeRef.classList.add("light");
//     themeInputRef.checked = true;
//     break;
//   case darkTheme:
//     bodyThemeRef.classList.add("dark");
//     themeInputRef.checked = false;
//     break;
//   default:
//     bodyThemeRef.classList.add("dark");
//     themeInputRef.checked = false;
//     break;
// }

// themeInputRef.addEventListener("click", handleCheckboxClick);

// function handleCheckboxClick(event) {
//   if (!event.currentTarget.checked) {
//     localStorage.setItem(THEME_KEY, lightTheme);
//     bodyThemeRef.classList.add("light");
//     bodyThemeRef.classList.remove("dark");
//   }

//   if (event.currentTarget.checked) {
//     localStorage.setItem(THEME_KEY, darkTheme);
//     bodyThemeRef.classList.add("dark");
//     bodyThemeRef.classList.remove("light");
//   }

//   console.log(localStorage.getItem(THEME_KEY));
// }

// TODO: ЗАДАЧА 4 на інтервали ====================================

// Напишіть функцію printNumbers(from, to), яка виводить число кожну секунду,  починаючи з
// from i закінчуючи to
// Можно зробити 2 варіанти

// * зростання
// function printNumbers(from, to) {
//   const add = setInterval(() => {
//     console.log(from);
//     from += 1;
//     if (from > to) {
//       clearInterval(add);
//     }
//   }, 1000);
// }

// printNumbers(12, 66);

// * спадання
// function printNumbers(from, to) {
//   const add = setInterval(() => {
//     console.log(from);
//     from -= 1;
//     if (to > from) {
//       clearInterval(add);
//     }
//   }, 1000);
// }

// printNumbers(80, 66);


// TODO: ЗАДАЧА 3 на обіцянки (Promise) ====================================

// Перероби функцію на проміс таким чином, щоб проміс повертав значення
// через 2 секунди після виклику функції

// function greet() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve("Hello world 👋");
//         }, 2000);
//     })
// }

// greet().then((value) => console.log(value))