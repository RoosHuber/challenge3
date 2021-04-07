//Hamburger menu code

const menuIcon = document.querySelector('.hamburger-menu');

const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('change');
});

//map

/*let map;
 function initMap() {
 	map = new google.maps.Map(document.getElementById("map"), {
 		center: {lat: 52.070499, lng: 4.300700}, zoom: 12,
 	});
 }*/

 mapboxgl.accessToken = 'pk.eyJ1IjoiaHViZXJyb3plbWFyaWpuIiwiYSI6ImNrbjV3enE2cTA4anMyb3M0MGJvaHlmOHkifQ.2wNEdxVovl5f30HrTAUWKg';

var map = new mapboxgl.Map({
container: 'map',
center: {lat: 52.085140, lng: 4.321230},
style: 'mapbox://styles/mapbox/streets-v11',
zoom: 12,
});

var marker1 = new mapboxgl.Marker({color: "red"})
.setLngLat([4.321235, 52.085145])
.addTo(map);

var marker2 = new mapboxgl.Marker({color: "brown"})
.setLngLat([14.556206, -22.802833])
.addTo(map);

var marker3 = new mapboxgl.Marker({color: "orange"})
.setLngLat([-68.801499, 12.061548])
.addTo(map);

var marker4 = new mapboxgl.Marker({color: "black"})
.setLngLat([-183.842017, -37.974055]) 
.addTo(map);

var marker5 = new mapboxgl.Marker({color: "blue"})
.setLngLat([-245.523335, -8.118645]) 
.addTo(map);

var marker6 = new mapboxgl.Marker({color: "green"})
.setLngLat([-482.978641, 44.118944]) 
.addTo(map);

// function getAPIdata(){
// //var request = 'https://api.openweathermap.org/data/2.5/weather?lat=' + response.result.center[1] + '&lon=' + response.result.center[0] + '&appid=5b5db89f7015a0fc481673f7244459c0'
//  var apiKey = '5b5db89f7015a0fc481673f7244459c0';
//  var city = 'The%20Hague';
//  var request = 'https://api.openweathermap.org/data/2.5/weather?&appid=' + apiKey + '&q=' + city;
//  //var url = 'https://api.openweathermap.org/data/2.5/forecast';


// fetch(request)

// //var city = 'The%20Hague';

//  .then(function(response){
//  return response.json();
//  })

//  .then(function(response){
//  console.log(response);
//  var weatherBox = document.getElementById('weather');
//  var degC = Math.round(response.main.temp - 273.15);
//   weatherBox.innerHTML = degC + '&#176;C ' + '<img src="http://openweathermap.org/img/wn/'+ response.weather[0].icon + '@2x.png"></img> <br>' + response.name;
//  });
// }




//nederland
document.getElementById('b1').onclick = function () {
	map.flyTo({
	center: [4.321235, 52.085145],
	zoom: 12,
	speed: 0.5,
	essential: true 
	});

	var apiKey = '5b5db89f7015a0fc481673f7244459c0';
 	var city = 'The%20Hague';
 	var request = 'https://api.openweathermap.org/data/2.5/weather?&appid=' + apiKey + '&q=' + city;
 //var url = 'https://api.openweathermap.org/data/2.5/forecast';


	fetch(request)

//var city = 'The%20Hague';

 	.then(function(response){
 	return response.json();
 	})

 	.then(function(response){
 	console.log(response);
 	var weatherBox = document.getElementById('weather');
 	var degC = Math.round(response.main.temp - 273.15);
 	 weatherBox.innerHTML = degC + '&#176;C ' + '<img src="http://openweathermap.org/img/wn/'+ response.weather[0].icon + '@2x.png"></img> <br>' + response.name;
 	});
	// return city;
	// var cityChange = city.replace('The%20Hague', 'Amsterdam' );
	// console.log(cityChange);
	//var city = 'The%20Hague';
	//return getAPIdata();
};
// var request = 'https://api.openweathermap.org/data/2.5/weather?lat=52.085145&lon=4.321235&appid=5b5db89f7015a0fc481673f7244459c0';

// fetch(request)
// .then(function(responseWeather){
// return responseWeather.json(); 
// })
// .then(function(responseWeather){
// 	console.log(responseWeather);
// 	var weatherbox = document.getElementById("weather");
// 	var temp = Math.round(responseWeather.main.temp-273.15);
// 	weatherbox.innerHTML = temp + '&#176;C' + '<img src="http://openweathermap.org/img/wn/'+ responseWeather.weather[0].icon + '@2x.png"></img>' + responseWeather.name;
// });
//});

//namibia
document.getElementById('b2').onclick = function () {
map.flyTo({
center: [14.556206, -22.802833],
zoom: 12,
speed: 0.5,
essential: true
});
var apiKey = '5b5db89f7015a0fc481673f7244459c0';
 	var city = 'Windhoek';
 	var request = 'https://api.openweathermap.org/data/2.5/weather?&appid=' + apiKey + '&q=' + city;
 //var url = 'https://api.openweathermap.org/data/2.5/forecast';


	fetch(request)

//var city = 'The%20Hague';

 	.then(function(response){
 	return response.json();
 	})

 	.then(function(response){
 	console.log(response);
 	var weatherBox = document.getElementById('weather');
 	var degC = Math.round(response.main.temp - 273.15);
 	 weatherBox.innerHTML = degC + '&#176;C ' + '<img src="http://openweathermap.org/img/wn/'+ response.weather[0].icon + '@2x.png"></img> <br>' + response.name;
 	});
// var request = 'https://api.openweathermap.org/data/2.5/weather?lat=-22.802833&lon=14.556206&appid=5b5db89f7015a0fc481673f7244459c0';

// fetch(request)
// .then(function(responseWeather){
// return responseWeather.json(); 
// })
// .then(function(responseWeather){
// 	console.log(responseWeather);
// 	var weatherbox = document.getElementById("weather");
// 	var temp = Math.round(responseWeather.main.temp-273.15);
// 	weatherbox.innerHTML = temp + '&#176;C' + '<img src="http://openweathermap.org/img/wn/'+ responseWeather.weather[0].icon + '@2x.png"></img>' + responseWeather.name;
// });
};

//curacao
document.getElementById('b3').onclick = function () {
map.flyTo({
center: [-68.801499, 12.061548],
zoom: 12,
speed: 0.5,
essential: true 
});
var apiKey = '5b5db89f7015a0fc481673f7244459c0';
 	var city = 'Willemstad';
 	var request = 'https://api.openweathermap.org/data/2.5/weather?&appid=' + apiKey + '&q=' + city;
 //var url = 'https://api.openweathermap.org/data/2.5/forecast';


	fetch(request)

//var city = 'The%20Hague';

 	.then(function(response){
 	return response.json();
 	})

 	.then(function(response){
 	console.log(response);
 	var weatherBox = document.getElementById('weather');
 	var degC = Math.round(response.main.temp - 273.15);
 	 weatherBox.innerHTML = degC + '&#176;C ' + '<img src="http://openweathermap.org/img/wn/'+ response.weather[0].icon + '@2x.png"></img> <br>' + response.name;
 	});
};

//new zealnad
document.getElementById('b4').onclick = function () {
map.flyTo({
center: [-183.842017, -37.974055],
zoom: 12,
speed: 0.5,
essential: true 
});
var apiKey = '5b5db89f7015a0fc481673f7244459c0';
 	var city = 'Rotorua';
 	var request = 'https://api.openweathermap.org/data/2.5/weather?&appid=' + apiKey + '&q=' + city;
 //var url = 'https://api.openweathermap.org/data/2.5/forecast';


	fetch(request)

//var city = 'The%20Hague';

 	.then(function(response){
 	return response.json();
 	})

 	.then(function(response){
 	console.log(response);
 	var weatherBox = document.getElementById('weather');
 	var degC = Math.round(response.main.temp - 273.15);
 	 weatherBox.innerHTML = degC + '&#176;C ' + '<img src="http://openweathermap.org/img/wn/'+ response.weather[0].icon + '@2x.png"></img> <br>' + response.name;
 	});
};

//Indonesia
document.getElementById('b5').onclick = function () {
map.flyTo({
center: [-245.523335, -8.118645],
zoom: 12,
speed: 0.5,
essential: true 
});
var apiKey = '5b5db89f7015a0fc481673f7244459c0';
 	var city = 'Gilimanuk';
 	var request = 'https://api.openweathermap.org/data/2.5/weather?&appid=' + apiKey + '&q=' + city;
 //var url = 'https://api.openweathermap.org/data/2.5/forecast';


	fetch(request)

//var city = 'The%20Hague';

 	.then(function(response){
 	return response.json();
 	})

 	.then(function(response){
 	console.log(response);
 	var weatherBox = document.getElementById('weather');
 	var degC = Math.round(response.main.temp - 273.15);
 	 weatherBox.innerHTML = degC + '&#176;C ' + '<img src="http://openweathermap.org/img/wn/'+ response.weather[0].icon + '@2x.png"></img> <br>' + response.name;
 	});
};

//USA
document.getElementById('b6').onclick = function () {
map.flyTo({
center: [-482.978641, 44.118944],
zoom: 12,
speed: 0.5,
essential: true 
});
var apiKey = '5b5db89f7015a0fc481673f7244459c0';
 	var city = 'Springfield';
 	var request = 'https://api.openweathermap.org/data/2.5/weather?&appid=' + apiKey + '&q=' + city;
 //var url = 'https://api.openweathermap.org/data/2.5/forecast';


	fetch(request)

//var city = 'The%20Hague';

 	.then(function(response){
 	return response.json();
 	})

 	.then(function(response){
 	console.log(response);
 	var weatherBox = document.getElementById('weather');
 	var degC = Math.round(response.main.temp - 273.15);
 	 weatherBox.innerHTML = degC + '&#176;C ' + '<img src="http://openweathermap.org/img/wn/'+ response.weather[0].icon + '@2x.png"></img> <br>' + response.name;
 	});
};



//weather






/*
*$.ajax({
 	url: 'https://api.openweathermap.org/data/2.5/forecast?q=Amsterdam&units=metric&appid=5b5db89f7015a0fc481673f7244459c0',
    type: 'GET',
	dataType: 'json',
    success: function(data) 
    {
        console.log(data);
        
        for(var i = 0 ; i < data['list'].length; i++)
        {
        	console.log(data['list'][i]['main']["feels_like"]);
        	var element = document.createElement('p');
        	element.classList.add('temp');
        	element.innerText = data['list'][i]['main']["feels_like"];
        	document.getElementById('weather').appendChild(element); 
        }
     }
    });

    */
