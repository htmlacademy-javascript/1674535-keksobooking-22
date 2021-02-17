export {getRandomInteger, getRandomFloat};

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
