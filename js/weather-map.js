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

});