import './form.js';
import './settings.js'
import {createPoints} from './map.js';
import {getData} from './api.js';
//import {setUserFormSubmit} from './form.js';

getData((points) => {
  createPoints(points);
});

//setUserFormSubmit();


