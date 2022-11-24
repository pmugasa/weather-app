const tempPara = document.querySelector(".actual-temp");
const feelsLike = document.querySelector(".feels-like");

//get user input
let city = () => {
  return document.getElementById("city").value;
};

//getting the button
const btn = document.querySelector(".btn");

btn.addEventListener("click", handleClick);

// handliing click event on button
function handleClick(e) {
  e.preventDefault();
  getWeatherData();
}

//getting the weather data
async function getWeatherData() {
  const url =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city() +
    "&units=metric&appid=7ad09c03e347e967e0ff9126b62b8d0f";

  try {
    let response = await fetch(url, { mode: "cors" });
    let data = await response.json();
    tempPara.textContent =
      "Current temp is:" + " " + data.main.temp + " degrees";
    feelsLike.textContent =
      "Feels like:" + " " + data.main.feels_like + " degrees";
    console.log("response status:", response.status);
  } catch (err) {
    console.log(err);
  }
}

// need to first get hold of the results div

// create paragraphs
// add the response results onto the paragraphs
