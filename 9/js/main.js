import './form.js';
import './settings.js';
import './avatar.js';
import {createPoints, resetMap} from './map.js';
import {getData} from './api.js';
import {resetForm, setUserFormSubmit} from './form.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

const POINTS_COUNT = 10;

getData((points) => {
  createPoints(points.slice(0, POINTS_COUNT));
});

const successHandler = () => {
  showSuccessMessage();
  resetMap();
  resetForm();
}

setUserFormSubmit(successHandler, showErrorMessage);
