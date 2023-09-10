//TODO: № 2 ==============================================
// Після натискання кнопки "SWAP ME" здійснюється обмін вмістом між двома інпутами.
// Ви можете натиснути на неї кілька разів або вручну змінити вміст інпутів.

// const swapBtn = document.getElementById('swapButton');
// const firstInputEl = document.getElementById('leftSwapInput');
// const secondInputEl = document.getElementById('rightSwapInput');

// swapBtn.addEventListener('click', targetBtnHandler);

// function targetBtnHandler() {
//     const firstValue = firstInputEl.value;
//     const secondValue = secondInputEl.value;

//     firstInputEl.value = secondValue;
//     secondInputEl.value = firstValue;
// }
//TODO: № 2.1 ==============================================
// При кліку на кнопку, текст параграфів змінюється на їх порядковий номер
// const btn = document.querySelector("button");
// const text = document.querySelectorAll("p");
// btn.addEventListener("click", handleClick);
// function handleClick() {
//   text.forEach((el, index) => {
//     el.textContent = index + 1;
//   });
// }

//TODO: № 3 ==============================================
// Кнопка "Приховати" ховає текст і замінює назву кнопки на
// "Розкрити", при повторному натисканні текст знову стає доступним
// і кнопка набуває початкового вигляду.

// const btn = document.querySelector("#passwordButton");
// const input = document.querySelector("#passwordInput");

// btn.addEventListener("click", changeText)

// function changeText() {
//     const inputType = input.type;
//     input.type = inputType !== "text" ? "text" : "password"
//     console.log(input.type);

//     btn.textContent = btn.textContent === "Приховати" ? "Розкрити" : "Приховати"
// }
//TODO: № 4 ==============================================

// Кнопка "Зменшити" робить квадрат менше на 10 пікселів, допопка "Збільшити" - більше на 10 пікселів.

// const decrease = document.getElementById("decrease");
// const increase = document.getElementById("increase");
// const box = document.getElementById("box");

// decrease.addEventListener("click", onDecreaseClick);
// increase.addEventListener("click", onIncreaseClick);

// function onDecreaseClick() {
//   const boxWidth = box.offsetWidth;
//   const boxHeight = box.offsetHeight;
//   box.style.width = `${boxWidth - 10}px`;
//   box.style.height = `${boxHeight - 10}px`;
// }

// function onIncreaseClick() {
//   const boxWidth = box.offsetWidth;
//   const boxHeight = box.offsetHeight;
//   box.style.width = `${boxWidth + 10}px`;
//   box.style.height = `${boxHeight + 10}px`;
// }

// decrease.addEventListener("click", changeBtnSize);
// increase.addEventListener("click", changeBtnSize);
// function changeBtnSize(event) {
//   const boxWidth = box.offsetWidth;
//   const boxHeight = box.offsetHeight;
//   const currentBtn = event.target.getAttribute("id");

//   switch (currentBtn) {
//     case "decrease":
//       box.style.width = `${boxWidth - 10}px`;
//       box.style.height = `${boxHeight - 10}px`;
//       break;
//     case "increase":
//       box.style.width = `${boxWidth + 10}px`;
//       box.style.height = `${boxHeight + 10}px`;
//       break;
//   }
// }

// Home
/*
TODO: № 5 ==============================================
Додайде слухач кліку і визначте, коли клік відбувається
всередині елемента з id "place" і коли клік припадає поза зоною елемента
https://developer.mozilla.org/en-US/docs/Web/API/Node/contains

TODO: № 6 ==============================================
Натиснувши кнопку "Подвоювати", збільшити значення
у кожному елементі списку у 2 рази

TODO: № 6.1 ==============================================
Вводимо число у input з id="test" - число
При кліку на кнопку, у інпут з id="result" повинен буди квадрат цього числа
Зробити перевірку на число, реалізувати за допомогою alert з текстом

TODO: № 7 ==============================================
Напишіть інтерфейс, щоб створити список
Для кожного пункту:
Запитуйте вміст у користувача за допомогою promt
створювати пункт та додавати його до списку
процес припиняється коли користувач натискає ESC
усі елементи мають створюватись динамічно
*/
