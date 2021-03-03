import {showAlert} from './util.js';
import {sendData} from './api.js';
export {setUserFormSubmit};

const MAX_PRICE = 1000000;

const minPrices = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}

//const capacitiesVariant = {

//};

const adForm = document.querySelector('.ad-form');
const adFormResetBtn = document.querySelector('.ad-form__reset');
const typeHousing = document.querySelector('#type');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
//const capacity = document.querySelector('#capacity');


typeHousing.addEventListener('change', () => {
  const selectedValue = typeHousing.value;
  const price = document.querySelector('#price');
  price.setAttribute('max', MAX_PRICE);
  price.setAttribute('min', minPrices[selectedValue]);
  price.setAttribute('placeholder', minPrices[selectedValue]);
});

timein.addEventListener('change', () => {
  timeout.selectedIndex=timein.selectedIndex;
});

timeout.addEventListener('change', () => {
  timein.selectedIndex=timeout.selectedIndex;
});

roomNumber.addEventListener('change', () => {
  const selectedValue = roomNumber.value;
  switch (selectedValue){
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 100:
      break;
  }

});

const setUserFormSubmit = (onSuccess) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => showAlert('Не удалось отправить форму. Попробуйте ещё раз'),
      new FormData(evt.target),
    );
  });
};

adFormResetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();

});
