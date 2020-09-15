// GIVEN a weather dashboard with form inputs
// WHEN I search for a city
// THEN I am presented with current and future conditions for that city and that city is added to the search history (check)
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


// $(document).ready(function () {

    

//variables 
    var submitBtn = $("#submitBtn");
    
    var cityList = [];
    var savedCitiesEl = $("#savedCities");
    // console.log(cityList);
    var cityNameEl = $("#cityName");
    var tempEl = $("#temp");
    var humidityEl = $("#humidity");
    var windEl = $("#wind");
    var uvEl = $("#uv");
   
    var cityCount = 0;

//onLoad 
    init()
    

// functions 
    

    function renderRecentCity(){
        //clear Saved Cities List 
        savedCitiesEl.innerHTML = " ";
        
        //render last city 
        var btn = $("<button>");
        btn.text(cityList[cityCount]);
        savedCitiesEl.append(btn);


       
    };
    

    function storeCity(){
        localStorage.setItem("cityname",JSON.stringify(cityList));
    // console.log(cityList);
    }
    function init(){
       var storedCities =JSON.parse(localStorage.getItem("cityname", cityList ));

        if ( storedCities !== null ){
            cityList = storedCities;
        }

        renderRecentCity();

    }
    
    
//event Listeners 
    submitBtn.on("click", function (event) {
        event.preventDefault();

        var cityName = $("#searchInput").val();
        
        // console.log(cityName);

        var weatherURL = "http://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=imperial&appid=98291c34b7371fc6b13373019411c995";
        var fiveDayURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&units=imperial&appid=98291c34b7371fc6b13373019411c995";
       


        $.ajax({
            url: weatherURL,
            method: "GET",
        }).then(function (response) {
            // console.log(response);
            // console.log(response.main.name); wont work 
            cityNameEl.text(cityName);
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
           //Create p tags for new cities 
        for (var i = 0; i < cityList.length; i++){
            var city = cityList[i];
            console.log(city);
            var pCity =  $("<p>");
            pCity.text(city);
            savedCitiesEl.append(pCity);   
        }
            
        })

        cityList.push(cityName);
        storeCity();
        cityCount++;

        
       
        
        //add the citys to list 
       




        $.ajax({
            url: fiveDayURL,
            method: "GET",
        }).then(function (response) {
            console.log(response);
        })

    } )


    
    


// })



