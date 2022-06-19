
jQuery.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=-6.9344694&lon=107.6049539&units=metric&appid=26fba403e8dd9ee388a92f1b52e8fcdd",
 function(data){
    console.log(data);
    let icon = "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    let weather = data.weather[0].description;
    let temp = Math.floor(data.main.temp) + "°";
    
    jQuery('.temperature').append(temp);
    jQuery('.weather-icon').attr('src', icon);
    jQuery('.weather-status').append(weather);
 }
);