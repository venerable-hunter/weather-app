const h = document.querySelector("h1");
const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=28%2C77'
const  city = document.querySelector(".city")
const temp =document.querySelector(".temp")
const airquality =document.querySelector(".airquality")
const wind =document.querySelector(".wind")
const humidity = document.querySelector(".humidity")
var lat 
var lng


const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': '1bc08b8a83msha486dc45c66a967p153c6bjsnc88a56ad3939',
      'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
    }
  };

function findWeather (){
   const inputValue = document.querySelector('.inputloca').value;



fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${inputValue}`, options)
  .then(response => response.json())
  .then(response => {console.log(response)
    city.innerHTML = `${response.location.name}, ${response.location.country}` 
    temp.innerHTML=`Temp: ${response.current.temp_c} <sup>.</sup>C ` 
    airquality.innerHTML=response.current.condition.text
    wind.innerHTML= `Wind: ${response.current.wind_kph} kph` 
    humidity.innerHTML= `Humidity: ${response.current.humidity}` 
    
})
  .catch(err => console.error(err));
    
}

function success(position){
    console.log(position)
    console.log('ye lo location data')
    lat = position.coords.latitude;
    lng = position.coords.longitude;
    console.log(lat , lng)
    fetchgeo(lat,lng);
    
}
 function error(){
    console.log("kuch to locha hai")
 }  
function geoWeather(){
    

    navigator.geolocation.getCurrentPosition(success, error);
   


    

     
        
   }


     function fetchgeo(lat,lng){
        fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${lat},${lng}`, options)
        .then(response => response.json())
         .then(response => {console.log(response)
            city.innerHTML = `${response.location.name}, ${response.location.country}` 
            temp.innerHTML=`Temp: ${response.current.temp_c} <sup>.</sup> C` 
            airquality.innerHTML=response.current.condition.text
            wind.innerHTML= `Wind: ${response.current.wind_kph} kph` 
            humidity.innerHTML= `Humidity: ${response.current.humidity}` 

            })
            .catch(err => console.error(err));
     }       
      

            
    
         
           





