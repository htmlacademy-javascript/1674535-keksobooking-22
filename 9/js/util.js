export {getRandomInteger, getRandomFloat, showAlert, isEscEvent};

const ALERT_SHOW_TIME = 5000;

const getRandomInteger = (min, max) => {
  if (min > max || min < 0){
    alert('Задайте корректный диапазон. Границы не могут быть отрицательными. Нижняя граница должна быть меньше или равна верхней');
    return undefined;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min === max){
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = (min, max, numberOfDecimal) => {
  if (min > max || min < 0){
    alert('Задайте корректный диапазон. Границы не могут быть отрицательными. Нижняя граница должна быть меньше или равна верхней');
    return undefined;
  }

  if (min === max){
    return min;
  }

  return (Math.random() * (max - min) + min).toFixed(numberOfDecimal);
}

const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = 100;
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = 0;
  alertContainer.style.top = 0;
  alertContainer.style.right = 0;
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';
  alertContainer.textContent = message;
  document.body.append(alertContainer);
  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
}

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};
