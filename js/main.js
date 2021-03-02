
import './form.js';
import './settings.js'
import './map.js';
//import './create-fetch.js';
fetch('https://22.javascript.pages.academy/keksobooking/data')
  .then((response) => response.json())
  .then((cards) => {
    console.log(cards);
  });
