// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
// проверяет его содержимое на правильное количество введённых символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

const inputEl = document.querySelector('#validation-input');
const inputElLength = Number(inputEl.getAttribute('data-length'));


inputEl.addEventListener('blur', ColorInputBlur);

function ColorInputBlur() {
    if (inputEl.value.length < inputElLength  || inputEl.value.length > inputElLength) {
            inputEl.classList.contains('valid') 
            ? inputEl.classList.replace('valid', 'invalid')
            : inputEl.classList.add('invalid');
    }
    if (inputEl.value.length === inputElLength) {
            inputEl.classList.contains('invalid')
            ? inputEl.classList.replace('invalid', 'valid')
            : inputEl.classList.add('valid');
    }
}