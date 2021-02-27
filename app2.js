var requestOptions = {
    method: 'GET',
    redirect: 'follow'
};

fetch("https://data.austintexas.gov/resource/fdj4-gpfu.json?crime_type=MURDER", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));

var url = "https://data.austintexas.gov/resource/fdj4-gpfu.json?crime_type=MURDER";

Plotly.d3.json(url, (err, raw) => {
    var lon = raw.features.map(f => f.geometry.longitude);
    var lat = raw.features.map(f => f.geometry.latitude);
    // var z = raw.features.map(f => f.properties.mag);

    var data = [
        { type: "scattermapbox", lon: lon, lat: lat, hoverinfo: "y" }
    ];

    var layout = {
        mapbox: { style: "dark", zoom: 2, center: { lon: -150, lat: 60 } },
        margin: { t: 0, b: 0 }
    };

    var config = {
        mapboxAccessToken: "pk.eyJ1Ijoiam9laGFuY29jazk1IiwiYSI6ImNraGxtZDQ4YTE5cngyeHFranluaWRuOG4ifQ.OEZ6Lt8RA8UnRe93SpyxyA"
    };

    Plotly.newPlot('myDiv', data, layout, config);
});