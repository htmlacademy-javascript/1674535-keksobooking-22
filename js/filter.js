export {setFilter, filter};

const POINTS_COUNT = 10;

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

const housingType = document.querySelector('#housing-type');

const filter = (points) => {
  let filteredPoints = points.slice();
  if (housingType.value !== defaultFilter.housingType) {
    filteredPoints = filteredPoints.slice(0, POINTS_COUNT).filter((point) => point.offer.type === housingType.value);
  }
  return filteredPoints;
};

const setFilter = (cb) => {
  housingType.addEventListener('change', () => cb());
};
