'use strict';
$(document).ready(function () {

    $.get("https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/" + darkSkyKey + "/29.4241,-98.4936").done(function (data) {
        var userTime = (new Date(data.currently.time * 1000));
        console.log(userTime);
        console.log(data);
    });


    mapboxgl.accessToken = mapboxToken;
    var map = new mapboxgl.Map({
        container: 'map',      // property is container, value is map //
        style: "mapbox://styles/mapbox/satellite-v9",
        zoom: 10,
        center: [-98.4916, 29.4252]
    });


    var weatherIcons = {
            "clear-day": "<img src='./weather-icons/sun.png' alt='day'>",
            "clear-night": "<img src='./weather-icons/night.png' alt='night'>",
            "rain": "<img src='./weather-icons/rain.png' alt='rain'>",
            "snow": "<img src='./weather-icons/snow.png' alt='snow'>",
            "sleet": "<img src='./weather-icons/sleet.png' alt='sleet'>",
            "wind": "<img src='./weather-icons/wind.png' alt='wind'>",
            "fog": "<img src='./weather-icons/fog.png' alt='fog'>",
            "cloudy": "<img src='./weather-icons/cloudy.png' alt='clouds'>",
            "partly-cloudy-day": "<img src='./weather-icons/sun-partly-cloudy.png' alt='p-c-day'>",
            "partly-cloudy-night": "<img src='./weather-icons/night-partly-cloudy.png' alt='p-c-night'>"
        };



$('#todaysIcon').html(weatherIcons.rain);
$('#tomorrowsIcon').html(weatherIcons.wind);
$('#inTwoDaysIcon').html(weatherIcons["clear-day"]);















});
