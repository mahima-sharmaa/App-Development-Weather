const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");

const loading = document.getElementById("loading");
const error = document.getElementById("error");
const weatherCard = document.getElementById("weatherCard");

const cityName = document.getElementById("cityName");
const temperature = document.getElementById("temperature");
const condition = document.getElementById("condition");
const humidity = document.getElementById("humidity");
const windSpeed = document.getElementById("windSpeed");
const weatherIcon = document.getElementById("weatherIcon");


// Search button
searchBtn.addEventListener("click", searchWeather);


// Press Enter to search
cityInput.addEventListener("keypress", function(event) {

    if (event.key === "Enter") {
        searchWeather();
    }

});


// Main weather function
async function searchWeather() {

    const city = cityInput.value.trim();

    // Check empty input
    if (city === "") {

        showError("Please enter a city name.");

        return;
    }


    // Show loading
    loading.style.display = "block";

    error.style.display = "none";

    weatherCard.style.display = "none";


    try {

        // STEP 1: Find city coordinates
        const geoURL =
            `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;

        const geoResponse = await fetch(geoURL);

        if (!geoResponse.ok) {
            throw new Error("Unable to find city.");
        }

        const geoData = await geoResponse.json();


        // Check if city exists
        if (!geoData.results || geoData.results.length === 0) {

            throw new Error(
                "City not found. Please enter a valid city name."
            );

        }


        const location = geoData.results[0];

        const latitude = location.latitude;
        const longitude = location.longitude;


        // STEP 2: Get weather data
        const weatherURL =
            `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,weather_code,wind_speed_10m&timezone=auto`;

        const weatherResponse = await fetch(weatherURL);

        if (!weatherResponse.ok) {
            throw new Error("Unable to get weather information.");
        }

        const weatherData = await weatherResponse.json();


        // Current weather data
        const current = weatherData.current;


        // STEP 3: Display data

        cityName.textContent =
            `${location.name}, ${location.country}`;

        temperature.textContent =
            Math.round(current.temperature_2m);

        humidity.textContent =
            current.relative_humidity_2m;

        windSpeed.textContent =
            current.wind_speed_10m;


        // Get weather condition and icon
        const weatherInfo =
            getWeatherInfo(current.weather_code);

        condition.textContent =
            weatherInfo.condition;

        weatherIcon.textContent =
            weatherInfo.icon;


        // Show weather card
        weatherCard.style.display = "block";

    }

    catch (err) {

        showError(err.message);

    }

    finally {

        loading.style.display = "none";

    }

}


// Weather code function
function getWeatherInfo(code) {

    if (code === 0) {

        return {
            condition: "Clear Sky",
            icon: "☀️"
        };

    }

    if (code === 1 || code === 2) {

        return {
            condition: "Partly Cloudy",
            icon: "🌤️"
        };

    }

    if (code === 3) {

        return {
            condition: "Overcast",
            icon: "☁️"
        };

    }

    if (
        code === 45 ||
        code === 48
    ) {

        return {
            condition: "Foggy",
            icon: "🌫️"
        };

    }

    if (
        code >= 51 &&
        code <= 57
    ) {

        return {
            condition: "Drizzle",
            icon: "🌦️"
        };

    }

    if (
        code >= 61 &&
        code <= 67
    ) {

        return {
            condition: "Rain",
            icon: "🌧️"
        };

    }

    if (
        code >= 71 &&
        code <= 77
    ) {

        return {
            condition: "Snow",
            icon: "❄️"
        };

    }

    if (
        code >= 80 &&
        code <= 82
    ) {

        return {
            condition: "Rain Showers",
            icon: "🌦️"
        };

    }

    if (
        code === 85 ||
        code === 86
    ) {

        return {
            condition: "Snow Showers",
            icon: "🌨️"
        };

    }

    if (
        code >= 95 &&
        code <= 99
    ) {

        return {
            condition: "Thunderstorm",
            icon: "⛈️"
        };

    }


    return {
        condition: "Unknown Weather",
        icon: "🌡️"
    };

}


// Error function
function showError(message) {

    error.textContent = message;

    error.style.display = "block";

    weatherCard.style.display = "none";

}