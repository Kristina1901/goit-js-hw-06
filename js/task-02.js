const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredientsList= document.querySelector('ul')


const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');

ingredientsList.innerHTML = list;

