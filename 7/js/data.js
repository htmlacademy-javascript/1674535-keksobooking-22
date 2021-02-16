import {getRandomInteger, getRandomFloat} from './util.js';
export {createNearestPlaces};

const OBJECTS_COUNT = 10;
const TITLE_TEXT = 'Мега-выгодное предложение!';
const MAX_GUESTS_COUNT = 8;
const MAX_ROOMS_COUNT = 6;
const MIN_PRICE = 0;
const MAX_PRICE = 1000000;
const MIN_X = 35.65000;
const MAX_X = 35.70000;
const MIN_Y = 139.70000;
const MAX_Y = 139.80000;
const NUMBER_OF_DECIMAL_X_Y = 5;
const MIN_PHOTO_NUMBER = 1;
const MAX_PHOTO_NUMBER = 8;

const CHECK_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const OBJECT_TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const OBJECT_IMAGES = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const DESCRIPTION_PHRASES = [
  'Милый домик у моря',
  'Шикарное бунгало для любовных утех',
  'Респектабельный коттедж',
  'Коммуналка в сердце Москвы',
  'Шедевр Замкадья',
  'Просто отличный дом',
  'В тесноте, да не в обиде',
  'С милым и в шалаше рай',
  'Мечта миллионера',
  'Петербургские трущобы',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const createRandomArray = (elements) => {
  const newArrayLength = getRandomInteger(0, elements.length);
  let mixedElements = [];

  if (newArrayLength !== 0){
    mixedElements = elements.slice();
    for (let i = mixedElements.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [mixedElements[i], mixedElements[j]] = [mixedElements[j], mixedElements[i]];
    }
    return mixedElements.slice(0, newArrayLength);
  }

  return mixedElements;
}

const createAutor = () => {
  return{
    avatar: 'img/avatars/user0'+getRandomInteger(MIN_PHOTO_NUMBER, MAX_PHOTO_NUMBER) + '.png',
  };
}


const createLocation = () => {
  return{
    x: getRandomFloat(MIN_X, MAX_X, NUMBER_OF_DECIMAL_X_Y),
    y: getRandomFloat(MIN_Y, MAX_Y, NUMBER_OF_DECIMAL_X_Y),
  };
}

const createOffer = (newLocation) => {
  return{
    title: TITLE_TEXT,
    address: newLocation.x + ', ' + newLocation.y,
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(OBJECT_TYPES),
    rooms: getRandomInteger(1, MAX_ROOMS_COUNT),
    guests: getRandomInteger(1, MAX_GUESTS_COUNT),
    checkin: getRandomArrayElement(CHECK_TIMES),
    checkout: getRandomArrayElement(CHECK_TIMES),
    features: createRandomArray(FEATURES),
    description: getRandomArrayElement(DESCRIPTION_PHRASES),
    photos: createRandomArray(OBJECT_IMAGES),
  };
}

const createNearestPlace = () => {
  const newLocation = createLocation();
  return {
    author: createAutor(),
    location: newLocation,
    offer: createOffer(newLocation),
  };
};

const createNearestPlaces = () => {
  return new Array(OBJECTS_COUNT).fill(null).map(() => createNearestPlace());
};

//createNearestPlaces();
