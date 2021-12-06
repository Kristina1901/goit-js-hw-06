// Напиши скрипт создания и очистки коллекции элементов.
// Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция.
// При нажатии на кнопку Очистить, коллекция элементов очищается.
// Создай функцию createBoxes(amount), которая принимает один параметр - число. 
// Функция создает столько < div >, сколько указано в amount и добавляет их в div#boxes.

// Размеры самого первого <div> - 30px на 30px.
// Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
// Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для получения цвета.
const buttonCreate = document.querySelector("[data-create]");
const inputValue = document.querySelector('#controls input');
const buttonDestroy = document.querySelector("[data-destroy]");
const boxes = document.querySelector('#boxes');
let collection = 0
function createBoxes(amount) {
   collection = inputValue.value
    console.log(Array.apply(null, {length: collection}).map(Number.call, Number))
    
}
buttonCreate.addEventListener("click", createBoxes)

