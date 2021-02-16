const MAX_PRICE = 1000000;

const minPrices = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

const type = document.querySelector('#type');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');

type.addEventListener('change', () => {
  const selectedOptionValue = type.options[type.selectedIndex].value;
  const price = document.querySelector('#price');
  price.setAttribute('max', MAX_PRICE);
  price.setAttribute('min', minPrices[selectedOptionValue]);
  price.setAttribute('placeholder', minPrices[selectedOptionValue]);
});

timein.addEventListener('change', () => {
  timeout.selectedIndex=timein.selectedIndex;
});

timeout.addEventListener('change', () => {
  timein.selectedIndex=timeout.selectedIndex;
});

