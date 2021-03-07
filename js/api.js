const getData = (onSuccess) => {
  fetch('https://22.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((points) => {
      onSuccess(points);
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://22.javascript.pages.academy/keksobooking',
    {
      method: 'POST',
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        console.log('попали в успех');
        onSuccess();
      } else {
        console.log('попали в НЕуспех');
        onFail();
      }
    })
    .catch(() => {
      onFail();
    });
};

export {getData, sendData};






