// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history (check)
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index 
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe (check)
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
// ```


$(document).ready(function () {



            //variables 
            var submitBtn = $("#submitBtn");

            var cityList = [];
            console.log(cityList);
            var savedCitiesEl = $("#savedCities");
            // console.log(cityList);
            var cityNameEl = $("#cityName");
            var tempEl = $("#temp");
            var humidityEl = $("#humidity");
            var windEl = $("#wind");
            var uvEl = $("#uv");
            var fiveDayEl = $("#fiveDayForecast");
            var iconId;
            var currentIconId = $("#currentIconId");


            var cityCount = 0;

            //onLoad 
            init()


            // functions 





            function storeCity() {
                localStorage.setItem("cityname", JSON.stringify(cityList));
                
            }

            function init() {
                var storedCities = JSON.parse(localStorage.getItem("cityname", cityList));
                console.log(storedCities);

                if (storedCities !== null) {
                    cityList = storedCities;
                }

                renderRecentCity();

            }


            function renderRecentCity() {
                //clear Saved Cities List 
                savedCitiesEl.innerHTML = " ";

                for (var i = 0; i < cityList.length; i++) {
                    var city = cityList[i];
                    // console.log(city);
                    var btnCity = $("<button>");
                    btnCity.addClass("btn");
                    btnCity.text(city);
                    savedCitiesEl.append(btnCity);
                }
                console.log(cityList.length);
                var histCityIndex = cityList.length;
                console.log(cityList[histCityIndex]);

                // var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityList[cityList.length] + "&units=imperial&appid=98291c34b7371fc6b13373019411c995";


                // $.ajax({
                //     url: weatherURL,
                //     method: "GET",
                // }).then(function (response) {
                //     console.log(response);
                //     // console.log(response.main.name); wont work 
                //     iconId = response.weather[0].icon;
                //     console.log(response.weather[0].icon);

                //     var iconURL = "http://openweathermap.org/img/wn/" + iconId + "@2x.png"
                //     // var icon = $("<img>");
                //     currentIconId.attr("src", iconURL);

                //     cityNameEl.text(cityList[cityList.length] + " ");

                //     // console.log(response.main.temp);
                //     // var tempK = response.main.temp;
                //     // var temp = Math.floor((tempK - 273.15)*1.800+32.00);
                //     tempEl.text("Temperature: " + Math.floor(response.main.temp));
                //     // console.log(response.main.humidity);
                //     humidityEl.text("Humidity: " + response.main.humidity + "%");
                //     // if ()
                //     // console.log(response.wind.speed);
                //     windEl.text("Wind Speed: " + response.wind.speed + " MPH");
                //     // console.log(response.weather.icon); wont work 
                //     //Lattitude and Longitude



                //     lat = response.coord.lat;
                //     lon = response.coord.lon;
                //     var fiveDayURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=98291c34b7371fc6b13373019411c995";


                //     $.ajax({
                //         url: fiveDayURL,
                //         method: "GET",
                //         }).then(function (response) {
                        

                //         uvEl.text("UV Index: " + response.current.uvi);

                //                 if (response.current.uvi <= 2) {
                //                     uvEl.addClass("favorable")
                //                 } else if (response.current.uvi > 7) {
                //                     uvEl.addClass("severe")
                //                 } else {
                //                     uvEl.addClass("moderate")
                //                 }
                //                 for (var i = 1; i < 5; i++) {
                //                     var div = $("<div>");
                //                     div.addClass("fiveDayForecast")

                //                     //Weather Icon 
                //                     iconId = response.daily[i].weather[0].icon;
                //                     console.log(response.daily[i].weather[0].icon);
                //                     var iconURL = "http://openweathermap.org/img/wn/" + iconId + "@2x.png"
                //                     var icon = $("<img>");
                //                     icon.attr("src", iconURL);


                //                     var pTemp = $("<p>");
                //                     // //temp convert to farenheight
                //                     pTemp.text("Temp: " + Math.floor((response.daily[i].temp.max - 273.15) * 1.800 + 32.00)) + "F";

                //                     // //humidity 
                //                     var pHumid = $("<p>");

                //                     pHumid.text("Humidity: " + response.daily[i].humidity + " %");

                //                     fiveDayEl.append(div);
                //                     div.append(icon);
                //                     div.append(pTemp);
                //                     div.append(pHumid);
                //                 };
                //         });
                //     });
            };

                

                //event Listeners 
                submitBtn.on("click", function (event) {
                    event.preventDefault();

                    var cityName = $("#searchInput").val();

                    // console.log(cityName);

                    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=98291c34b7371fc6b13373019411c995";


                    $.ajax({
                        url: weatherURL,
                        method: "GET",
                    }).then(function (response) {
                        console.log(response);
                        // console.log(response.main.name); wont work 
                        iconId = response.weather[0].icon;
                        console.log(response.weather[0].icon);

                        var iconURL = "http://openweathermap.org/img/wn/" + iconId + "@2x.png"
                        // var icon = $("<img>");
                        currentIconId.attr("src", iconURL);

                        cityNameEl.text(cityName + " ");

                        // console.log(response.main.temp);
                        // var tempK = response.main.temp;
                        // var temp = Math.floor((tempK - 273.15)*1.800+32.00);
                        tempEl.text("Temperature: " + Math.floor(response.main.temp));
                        // console.log(response.main.humidity);
                        humidityEl.text("Humidity: " + response.main.humidity + "%");
                        // if ()
                        // console.log(response.wind.speed);
                        windEl.text("Wind Speed: " + response.wind.speed + " MPH");
                        // console.log(response.weather.icon); wont work 
                        //Lattitude and Longitude



                        lat = response.coord.lat;
                        lon = response.coord.lon;
                        var fiveDayURL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly&appid=98291c34b7371fc6b13373019411c995";


                        $.ajax({
                            url: fiveDayURL,
                            method: "GET",
                        }).then(function (response) {
                            console.log(response);

                            uvEl.text("UV Index: " + response.current.uvi);
                            if (response.current.uvi <= 2) {
                                uvEl.addClass("favorable")
                            } else if (response.current.uvi > 7) {
                                uvEl.addClass("severe")
                            } else {
                                uvEl.addClass("moderate")
                            }
                            for (var i = 1; i < 5; i++) {
                                var div = $("<div>");
                                div.addClass("fiveDayForecast")

                                //Weather Icon 
                                iconId = response.daily[i].weather[0].icon;
                                console.log(response.daily[i].weather[0].icon);
                                var iconURL = "http://openweathermap.org/img/wn/" + iconId + "@2x.png"
                                var icon = $("<img>");
                                icon.attr("src", iconURL);


                                var pTemp = $("<p>");
                                // //temp convert to farenheight
                                pTemp.text("Temp: " + Math.floor((response.daily[i].temp.max - 273.15) * 1.800 + 32.00)) + "F";

                                // //humidity 
                                var pHumid = $("<p>");

                                pHumid.text("Humidity: " + response.daily[i].humidity + " %");

                                fiveDayEl.append(div);
                                div.append(icon);
                                div.append(pTemp);
                                div.append(pHumid);

                            };
                        });

                        savedCitiesEl.innerHTML = "";
                        //Create p tags for new cities 
                        for (var i = 0; i < cityList.length; i++) {
                            var city = cityList[i];
                            console.log(city);
                            var btnCity = $("<button>");
                            btnCity.addClass("btn");
                            btnCity.text(city);
                            savedCitiesEl.append(btnCity);
                        };


                        cityList.push(cityName);
                        storeCity();
                        cityCount++;


                    });





                    //date ???   
                    // //icon needs to be another call 
                    // response.list[i].weather.icon

                    // http://openweathermap.org/img/w/ + currentIcon + ".png"
                    //add the citys to list 




                });






            });