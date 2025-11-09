// =============================== Завдання 1 ===============================
// 1 - отримай body елемент і виведи його в консоль;
// const body = document.querySelector('body');
const body = document.body;
// console.log(body);

// 2 - отримай елемент id="title" і виведи його в консоль;
const title = document.querySelector('#title');
// console.log(title);

// 3 - отримай елемент class="list" і виведи його в консоль;
const list = document.querySelector('.list');
// console.log(list);

// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
const allTopics = document.querySelectorAll('[data-topic]');
// console.log(allTopics);

// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і
//  виведи його в консоль;
const firstTopic = list.querySelector('[data-topic]');
// console.log(firstTopic);

// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic
//  і виведи його в консоль;
const lastTopic = allTopics[allTopics.length - 1];
// console.log(lastTopic);

// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
const titleNeighbor = title.nextElementSibling;
// console.log(titleNeighbor);

// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;

const h3Titles = body.querySelectorAll('h3');
// console.log(h3Titles);

// 9 - для кожного елемента h3 додай class="active", який змінить колір заголовка
// на червоний колір
h3Titles.forEach(el => el.classList.add('active'));

// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation"
//  і виведи його в консоль;
const navigation = list.querySelector('[data-topic="navigation"]');
// console.log(navigation);
// console.log(navigation.dataset);

// 11 - додай для знайденого елемента data-topic="navigation" атрибут style
// і зроби його backgroundColor жовтим
navigation.style.backgroundColor = 'yellow';

// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст
//  на "Я змінила тут текст!".
const navigationText = navigation.querySelector('p');
// navigationText.textContent = 'Я змінила тут текст!';
// navigation.querySelector('p').textContent = 'Я змінила тут текст!';
navigation.lastElementChild.textContent = 'Я змінила тут текст!';

// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент
// у якогоо атрибут data-topic має значення, яке зберігається у змінній
//  currentTopic і виведи його в консоль;
const currentTopic = 'manipulation';
const manipulation = body.querySelector(`[data-topic=${currentTopic}]`);
// console.log(manipulation);

// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor
//  блакитним;
manipulation.style.backgroundColor = 'lightblue';

// 15 - знайти в документі заголовок, який має class="completed" і виведи його
//  в консоль;
const titleCompleted = document.querySelector('.completed');
// console.log(titleCompleted);

// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"

// const liToRemove = titleCompleted.parentElement;
const liToRemove = titleCompleted.closest('li');
// console.log(liToRemove);
liToRemove.remove();

// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай
// йому наступний текст: "Об'єктна модель документа (Document Object Model)"
let pToAdd = `<p>"Об'єктна модель документа (Document Object Model) "</p>`;
title.insertAdjacentHTML('afterend', pToAdd);

// 18 - додай новий елемент списку у кінець списка, його заголовок це
// - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи
// і помістити їх в дерево - це використовувати рядки з тегами і дозволити
//  браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI
//  потім наповнити H3 та P і готову LI закинути у кінець списку
let liToAdd = document.createElement('li');
liToAdd.innerHTML = `<h3>"Властивість innerHTML"</h3>
<p>"Ще один спосіб створити DOM-елементи і помістити їх в дерево
- це використовувати рядки з тегами і дозволити браузеру
 зробити всю важку роботу"</p>
`;
list.append(liToAdd);

// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
liToAdd = `<li>
<h3>"Властивість innerHTML"</h3>
<p>"Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу"</p>
</li>`;
list.insertAdjacentHTML('beforeend', liToAdd);

// 20 - очисти список
list.innerHTML = '';

// =============================== Завдання 2 ===============================

// Створіть контейнер div (з класом number-container) в HTML-документі
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer).
// Парні числа повинні мати зелений фон (додати клас even),
// Непарні числа - жовтий фон (додати клас odd).

const randomNumber = () => Math.floor(Math.random() * 100) + 1;
const numberContainer = document.querySelector('.number-container');

function createNumberBlocks() {
  const blocks = [];
  for (let i = 1; i <= 100; i++) {
    const number = randomNumber();
    const className = number % 2 === 0 ? 'even' : 'odd';
    const block = `<div class="number ${className}">${number}</div>`;
    blocks.push(block);
  }
  return blocks;
}
let markup = createNumberBlocks().join('');
numberContainer.innerHTML = markup;

// =============================== Завдання 3 ===============================

// Form Events, Input, Focus, Blur and Submit.

// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`
const form = document.querySelector('.js-contact-form');

// form.addEventListener('input', e => {
//   const input = e.target.closest('input');
//   if (!input) {
//     return;
//   }
//   if (input.value.length < 6) {
//     input.classList.add(`error`);
//   } else {
//     input.classList.remove(`error`);
//     input.classList.add(`success`);
//   }
// });

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// form.addEventListener(
//   'focus',
//   e => {
//     const input = e.target.closest('input');
//     if (!input) {
//       return;
//     }
//     if (input.value === '') {
//       input.style.outline = '3px solid red';
//     } else {
//       input.style.outline = '3px solid green';
//     }
//   },
//   true
// );

// form.addEventListener('focusin', e => {
//   const input = e.target.closest('input');
//   if (!input) {
//     return;
//   }
//   if (input.value === '') {
//     input.style.outline = '3px solid red';
//   } else {
//     input.style.outline = '3px solid green';
//   }
// });

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`

const input = document.querySelector('.js-username-input');
input.addEventListener('blur', e => {
  if (input.value === '') {
    input.style.outline = '3px solid red';
  } else {
    input.style.outline = '3px solid lime';
  }
});

// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку,
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у об'єкт і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. Також при події інпут реалізуй додавання
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне значення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення
// false, верни дефолтне значення "Anonymous" у span.

const span = form.querySelector('.js-username-output');

input.addEventListener('input', () => {
  span.textContent =
    input.value.trim() === '' ? 'Anonymous' : input.value.trim();
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const checkBox = form.elements.accept;
  const inputName = input.value.trim();
  const isAccepted = checkBox.checked;
  if (inputName !== '' && isAccepted) {
    const userName = { userName: inputName };
    console.log(userName);
    form.reset();
    span.textContent = 'Anonymous';
  } else {
    alert('Ви маєте ввести своє імя та погодитись з політикою конфедиційності');
  }
});

// =============================== Завдання 4 ===============================

// Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
// При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів,
// При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const refs4 = {
  increaseBtn: document.querySelector('.js-increase'),
  decreaseBtn: document.querySelector('.js-decrease'),
  box: document.querySelector('.box'),
};

let sizes = 50;

refs4.increaseBtn.addEventListener('click', () => {
  sizes += 20;
  refs4.box.style.width = `${sizes}px`;
  refs4.box.style.height = `${sizes}px`;
});
refs4.decreaseBtn.addEventListener('click', () => {
  sizes -= 20;
  refs4.box.style.width = `${sizes}px`;
  refs4.box.style.height = `${sizes}px`;
});
