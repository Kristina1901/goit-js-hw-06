// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

const inputEl = document.querySelector('#font-size-control');
const inputElSpan = document.querySelector('#text');
const RangeEl = inputEl.getAttribute("type")



inputEl.addEventListener('input', FontInput);

// function  FontInput() {
//     if (inputEl.value.length < inputElLength  || inputEl.value.length > inputElLength) {
//             inputEl.classList.contains('valid') 
//             ? inputEl.classList.replace('valid', 'invalid')
//             : inputEl.classList.add('invalid');
//     }
//     if (inputEl.value.length === inputElLength) {
//             inputEl.classList.contains('invalid')
//             ? inputEl.classList.replace('invalid', 'valid')
//             : inputEl.classList.add('valid');
//     }
// }