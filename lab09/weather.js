function reportResults(response) {
    let weatherData = '';
    if (response !== 'error') {
        const myData = JSON.parse(response);
        weatherData += "<strong>Precipitation:</strong> " + myData.current_weather.precipitation + "\"<br>";
        weatherData += "<strong>Temperature:</strong> " + myData.current_weather.temperature + "°F<br>";
        const cloudCover = myData.current_weather.cloudcover < 50 ? '☀️' : '☁️';
        weatherData += "<span>" + cloudCover + "</span>";
    }
    document.getElementById('weather').innerHTML = weatherData;
}

const endpoint = 'https://api.open-meteo.com/v1/forecast?latitude=43.0481&longitude=-76.1474&current_weather=true&temperature_unit=fahrenheit&precipitation_unit=inch';

const request = new XMLHttpRequest();
request.addEventListener('readystatechange', () => {
    if (request.readyState === 4 && request.status === 200) {
        reportResults(request.responseText);
    } else if (request.readyState === 4) {
        reportResults('error');
    }
});

request.open('GET', endpoint);
request.send();
