/* global L:readonly */
import {createNearestPlaces} from './data.js';
import {createCard} from './card.js';

const CENTER_LATITUDE = 35.68170;
const CENTER_LONGITUDE = 139.75388;
const SCALE = 13;
const MAP = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const COPY_WRITE = '&copy; <a rel="nofollow" href="http://osm.org/copyright">OpenStreetMap</a> contributors';
const MAIN_TITLE = 'Моё объявление';

const mainIconParameters = {
  width: 52,
  heigth: 52,
  url: 'img/main-pin.svg',
}

const iconParameters = {
  width: 40,
  heigth: 40,
  url: 'img/pin.svg',
}

const address = document.querySelector('#address');

const setActivePage = () => {
  const form = document.querySelector('.ad-form');
  form.classList.remove('ad-form--disabled');
  const filter = document.querySelector('.map__filters');
  filter.classList.remove('map__filters--disabled');
  const disabledFields = document.querySelectorAll('fieldset[disabled], select[disabled]');
  disabledFields.forEach(element => {
    element.disabled=false;
  });
}

const map = L.map('map-canvas')
  .on('load', () => {
    address.value = `${CENTER_LATITUDE}, ${CENTER_LONGITUDE}`;
    setActivePage();
  })
  .setView({
    lat: CENTER_LATITUDE,
    lng: CENTER_LONGITUDE,
  }, SCALE);

L.tileLayer(MAP, {attribution: COPY_WRITE}).addTo(map);

const mainIcon = L.icon({
  iconUrl: mainIconParameters.url,
  iconSize: [mainIconParameters.width, mainIconParameters.heigth],
  iconAnchor: [mainIconParameters.width/2, mainIconParameters.heigth],
});

const icon = L.icon({
  iconUrl: iconParameters.url,
  iconSize: [iconParameters.width, iconParameters.heigth],
  iconAnchor: [iconParameters.width/2, iconParameters.heigth],
});

const mainMarker = L.marker(
  {
    lat: CENTER_LATITUDE,
    lng: CENTER_LONGITUDE,
  },
  {
    draggable: true,
    icon: mainIcon,
  },
);

mainMarker.addTo(map)
  .bindPopup(MAIN_TITLE,
    {
      keepInView: true,
    })
  .on('moveend', (evt) => {
    const coordinates = evt.target.getLatLng();
    address.value = `${coordinates.lat.toFixed(5)}, ${coordinates.lng.toFixed(5)}`;
  });

const points = createNearestPlaces();

points.forEach((point) => {
  const marker = L.marker(
    {
      lat: point.location.x,
      lng: point.location.y,
    },
    {
      icon,
    },
  );
  const title = createCard(point);
  marker.addTo(map)
    .bindPopup(title,
      {
        keepInView: true,
      });
});
