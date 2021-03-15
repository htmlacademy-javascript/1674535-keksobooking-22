export {setFilter, filter};
import {POINTS_COUNT} from './main.js';

const defaultFilter = {
  housingType: 'any',
  housingPrice: 'any',
  housingRooms: 'any',
  housingGuests: 'any',
  wifi: false,
  dishwasher: false,
  parking: false,
  washer: false,
  elevator: false,
  conditioner: false,
};

const priceRange = {
  low: 10000,
  middle: 50000,
}

const housingType = document.querySelector('#housing-type');
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const wifi = document.querySelector('#filter-wifi');
const dishwasher = document.querySelector('#filter-dishwasher');
const parking = document.querySelector('#filter-parking');
const washer = document.querySelector('#filter-washer');
const elevator = document.querySelector('#filter-elevator');
const conditioner = document.querySelector('#filter-conditioner');

const filter = (points) => {
  let filteredPoints = points.slice();

  if (housingType.value !== defaultFilter.housingType) {
    filteredPoints = filteredPoints.filter((point) => point.offer.type === housingType.value);
  }

  if (housingPrice.value !== defaultFilter.housingPrice) {
    switch (housingPrice.value){
      case 'low':
        filteredPoints = filteredPoints.filter((point) => point.offer.price < priceRange.low);
        break;
      case 'middle':
        filteredPoints = filteredPoints.filter((point) => point.offer.price >= priceRange.low && point.offer.price <= priceRange.middle);
        break;
      case 'high':
        filteredPoints = filteredPoints.filter((point) => point.offer.price > priceRange.middle);
        break;
      default:
        break;
    }
  }

  if (housingRooms.value !== defaultFilter.housingRooms) {
    filteredPoints = filteredPoints.filter((point) => point.offer.rooms.toString() === housingRooms.value);
  }

  if (housingGuests.value !== defaultFilter.housingGuests) {
    filteredPoints = filteredPoints.filter((point) => point.offer.guests.toString() === housingGuests.value);
  }

  if (wifi.checked) {
    filteredPoints = filteredPoints.filter((point) => point.offer.features.indexOf(wifi.value) != -1);
  }

  if (dishwasher.checked) {
    filteredPoints = filteredPoints.filter((point) => point.offer.features.indexOf(dishwasher.value) != -1);
  }

  if (parking.checked) {
    filteredPoints = filteredPoints.filter((point) => point.offer.features.indexOf(parking.value) != -1);
  }

  if (washer.checked) {
    filteredPoints = filteredPoints.filter((point) => point.offer.features.indexOf(washer.value) != -1);
  }

  if (elevator.checked) {
    filteredPoints = filteredPoints.filter((point) => point.offer.features.indexOf(elevator.value) != -1);
  }

  if (conditioner.checked) {
    filteredPoints = filteredPoints.filter((point) => point.offer.features.indexOf(conditioner.value) != -1);
  }

  return filteredPoints.slice(0, POINTS_COUNT);
};

const setFilter = (cb) => {
  housingType.addEventListener('change', () => cb());
  housingPrice.addEventListener('change', () => cb());
  housingRooms.addEventListener('change', () => cb());
  housingGuests.addEventListener('change', () => cb());
  wifi.addEventListener('change', () => cb());
  dishwasher.addEventListener('change', () => cb());
  parking.addEventListener('change', () => cb());
  washer.addEventListener('change', () => cb());
  elevator.addEventListener('change', () => cb());
  conditioner.addEventListener('change', () => cb());
};
