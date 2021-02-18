export {setDisabledPage};
export {setActivePage};

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
setDisabledPage();
