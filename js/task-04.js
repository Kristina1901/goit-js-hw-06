let counterValue = 0;

let total = document.querySelector('#value');







const decrementNumber = document.querySelector('button[data-action="decrement"]');

 const handleClick = () => {
    counterValue -= 1;
   total.textContent = counterValue;
   
  
   
  
};
decrementNumber.addEventListener("click", handleClick);




let incrementNumber = document.querySelector('button[data-action="increment"]');

const handleClicksec = () => {
  counterValue += 1;
  total.textContent = counterValue;
};


incrementNumber.addEventListener("click", handleClicksec);



