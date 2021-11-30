let counterValue = 0;


const decrementNumber = document.querySelector('button[data-action="decrement"]');
 const handleClick = () => {
  console.log(counterValue -= 1);
};
decrementNumber.addEventListener("click", handleClick);

 






let incrementNumber = document.querySelector('button[data-action="increment"]');
const handleClicksec = () => {
  console.log(counterValue += 1);
};

incrementNumber.addEventListener("click", handleClicksec);


