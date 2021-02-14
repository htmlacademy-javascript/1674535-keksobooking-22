import {createNearestPlaces} from './data.js';

const offerTypeLabels = new Map([
  ['flat', 'Квартира'],
  ['bungalow', 'Бунгало'],
  ['house', 'Дом'],
  ['palace', 'Дворец'],
]);

const roomCountLabels = new Map([
  [1, 'комната'],
  [2, 'комнаты'],
  [3, 'комнаты'],
  [4, 'комнаты'],
  [5, 'комнат'],
  [6, 'комнат'],
  [7, 'комнат'],
  [8, 'комнат'],
  [9, 'комнат'],
]);

const similarCardElement = document.querySelector('.map__canvas');
const similarCardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');
const similarCardFragment = document.createDocumentFragment();
const nearestPlaces = createNearestPlaces();

nearestPlaces.forEach((nearestPlace) => {
  const cardElement = similarCardTemplate.cloneNode(true);

  (nearestPlace.offer.title === undefined) ? cardElement.querySelector('.popup__title').classList.add('hidden') : cardElement.querySelector('.popup__title').textContent = nearestPlace.offer.title;

  (nearestPlace.offer.address === undefined) ? cardElement.querySelector('.popup__text--address').classList.add('hidden') : cardElement.querySelector('.popup__text--address').textContent = nearestPlace.offer.address;

  (nearestPlace.offer.price === undefined) ? cardElement.querySelector('.popup__text--price').classList.add('hidden') : cardElement.querySelector('.popup__text--price').textContent = `${nearestPlace.offer.price} ₽/ночь`;

  (nearestPlace.offer.type === undefined) ? cardElement.querySelector('.popup__type').classList.add('hidden') : cardElement.querySelector('.popup__type').textContent = offerTypeLabels.get(nearestPlace.offer.type);

  let capacityText = '';
  if (nearestPlace.offer.rooms!==undefined) {
    capacityText += `${nearestPlace.offer.rooms} ${roomCountLabels.get(nearestPlace.offer.rooms%10)}`;
  }
  if (nearestPlace.offer.guests!==undefined){
    (capacityText === '') ? capacityText += `${nearestPlace.offer.guests} ${(nearestPlace.offer.guests === 1)?'гостя':'гостей'}`: capacityText += ` для ${nearestPlace.offer.guests} ${nearestPlace.offer.guests===1?'гостя':'гостей'}`
  }
  (capacityText === '') ? cardElement.querySelector('.popup__text--capacity').classList.add('hidden') : cardElement.querySelector('.popup__text--capacity').textContent = capacityText;

  let timeText = '';
  if (nearestPlace.offer.checkin!==undefined) {
    timeText += `Заезд после ${nearestPlace.offer.checkin}`;
  }
  if (nearestPlace.offer.checkout!==undefined){
    (timeText === '') ? timeText += `Выезд до ${nearestPlace.offer.checkout}`: timeText += `, выезд до ${nearestPlace.offer.checkout}`;
  }
  (timeText === '') ? cardElement.querySelector('.popup__text--time').classList.add('hidden') : cardElement.querySelector('.popup__text--time').textContent = timeText;

  const featuresList = cardElement.querySelector('.popup__features');
  if (nearestPlace.offer.features === undefined || nearestPlace.offer.features.length === 0){
    featuresList.classList.add('hidden');
  }
  else{
    const features = cardElement.querySelectorAll('.popup__feature');
    features.forEach ((feature) => {
      const featureClassList = feature.classList;
      const featureClass = featureClassList[1];
      const featureType = featureClass.substring(featureClass.indexOf('--')+2);
      if (!nearestPlace.offer.features.includes(featureType)){
        featureClassList.add('hidden');
      }
    });
  }

  (nearestPlace.offer.description===undefined) ? cardElement.querySelector('.popup__description').classList.add('hidden') : cardElement.querySelector('.popup__description').textContent = nearestPlace.offer.description;

  const photosList = cardElement.querySelector('.popup__photos');
  if (nearestPlace.offer.photos === undefined ){
    photosList.classList.add('hidden');
  }
  else{
    const photosCount = nearestPlace.offer.photos.length;
    if (photosCount===0){
      photosList.classList.add('hidden');
    }
    else{
      cardElement.querySelector('.popup__photo').src = nearestPlace.offer.photos[0];
      if (photosCount > 1){
        for (let i = 1; i < photosCount; i++){
          const newPhotoElement = cardElement.querySelector('.popup__photo').cloneNode();
          newPhotoElement.src = nearestPlace.offer.photos[i];
          cardElement.querySelector('.popup__photos').appendChild(newPhotoElement);
        }
      }
    }
  }

  (nearestPlace.author.avatar) === 'undefined' ? cardElement.querySelector('.popup__avatar').classList.add('hidden') : cardElement.querySelector('.popup__avatar').src = nearestPlace.author.avatar;

  similarCardFragment.appendChild(cardElement);
});

similarCardElement.appendChild(similarCardFragment.firstChild);



