const weatherRes = new Promise((resolve, reject) => {
  if (5 == 6) {
    resolve("Promise resolved!");
  } else {
    reject("Promise rejected!");
  }
});

weatherRes
  .then((msg) => console.log(msg))
  .catch((err) => console.log(err));

function getWeather() {
  const inputRef = document.querySelector("#cityName");
  const cityName = inputRef.value;

  const res = axios.get(
    `https://p2pclouds.up.railway.app/v1/learn/weather?city=${cityName}`
  );

  res
    .then((data) => {
      const weather = data.data.current.temp_c;
      const fahrenheit = data.data.current.temp_f;
      const divRef = document.querySelector("#weather");
      divRef.innerHTML = `
        <h2>Weather Information</h2>
        <p>Temperature (°C): ${weather}</p>
        <p>Temperature (°F): ${fahrenheit}</p>
      `;
    })
    .catch((error) => {
      console.log("Catch");
      console.error(error);
    });
}
