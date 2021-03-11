import {sendData} from './api.js';
import {resetMap} from './map.js';
import {defaultForm} from './settings.js';
export {setUserFormSubmit, resetForm};

const titleRange = {
  min: 30,
  max: 100,
}

const MAX_PRICE = 1000000;

const minPrices = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
}
const avatar = document.querySelector('#avatar-photo');
const adForm = document.querySelector('.ad-form');
const title = document.querySelector('#title');
const typeHousing = document.querySelector('#type');
const price = document.querySelector('#price');
const timein = document.querySelector('#timein');
const timeout = document.querySelector('#timeout');
const roomNumber = document.querySelector('#room_number');
const capacity = document.querySelector('#capacity');
const description = document.querySelector('#description');
const adFormResetBtn = document.querySelector('.ad-form__reset');

price.setAttribute('max', MAX_PRICE); //или максимум прописать в атрибуты сразу???

typeHousing.addEventListener('change', () => {
  const selectedValue = typeHousing.value;
  const minPrice = minPrices[selectedValue];
  price.setAttribute('min', minPrice);
  price.setAttribute('placeholder', minPrice);
  checkPrice(price, minPrice);
});

price.addEventListener('input', () => {
  const selectedValue = typeHousing.value;
  const minPrice = minPrices[selectedValue];
  checkPrice(price, minPrice);
});

const checkPrice = (price, minPrice) => {
  if (price.value < minPrice){
    price.setCustomValidity(`Мин. значение для данного типа жилья равно: ${minPrice}`);
  }
  else{
    price.setCustomValidity('');
  }
  price.reportValidity();
}

timein.addEventListener('change', () => {
  timeout.selectedIndex=timein.selectedIndex;
});

timeout.addEventListener('change', () => {
  timein.selectedIndex=timeout.selectedIndex;
});

roomNumber.addEventListener('change', () => {
  const selectedRoomNumber = roomNumber.value;
  const selectedCapacity = capacity.value;
  const capacities = Array.from(capacity.children);
  switch (selectedRoomNumber){
    case '1':
      capacities.forEach(e => {
        if (e.value != 1){
          e.setAttribute('disabled',true);
        }
        else{
          e.removeAttribute('disabled');
        }
      });
      if (selectedCapacity!=1){
        capacity.setCustomValidity('Недопустимое кол-во гостей для выбранного кол-ва комнат');
      }
      else{
        capacity.setCustomValidity('');
      }
      capacity.reportValidity();
      break;
    case '2':
      capacities.forEach(e => {
        if (e.value != 1 && e.value != 2){
          e.setAttribute('disabled',true);
        }
        else{
          e.removeAttribute('disabled');
        }
      });
      if (selectedCapacity!=1 && selectedCapacity!=2){
        capacity.setCustomValidity('Недопустимое кол-во гостей для выбранного кол-ва комнат');
      }
      else{
        capacity.setCustomValidity('');
      }
      capacity.reportValidity();
      break;
    case '3':
      capacities.forEach(e => {
        if (e.value != 1 && e.value != 2 && e.value != 3){
          e.setAttribute('disabled',true);
        }
        else{
          e.removeAttribute('disabled');
        }
      });
      if (selectedCapacity != 1 && selectedCapacity != 2 && selectedCapacity != 3){
        capacity.setCustomValidity('Недопустимое кол-во гостей для выбранного кол-ва комнат');
      }
      else{
        capacity.setCustomValidity('');
      }
      capacity.reportValidity();
      break;
    case '100':
      capacities.forEach(e => {
        if (e.value != 0){
          e.setAttribute('disabled', true);
        }
        else{
          e.removeAttribute('disabled');
        }
      });
      if (selectedCapacity != 0){
        capacity.setCustomValidity('Недопустимое кол-во гостей для выбранного кол-ва комнат');
      }
      else{
        capacity.setCustomValidity('');
      }
      capacity.reportValidity();
      break;
  }
});


title.addEventListener('input', () => {
  const titleLength = title.value.length;
  if (titleLength < titleRange.min) {
    title.setCustomValidity('Ещё ' + (titleRange.min - titleLength) +' симв.');
  } else if (titleLength > titleRange.max) {
    title.setCustomValidity('Удалите лишние ' + (titleLength - titleRange.max) +' симв.');
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
});

const setUserFormSubmit = (onSuccess, onError) => {
  adForm.addEventListener('submit', (evt) => {
    evt.preventDefault();
    sendData(
      () => onSuccess(),
      () => onError(),
      new FormData(evt.target),
    );
  });
};

const resetForm = () => {
  const photo = document.querySelector('.ad-form__photo');
  avatar.setAttribute('src', defaultForm.avatar);
  title.value = defaultForm.title;
  typeHousing.value = defaultForm.typeHousing;
  price.value = defaultForm.price;
  price.setAttribute('placeholder', defaultForm.pricePlaceHolder);
  timein.value = defaultForm.timein;
  timeout.value = defaultForm.timeout;
  roomNumber.value = defaultForm.roomNumber;
  capacity.value = defaultForm.capacity;
  description.value = defaultForm.description;
  const features = document.querySelectorAll('.feature__checkbox');
  features.forEach(e => {
    if (e.checked){
      e.checked = false;
    }
  });
  photo.innerHTML='';
};

adFormResetBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
  resetMap();
});

