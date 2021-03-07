import './form.js';
import './settings.js'
import {createPoints, resetMap} from './map.js';
import {getData} from './api.js';
import {resetForm, setUserFormSubmit} from './form.js';

getData((points) => {
  createPoints(points);
});

const showSuccessMessage = () =>{
  const main = document.querySelector('main');
  const successTemplate = document.querySelector('#success').content;
  const successMessage = successTemplate.cloneNode(true);
  main.prepend(successMessage);
}

const showErrorMessage = () =>{
  const main = document.querySelector('main');
  const errorTemplate = document.querySelector('#error').content;
  const errorMessage = errorTemplate.cloneNode(true);
  main.prepend(errorMessage);
}

const successHandler = () => {
  showSuccessMessage();
  resetMap();
  resetForm();
}

setUserFormSubmit(successHandler, showErrorMessage);

const errorButton = document.querySelector('.error__button');
console.log(errorButton);
errorButton.addEventListener('click', (evt) => {
  evt.preventDefault();

});

//showSuccessMessage();
//showErrorMessage();


