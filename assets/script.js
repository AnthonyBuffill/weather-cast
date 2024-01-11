const apikey = "c33267b30314ee91bdaf7b5896bd911a";
const searchBtn = document.getElementById("searchBtn");
const inputField = document.getElementById("searchcity");

var today = dayjs();
document.getElementById('currentday').textContent = today.format('dddd, MMMM D');

function selectcity(e) {
  e.preventDefault();
  let cityNameInput = inputField.value;
  getdata(cityNameInput);
}

function getdata(cityName) {
  let searchUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName +
    '&lat=38.8&lon=12.09&appid=' + apikey + '&units=imperial';

  fetch(searchUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      const cords = {
        lat: data.coord.lat,
        lon: data.coord.lon
      };
      viewweather(cords);
      displayCurrentWeather(data); weather
    })
    .catch(function (error) {
      console.error('Error fetching current weather data:', error);
    });
}

function viewweather(cords) {
  fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${cords.lat}&lon=${cords.lon}&appid=${apikey}&units=imperial`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      
      console.log(data);
    })
    .catch(function (error) {
      console.error('Error fetching forecast data:', error);
    });
}

function displayCurrentWeather(data) {
  const cityAndDateElement = document.querySelector('.container h3');
  const tempElement = document.querySelector('.container ul:nth-child(2)');
  const windElement = document.querySelector('.container ul:nth-child(3)');
  const humidityElement = document.querySelector('.container ul:nth-child(4)');

  cityAndDateElement.textContent = `${data.name}, ${data.sys.country} - ${today.format('dddd, MMMM D')}`;
  tempElement.textContent = `Temp: ${data.main.temp}°F`;
  windElement.textContent = `Wind: ${data.wind.speed} mph`;
  humidityElement.textContent = `Humidity: ${data.main.humidity}%`;
}

searchBtn.addEventListener("click", selectcity);
