const getRandomInteger = (min, max) => {
  if (typeof min != 'number' || typeof max != 'number' || min > max || min < 0){
    alert('Задайте корректный диапазон. Границы не могут быть отрицательными. Нижняя граница должна быть меньше или равна верхней');
    return undefined;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min == max){
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = (min, max, numberOfDecimal) => {
  if (typeof min != 'number' || typeof max != 'number' || typeof numberOfDecimal != 'number' || min > max || min < 0){
    alert('Задайте корректный диапазон. Границы не могут быть отрицательными. Нижняя граница должна быть меньше или равна верхней');
    return undefined;
  }

  if (min == max){
    return min;
  }

  return (Math.random() * (max - min) + min).toFixed(numberOfDecimal);
}

const getRandomArrayElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const OBJECTS_COUNT = 10;
const MAX_GUESTS_COUNT = 8;
const MAX_ROOMS_COUNT = 6;
const MIN_PRICE = 1500000;
const MAX_PRICE = 15000000;

const CHECK_TIME = [
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

const getRandomLendhtArray = (elements)=> {
  let newArrayLength = getRandomInteger(0, elements.length);
  if (newArrayLength == 0){
    return null;
  }

  let tempArray = new Array();
  tempArray[0] = getRandomInteger(0, elements.length - 1);
  if (newArrayLength !=1 ){
    for (let i = 1; i < newArrayLength; i++){
      let isNew;
      do {
        isNew = true;
        let randomNumber = getRandomInteger(0, elements.length - 1);
        for (let j = 0; j < i; j++){
          if (randomNumber == tempArray[j]){
            isNew = false;
          }
        }
        if (isNew == true){
          tempArray[i] = randomNumber;
        }
      }
      while (isNew == false)
    }
  }

  const newArray = tempArray.map((newArr) => {
    return elements[newArr];
  });

  return newArray;
}

const createAutor = () => {
  return{
    avatar: 'img/avatars/user0'+getRandomInteger(1, 8) + '.png',
  };
}


const createLocation = () => {
  return{
    x: getRandomFloat(35.65000, 35.70000, 5),
    y: getRandomFloat(139.70000, 139.80000, 5),
  };
}

const createOffer = (newLocation) => {
  return{
    title: 'Мега-выгодное предложение!',
    address: newLocation.x + ', ' + newLocation.y,
    price: getRandomInteger(MIN_PRICE, MAX_PRICE),
    type: getRandomArrayElement(OBJECT_TYPES),
    rooms: getRandomInteger(0, MAX_ROOMS_COUNT),
    guests: getRandomInteger(0, MAX_GUESTS_COUNT),
    checkin: getRandomArrayElement(CHECK_TIME),
    checkout: getRandomArrayElement(CHECK_TIME),
    features: getRandomLendhtArray(FEATURES),
    description: getRandomArrayElement(DESCRIPTION_PHRASES),
    photos: getRandomLendhtArray(OBJECT_IMAGES),
  };
}

const createNearestPlace = () => {
  const newLocation = createLocation();
  return {
    author: createAutor(),
    location: newLocation,
    offrer: createOffer(newLocation),
  };
};

const createNearestPlaces = () => {
  return new Array(OBJECTS_COUNT).fill(null).map(() => createNearestPlace());
};

createNearestPlaces();


















