// Напиши скрипт, который изменяет цвета фона элемента < body >
// через инлайн стиль при клике на button.change - color и выводит значение цвета в span.color.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('button');
const paragrafText = document.querySelector(".color");
const color = document.body;




button.addEventListener("click", function() {            
  paragrafText.textContent = getRandomHexColor()
  color.style.backgroundColor =  paragrafText.textContent
  });