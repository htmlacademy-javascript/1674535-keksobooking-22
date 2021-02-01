const getRandomInteger = (min, max) => {
  if (typeof min === 'number' || typeof max === 'number' || min > max || min < 0){
    alert('Задайте корректный диапазон');
    return undefined;
  }

  min = Math.ceil(min);
  max = Math.floor(max);

  if (min == max){
    return min;
  }

  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomFloat = (min, max, n) => {
  if (typeof min === 'number' || typeof max === 'number' || typeof n === 'number' || min > max || min < 0){
    alert('Задайте корректный диапазон. Границы не могут быть отрицательными. Нижняя граница должна быть меньше или равна верхней');
    return undefined;
  }

  if (min == max){
    return min;
  }
  
  return (Math.random() * (max - min) + min).toFixed(n);
}

