//getting the weather data

async function getWeatherData() {

    const url = "http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=7ad09c03e347e967e0ff9126b62b8d0f"
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
}

getWeatherData();