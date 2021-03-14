import './form.js';
import './settings.js';
import './photo.js';
import {createPoints, resetMap, updatePoints} from './map.js';
import {getData} from './api.js';
import {resetForm, setUserFormSubmit} from './form.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {setFilter} from './filter.js';



getData((points) => {
  createPoints(points);
  setFilter(() => updatePoints(points));
});

const successHandler = () => {
  showSuccessMessage();
  resetMap();
  resetForm();
}

setUserFormSubmit(successHandler, showErrorMessage);
