export {setDisabledPage, setActivePage, defaultForm};




const setDisabledPage = () => {
  const form = document.querySelector('.ad-form');
  const filter = document.querySelector('.map__filters');
  form.classList.add('ad-form--disabled');
  filter.classList.add('map__filters--disabled');
  const activeFields = document.querySelectorAll('.ad-form fieldset, .map__filters select');
  activeFields.forEach(element => {
    element.disabled=true;
  });
}

const setActivePage = () => {
  const form = document.querySelector('.ad-form');
  const filter = document.querySelector('.map__filters');
  form.classList.remove('ad-form--disabled');
  filter.classList.remove('map__filters--disabled');
  const disabledFields = document.querySelectorAll('fieldset[disabled], select[disabled]');
  disabledFields.forEach(element => {
    element.disabled=false;
  });
}

const defaultForm = new Object();

const saveDefaultForm = () => {
  defaultForm.avatar =document.querySelector('#avatar-photo').getAttribute('src');
  defaultForm.title = document.querySelector('#title').value;
  defaultForm.typeHousing = document.querySelector('#type').value;
  defaultForm.price = document.querySelector('#price').value;
  defaultForm.pricePlaceHolder =document.querySelector('#price').getAttribute('placeholder');
  defaultForm.timein = document.querySelector('#timein').value;
  defaultForm.timeout = document.querySelector('#timeout').value;
  defaultForm.roomNumber = document.querySelector('#room_number').value;
  defaultForm.capacity = document.querySelector('#capacity').value;
  defaultForm.description = document.querySelector('#description').value;
}

setDisabledPage();
saveDefaultForm();



