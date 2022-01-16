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
const boxes = document.getElementById("boxes")

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}




let newarr = []


function createBoxes(amount) {
   
    amount = inputValue.value
    
    let newarr = []
    
       
   
   
    for (let i = 0; i < amount; i += 1) {
        
        let newEl = document.createElement("div")
        newEl.style.backgroundColor = getRandomHexColor()
        newEl.classList.add("new-class")
        newEl.style.width = (30 + (i * 10)) + 'px';
        newEl.style.height = (30 + (i * 10))+'px';
       
    
    
       newarr.push (newEl) 
      
    }
    
    
     
   
   boxes.append(...newarr);
      
   
        
}
function destroy() {
   boxes.innerHTML = '';
} 
  

buttonCreate.addEventListener("click", createBoxes)
buttonDestroy.addEventListener("click", destroy)

