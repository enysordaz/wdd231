// Weather Information
const currentTemperature = document.querySelector('#current-temperature');
const weatherImgIcon = document.querySelector('#weather-icon-img');
const captionDescription = document.querySelector('#caption');
const weatherHighTemp = document.querySelector('#high-temp');
const weatherLowTemp = document.querySelector('#low-temp');
const weatherHumidityLev = document.querySelector('#humidity-level');
const weatherSunriseTime = document.querySelector('#sunrise-time');
const weatherSunsetTime = document.querySelector('#sunset-time');

const urlWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=40.51&&lon=-111.42&units=imperial&appid=bb4f3134ba550c841300d6626c29c8bb'

//check the sunrise ad the sunset 
async function apiFetchWeather() {
  try {
    const response = await fetch(urlWeather);
    if (response.ok) {
      const data = await response.json();
      displayWeatherInfoResults(data);
    } else {
      throw Error(await response.text());
    }
    } catch (error) {
      console.log(error);
    }

  function displayWeatherInfoResults(data) {
    //Weather container or section
    currentTemperature.innerHTML = `${data.main.temp}&deg;F`;
    const iconWeathersrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    let desc = data.weather[0].description;
    weatherImgIcon.setAttribute('SRC', iconWeathersrc);
    weatherImgIcon.setAttribute('alt', data.weather[0].description);
    captionDescription.textContent = `${desc}`;
    weatherHighTemp.innerHTML = `High: ${data.main.temp_max}`;
    weatherLowTemp.innerHTML = `Low: ${data.main.temp_min}`;
    weatherHumidityLev.innerHTML = `Humidity: ${data.main.humidity}`;
    weatherSunriseTime.innerHTML = `Sunrise: ${data.sys.sunrise}`;
    weatherSunsetTime.innerHTML = `Sunset: ${data.sys.sunset}`;
  }

}
  
apiFetchWeather();
