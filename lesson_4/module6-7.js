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
