//get user input
const userLocation = prompt("enter your location");

//getting the weather data

async function getWeatherData() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    userLocation +
    "&appid=7ad09c03e347e967e0ff9126b62b8d0f";

  let response = await fetch(url, { mode: "cors" });
  let data = await response.json();
  console.log(data);
}

getWeatherData();
