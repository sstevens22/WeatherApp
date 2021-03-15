window.onload = function () {

    $("#search-button").on("click", function (event) {
          event.preventDefault();
          saveToLocalStorage();
          saveToLocalStorage1();
          saveToLocalStorage2();
          saveToLocalStorage3();
          saveToLocalStorage4();
          saveToLocalStorage5();
          saveToLocalStorage6();
  
          // search-input box
          var city = $("#search-input").val();
  
          // URL for HTML
          var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";
  
          $.ajax({
                url: queryURL,
                method: "GET"
  
          }).then(function (response) {
  
                // Constructing HTML
                var cityName = $("<h2>").text(response.name);
                var cityNameList = $("<li>").text(response.name);
                cityNameList.addClass("list-group-item");
  
                var weatherIcon = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
                var weatherType = $("<p class='bold'>").text(response.weather[0].main);
  
                // Temp
                var tempInt = parseInt(response.main.temp);
                var tempF = (tempInt * 9 / 5) - 459.67;
                var cityTemp = $("<p class='temp'>").text(Math.floor(tempF) + "°");
                var cityHumidity = $("<p>").text("Humidity: " + response.main.humidity + "%");
                var cityWindSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + " MPH");
  
                // Empty the contents of the city-box div
                $("#city-container").empty();
                $("#city-container").append(cityName, weatherIcon, weatherType, cityTemp, cityHumidity, cityWindSpeed);
  
                // prepend the searched city onto city-list
                $("#list-group").prepend(cityNameList);
  
                // UV INDEX
                var lat = response.coord.lat;
                var lon = response.coord.lon;
  
                // URL for UV index
                var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=000401db107b5cbe165fdf198e9f1e47&lat=" + lat + "&lon=" + lon;
  
                $.ajax({
                      url: queryURL2,
                      method: "GET"
  
                }).then(function (response2) {
  
                      var uvIndex = $("<p>").text("UV Index: " + Math.floor(response2.value));
                      $("#city-box").append("<div id='uv-box' class=''></div>");
                      $("#uv-box").append(uvIndex);
  
                      // UV Index Color
                      if (Math.floor(response2.value) <= 2) {
                            $("#uv-box").addClass("uvFavorable");
                      } if (Math.floor(response2.value) >= 3 && Math.floor(response2.value) <= 8) {
                            $("#uv-box").addClass("uvModerate");
                      } if (Math.floor(response2.value) >= 9) {
                            $("#uv-box").addClass("uvSevere");
                      }
  
                });
          });
  
    });
  
  
  
  
  
  
  
    // FIVE DAY FORECAST
    $("#search-button").on("click", function (event) {
          event.preventDefault();
  
          // grab text from the search-input box
          var city = $("#search-input").val();
  
          // HTML URL
          var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";
  
          //take response data and display it in the city-box within the weather-box
          $.ajax({
                url: queryURL,
                method: "GET"
  
          }).then(function (response) {
  
  
                // day one
                var date1 = response.list[0].dt_txt;
                var slicedate1 = date1.slice(5, 10);
  
                var date1 = $("<p>").text(slicedate1);
                var weatherIcon1 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png");
                var weatherType1 = $("<p class='bold'>").text(response.list[0].weather[0].main);
                // Temp
                var tempHighInt1 = parseInt(response.list[0].main.temp_max);
                var tempHighF1 = (tempHighInt1 * 9 / 5) - 459.67;
                var cityHighTemp1 = $("<p class='temp'>").text(Math.floor(tempHighF1) + "°");
  
                var humidity1 = $("<p>").text("Humidity: " + response.list[0].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five1").empty();
                $("#five1").append(date1, weatherIcon1, weatherType1, cityHighTemp1, humidity1);
  
                // day two
                var date2 = response.list[8].dt_txt;
                var slicedate2 = date2.slice(5, 10);
  
                var date2 = $("<p>").text(slicedate2);
                var weatherIcon2 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png");
                var weatherType2 = $("<p class='bold'>").text(response.list[8].weather[0].main);
                // Temp
                var tempHighInt2 = parseInt(response.list[8].main.temp_max);
                var tempHighF2 = (tempHighInt2 * 9 / 5) - 459.67;
                var cityHighTemp2 = $("<p class='temp'>").text(Math.floor(tempHighF2) + "°");
  
                var humidity2 = $("<p>").text("Humidity: " + response.list[8].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five2").empty();
                $("#five2").append(date2, weatherIcon2, weatherType2, cityHighTemp2, humidity2);
  
  
                // day three
                var date3 = response.list[16].dt_txt;
                var slicedate3 = date3.slice(5, 10);
  
                var date3 = $("<p>").text(slicedate3);
                var weatherIcon3 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png");
                var weatherType3 = $("<p class='bold'>").text(response.list[16].weather[0].main);
                // Temp
                var tempHighInt3 = parseInt(response.list[16].main.temp_max);
                var tempHighF3 = (tempHighInt3 * 9 / 5) - 459.67;
                var cityHighTemp3 = $("<p class='temp'>").text(Math.floor(tempHighF3) + "°");
  
                var humidity3 = $("<p>").text("Humidity: " + response.list[16].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five3").empty();
                $("#five3").append(date3, weatherIcon3, weatherType3, cityHighTemp3, humidity3);
  
                // day four
                var date4 = response.list[24].dt_txt;
                var slicedate4 = date4.slice(5, 10);
  
                var date4 = $("<p>").text(slicedate4);
                var weatherIcon4 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png");
                var weatherType4 = $("<p class='bold'>").text(response.list[24].weather[0].main);
                // Temp
                var tempHighInt4 = parseInt(response.list[24].main.temp_max);
                var tempHighF4 = (tempHighInt4 * 9 / 5) - 459.67;
                var cityHighTemp4 = $("<p class='temp'>").text(Math.floor(tempHighF4) + "°");
  
                var humidity4 = $("<p>").text("Humidity: " + response.list[24].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five4").empty();
                $("#five4").append(date4, weatherIcon4, weatherType4, cityHighTemp4, humidity4);
  
                // day five
                var date5 = response.list[32].dt_txt;
                var slicedate5 = date5.slice(5, 10);
  
                var date5 = $("<p>").text(slicedate5);
                var weatherIcon5 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png");
                var weatherType5 = $("<p class='bold'>").text(response.list[32].weather[0].main);
                // Temp
                var tempHighInt5 = parseInt(response.list[32].main.temp_max);
                var tempHighF5 = (tempHighInt5 * 9 / 5) - 459.67;
                var cityHighTemp5 = $("<p class='temp'>").text(Math.floor(tempHighF5) + "°");
  
                var humidity5 = $("<p>").text("Humidity: " + response.list[32].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five5").empty();
                $("#five5").append(date5, weatherIcon5, weatherType5, cityHighTemp5, humidity5);
  
          });
  
    });
  
  }
  
  
  // save to local storage: city-box (current  weather div)
  const storageInput = document.querySelector("#city-container");
  const text = document.querySelector("#city-container");
  const storedInput = localStorage.getItem('textinput');
  
  if (storageInput) {
    text.innerHTML = storedInput;
  }
  
  storageInput.addEventListener('input', letter => {
    text.innerHTML = letter.target.value;
  })
  
  const saveToLocalStorage = () => {
    localStorage.setItem('textinput', text.innerHTML);
  }
  
  // save to local storage: day 1 five-day-box
  const storageInput1 = document.querySelector("#five1");
  const text1 = document.querySelector("#five1");
  const storedInput1 = localStorage.getItem('textinput1');
  
  if (storageInput1) {
    text1.innerHTML = storedInput1;
  }
  
  storageInput1.addEventListener('input1', letter1 => {
    text1.innerHTML = letter1.target.value;
  })
  
  const saveToLocalStorage1 = () => {
    localStorage.setItem('textinput1', text1.innerHTML);
  }
  
  // save to local storage: day 2 five-day-box
  const storageInput2 = document.querySelector("#five2");
  const text2 = document.querySelector("#five2");
  const storedInput2 = localStorage.getItem('textinput2');
  
  if (storageInput2) {
    text2.innerHTML = storedInput2;
  }
  
  storageInput2.addEventListener('input2', letter2 => {
    text2.innerHTML = letter2.target.value;
  })
  
  const saveToLocalStorage2 = () => {
    localStorage.setItem('textinput1', text1.innerHTML);
  }
  
  // save to local storage: day 3 five-day-box
  const storageInput3 = document.querySelector("#five3");
  const text3 = document.querySelector("#five3");
  const storedInput3 = localStorage.getItem('textinput3');
  
  if (storageInput3) {
    text3.innerHTML = storedInput3;
  }
  
  storageInput3.addEventListener('input3', letter3 => {
    text3.innerHTML = letter3.target.value;
  })
  
  const saveToLocalStorage3 = () => {
    localStorage.setItem('textinput3', text3.innerHTML);
  }
  
  // save to local storage: day 4 five-day-box
  const storageInput4 = document.querySelector("#five4");
  const text4 = document.querySelector("#five4");
  const storedInput4 = localStorage.getItem('textinput4');
  
  if (storageInput4) {
    text4.innerHTML = storedInput4;
  }
  
  storageInput4.addEventListener('input4', letter4 => {
    text4.innerHTML = letter4.target.value;
  })
  
  const saveToLocalStorage4 = () => {
    localStorage.setItem('textinput4', text4.innerHTML);
  }
  
  // save to local storage: day 5 five-day-box
  const storageInput5 = document.querySelector("#five5");
  const text5 = document.querySelector("#five5");
  const storedInput5 = localStorage.getItem('textinput5');
  
  if (storageInput5) {
    text5.innerHTML = storedInput5;
  }
  
  storageInput5.addEventListener('input5', letter5 => {
    text5.innerHTML = letter5.target.value;
  })
  
  const saveToLocalStorage5 = () => {
    localStorage.setItem('textinput5', text5.innerHTML);
  }
  
  
  // Search history
  
  function saveToLocalStorage6() {
  
    $("#listed-cities").on('click', 'li', function () {
  
          console.log($(this).text());
          var city = $(this).text();
  
  
          // Main URL
          var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";
  
          
          //take response data and display it in the city-box within the weather-box
          $.ajax({
                url: queryURL,
                method: "GET"
  
          }).then(function (response) {
  
                // Main HTML containing the weather information for searched city
                var cityName = $("<h2>").text(response.name);
                var cityNameList = $("<li>").text(response.name);
                cityNameList.addClass("list-group-item");
  
                var weatherIcon = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.weather[0].icon + ".png");
                var weatherType = $("<p class='bold'>").text(response.weather[0].main);
  
                // Temp
                var tempInt = parseInt(response.main.temp);
                var tempF = (tempInt * 9 / 5) - 459.67;
                var cityTemp = $("<p class='temp'>").text("Current Temperature: " + Math.floor(tempF) + "°");
                var cityHumidity = $("<p>").text("Humidity: " + response.main.humidity + "%");
                var cityWindSpeed = $("<p>").text("Wind Speed: " + response.wind.speed + " MPH");
  
                // Empty the contents of the city-box div
                $("#city-container").empty();
                $("#city-container").append(cityName, weatherIcon, weatherType, cityTemp, cityHumidity, cityWindSpeed);
  
                // Latertude
                var lat = response.coord.lat;
                var lon = response.coord.lon;
  
                // URL for UV
                var queryURL2 = "https://api.openweathermap.org/data/2.5/uvi?appid=000401db107b5cbe165fdf198e9f1e47&lat=" + lat + "&lon=" + lon;
  
                $.ajax({
                      url: queryURL2,
                      method: "GET"
  
                }).then(function (response2) {
  
                      var uvIndex = $("<p>").text("UV Index: " + Math.floor(response2.value));
                      $("#city-container").append("<div id='uv-box' class=''></div>");
                      $("#uv-box").empty();
                      $("#uv-box").append(uvIndex);
  
                      // UV Index Color Change 
                      if (Math.floor(response2.value) <= 2) {
                            $("#uv-box").addClass("uvFavorable");
                      } if (Math.floor(response2.value) >= 3 && Math.floor(response2.value) <= 8) {
                            $("#uv-box").addClass("uvModerate");
                      } if (Math.floor(response2.value) >= 9) {
                            $("#uv-box").addClass("uvSevere");
                      }
  
                });
          });
    });
  
    // DISPLAY FIVE DAY FORECAST
    $("#listed-cities").on('click', 'li', function () {
  
          console.log($(this).text());
          var city = $(this).text();
  
          // HTML URL
          var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=000401db107b5cbe165fdf198e9f1e47";
  
          //take response data and display it in the city-box within the weather-box
          $.ajax({
                url: queryURL,
                method: "GET"
  
          }).then(function (response) {
  
  
                // day one
                var date1 = response.list[0].dt_txt;
                var slicedate1 = date1.slice(5, 10);
  
                var date1 = $("<p>").text(slicedate1);
                var weatherIcon1 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[0].weather[0].icon + ".png");
                var weatherType1 = $("<p class='bold'>").text(response.list[0].weather[0].main);
                // Temp
                var tempHighInt1 = parseInt(response.list[0].main.temp_max);
                var tempHighF1 = (tempHighInt1 * 9 / 5) - 459.67;
                var cityHighTemp1 = $("<p class='temp'>").text(Math.floor(tempHighF1) + "°");
  
                var humidity1 = $("<p>").text("Humidity: " + response.list[0].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five1").empty();
                $("#five1").append(date1, weatherIcon1, weatherType1, cityHighTemp1, humidity1);
  
                // day two
                var date2 = response.list[8].dt_txt;
                var slicedate2 = date2.slice(5, 10);
  
                var date2 = $("<p>").text(slicedate2);
                var weatherIcon2 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[8].weather[0].icon + ".png");
                var weatherType2 = $("<p class='bold'>").text(response.list[8].weather[0].main);
                // Temp
                var tempHighInt2 = parseInt(response.list[8].main.temp_max);
                var tempHighF2 = (tempHighInt2 * 9 / 5) - 459.67;
                var cityHighTemp2 = $("<p class='temp'>").text(Math.floor(tempHighF2) + "°");
  
                var humidity2 = $("<p>").text("Humidity: " + response.list[8].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five2").empty();
                $("#five2").append(date2, weatherIcon2, weatherType2, cityHighTemp2, humidity2);
  
  
                // day three
                var date3 = response.list[16].dt_txt;
                var slicedate3 = date3.slice(5, 10);
  
                var date3 = $("<p>").text(slicedate3);
                var weatherIcon3 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[16].weather[0].icon + ".png");
                var weatherType3 = $("<p class='bold'>").text(response.list[16].weather[0].main);
                // Temp
                var tempHighInt3 = parseInt(response.list[16].main.temp_max);
                var tempHighF3 = (tempHighInt3 * 9 / 5) - 459.67;
                var cityHighTemp3 = $("<p class='temp'>").text(Math.floor(tempHighF3) + "°");
  
                var humidity3 = $("<p>").text("Humidity: " + response.list[16].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five3").empty();
                $("#five3").append(date3, weatherIcon3, weatherType3, cityHighTemp3, humidity3);
  
                // day four
                var date4 = response.list[24].dt_txt;
                var slicedate4 = date4.slice(5, 10);
  
                var date4 = $("<p>").text(slicedate3);
                var weatherIcon4 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[24].weather[0].icon + ".png");
                var weatherType4 = $("<p class='bold'>").text(response.list[24].weather[0].main);
                // Temp
                var tempHighInt4 = parseInt(response.list[24].main.temp_max);
                var tempHighF4 = (tempHighInt4 * 9 / 5) - 459.67;
                var cityHighTemp4 = $("<p class='temp'>").text(Math.floor(tempHighF4) + "°");
  
                var humidity4 = $("<p>").text("Humidity: " + response.list[24].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five4").empty();
                $("#five4").append(date4, weatherIcon4, weatherType4, cityHighTemp4, humidity4);
  
                // day five
                var date5 = response.list[32].dt_txt;
                var slicedate5 = date5.slice(5, 10);
  
                var date5 = $("<p>").text(slicedate5);
                var weatherIcon5 = $("<img>").attr("src", "https://openweathermap.org/img/wn/" + response.list[32].weather[0].icon + ".png");
                var weatherType5 = $("<p class='bold'>").text(response.list[32].weather[0].main);
                // Temp
                var tempHighInt5 = parseInt(response.list[32].main.temp_max);
                var tempHighF5 = (tempHighInt5 * 9 / 5) - 459.67;
                var cityHighTemp5 = $("<p class='temp'>").text(Math.floor(tempHighF5) + "°");
  
                var humidity5 = $("<p>").text("Humidity: " + response.list[32].main.humidity + "%");
  
                // Empty the contents of the city-box div
                $("#five5").empty();
                $("#five5").append(date5, weatherIcon5, weatherType5, cityHighTemp5, humidity5);
          });
    });
  }
    