Weather Application

This repository contains the Medium-level programming task completed for the Programming domain selection.

Weather Application

A web-based weather application that allows users to search for a city and view its current weather information using real-time weather data from Open-Meteo.

Features

The application allows the user to:

- Search for a city by entering its name
- Search using the Enter key
- Display the city and country
- Display the current temperature
- Display the current weather condition
- Display weather icons based on the weather condition
- Display humidity percentage
- Display wind speed
- Show a loading message while fetching weather data
- Display error messages for invalid or unavailable cities
- Provide a responsive interface for mobile devices

Weather Information

The application displays:

- Temperature in °C
- Weather condition
- Humidity
- Wind speed in km/h
- Weather-related icon

The application recognizes different weather conditions including:

- Clear Sky
- Partly Cloudy
- Overcast
- Foggy
- Drizzle
- Rain
- Snow
- Rain Showers
- Snow Showers
- Thunderstorm

API Used

The application uses Open-Meteo API to retrieve weather information.

Two API services are used:

- Open-Meteo Geocoding API - Used to find the latitude and longitude of the searched city
- Open-Meteo Forecast API - Used to retrieve the current weather information for those coordinates

Concepts Used

- HTML
- CSS
- JavaScript
- DOM Manipulation
- Event Listeners
- Async/Await
- Fetch API
- API Integration
- JSON Data Handling
- Functions
- Conditional Statements
- Error Handling
- Template Literals
- Responsive Web Design
- Media Queries

How It Works

The user enters a city name in the search box and clicks the Search button or presses Enter.

The application first uses the Open-Meteo Geocoding API to find the city's coordinates. It then uses those coordinates to request the current weather data from the Open-Meteo Forecast API.

The retrieved information is processed using JavaScript and displayed in the weather card.

Weather codes returned by the API are converted into readable weather conditions and corresponding icons using a JavaScript function.

If the city cannot be found or the API request fails, an appropriate error message is displayed.

User Interface

The application provides:

- A clean and simple weather dashboard
- Gradient background
- City search input
- Search button
- Weather information card
- Weather condition icons
- Humidity and wind speed sections
- Loading indicator
- Error message display
- Mobile-responsive layout

Files

- "index.html" - Contains the structure and layout of the Weather Application
- "style.css" - Contains the styling, layout, and responsive design
- "script.js" - Contains the application logic, API integration, weather-code handling, and error handling

Language

HTML
CSS
JavaScript

Author

Mahima Sharma
