// City
var city = $("#search-input").val();
var cityName = $("<h2>").text(response.name);
var cityNameList = $("<li>").text(response.name);
var cityTemp = $("<p class='temp'>").text(Math.floor(tempF) + "°");
var cityHumidity = $("<p>").text("Humidity: " + response.main.humidity + "%");
var cityWindSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + " MPH");
// Temp
var tempInt = parseInt(response.main.temp);
var tempF = (tempInt * 9 / 5) - 459.67;
// Loc
var lat = response.coord.lat;
var lon = response.coord.lon;
// U R ELLS
var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";
var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=000401db107b5cbe165fdf198e9f1e47&lat=" + lat + "&lon=" + lon;

window.onload = () {

    $("search-button").on("click", function (event) {
        event.preventDefault();
        saveTolocalStorage();
        saveTolocalStorage1();
        saveTolocalStorage2();
        saveTolocalStorage3();
        saveTolocalStorage4();
        saveTolocalStorage5();
        saveTolocalStorage6();

    })
}