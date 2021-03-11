import './form.js';
import './settings.js'
import {createPoints, resetMap} from './map.js';
import {getData} from './api.js';
import {resetForm, setUserFormSubmit} from './form.js';
import {showSuccessMessage, showErrorMessage} from './message.js';


getData((points) => {
  createPoints(points);
});

const successHandler = () => {
  showSuccessMessage();
  resetMap();
  resetForm();
}

setUserFormSubmit(successHandler, showErrorMessage);



