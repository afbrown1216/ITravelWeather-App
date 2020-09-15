// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history
// WHEN I view current weather conditions for that city
// THEN I am presented with the city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
// WHEN I view the UV index
// THEN I am presented with a color that indicates whether the conditions are favorable, moderate, or severe
// WHEN I view future weather conditions for that city
// THEN I am presented with a 5-day forecast that displays the date, an icon representation of weather conditions, the temperature, and the humidity
// WHEN I click on a city in the search history
// THEN I am again presented with current and future conditions for that city
// WHEN I open the weather dashboard
// THEN I am presented with the last searched city forecast
// ```


$(document).ready(function () {
    var submitBtn = $("#submitBtn");
    localStorage.getItem("cityName")
    var cityList = []

    submitBtn.on("click", function (event) {
        event.preventDefault();

        var cityName = $("#searchInput").val();
        
        console.log(cityName);

        var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=98291c34b7371fc6b13373019411c995";
        var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=98291c34b7371fc6b13373019411c995";



        $.ajax({
            url: weatherURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
            console.log(response.main.name);
            console.log(response.main.temp);
            console.log(response.main.humidity);
            console.log(response.wind.speed);
            // console.log(response.weather.icon);

        })

        
        var addCity = cityList.push(cityName);
        localStorage.setItem("city name",cityList);
        // console.log(cityList);
        
        




        // $.ajax({
        //     url: fiveDayURL,
        //     method: "GET",
        // }).then(function (response) {
        //     console.log(response);
        // })

    } )


    
    


})



