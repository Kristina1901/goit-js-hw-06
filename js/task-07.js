// Напиши скрипт, который реагирует на изменение значения input#font - size - control(событие input) и изменяет инлайн - стиль span#text обновляя свойство font - size. 
// В результате при перетаскивании ползунка будет меняться размер текста.

let rng = document.getElementById('font-size-control');
let text = document.getElementById('text');  
rng.addEventListener("input", 
  function() {            
    text.style.fontSize = rng.value + 'px'           
  });