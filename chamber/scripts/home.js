// Weather Information
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const weatherHigh = document.querySelector('#high');
const weatherLow = document.querySelector('#low');
const weatherHumidity = document.querySelector('#humidity');
const weatherSunrise = document.querySelector('#sunrise');
const weatherSunset = document.querySelector('#sunset');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.49&units=imperial&lon=-111.41&appid=3fef4e8fc26d6a0637a69b14d806dfc3'

//check the sunrise ad the sunset 
async function apiFetch() {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        displayWeatherResults(data);
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }

    function displayWeatherResults(data) {
        //Weather container or section
        currentTemp.innerHTML = `${data.main.temp}&deg;F`;
        const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        let desc = data.weather[0].description;
        weatherIcon.setAttribute('SRC', iconsrc);
        weatherIcon.setAttribute('alt', data.weather[0].description);
        captionDesc.textContent = `${desc}`;
        weatherHigh.innerHTML = `High: ${data.main.temp_max}`;
        weatherLow.innerHTML = `Low: ${data.main.temp_min}`;
        weatherHumidity.innerHTML = `Humidity: ${data.main.humidity}`;
        weatherSunrise.innerHTML = `Sunrise: ${data.sys.sunrise}`;
        weatherSunset.innerHTML = `Sunset: ${data.sys.sunset}`;
    }

}
  
apiFetch();

//Forecast Information
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.49&lon=-111.41&units=imperial&appid=3fef4e8fc26d6a0637a69b14d806dfc3'

const now = document.querySelector('#today');
const nextDay = document.querySelector('#next-day');
const twoDays = document.querySelector('#two-days');

const today = new Date();
const tomorrow = new Date(today);
const afterTomorrow = new Date(today);

const todayDateTest = '2024-10-10 15:00:00'
const todayDate = forecastDateWithTime(today);
const tomorrowDate = forecastDateWithTime(addDays(tomorrow, 1));
const afterTomorrowDate = forecastDateWithTime(addDays(afterTomorrow, 2));


function forecastDateWithTime(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hours = String(date.getHours()).padStart(2, '0');
    
    return `${year}-${month}-${day} ${hours}:00:00`;
}

function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
}
  
function adjustNext3Hour(date) {
    const hours = date.getHours();
    
    if (hours < 15) {
        date.setHours(15, 0, 0, 0);
    } else if (hours >= 15 && hours < 18) {
        date.setHours(18, 0, 0, 0);
    } else if (hours >= 18 && hours < 21) {
        date.setHours(21, 0, 0, 0);
    } else {
        date.setHours(0, 0, 0, 0);
        date.setDate(date.getDate() + 1);
    }
}

    
function displayForecastResults(data) {
    console.log(todayDate);
    console.log(tomorrowDate);
    console.log(afterTomorrowDate);
    data.list.forEach( item => {
        console.log(todayDate);
        
        const roundedTemp = Math.round(item.main.temp);
    
        if (item.dt_txt === todayDateTest) {
            now.innerHTML = `Today: ${roundedTemp}&deg;F`;
        } else if (item.dt_txt === tomorrowDate) {
            const tomorrowDayName = getWeekdayName(tomorrowDate);
            nextDay.innerHTML = `${tomorrowDayName}: ${roundedTemp}&deg;F`;
        } else if (item.dt_txt === afterTomorrowDate) {
            const afterTomorrowDayName = getWeekdayName(afterTomorrowDate);
            twoDays.innerHTML = `${afterTomorrowDayName}: ${roundedTemp}&deg;F`;
        }
    });
}

function getWeekdayName(dateStr) {
    const date = new date(dateStr);
    const options = { weekday: 'long'};
    return date.toLocalDateStr('en-US', options);

}

async function apiFetchForecast() {
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        console.log(data.weather)
        displayForecastResults(data); 
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }

    adjustNext3Hour(today);
    tomorrow.setHours(15, 0, 0, 0);
    afterTomorrow.setHours(15, 0, 0, 0);    
}

apiFetchForecast();



// Gold Members information cards
const cards = document.querySelector('#gold-cards');

async function getMembersData(){
    const response = await fetch('data/members.json');
    const data = await response.json();
    //console.table(data.prophets);
    displayGoldMembers(data.members);
}

getMembersData();

const displayGoldMembers = (members) => {
    const filteredMembers = members.filter(member => member.membershipLevel === 3);

    filteredMembers.forEach((member) => {
        let card = document.createElement('section');
        
        let name = document.createElement('h3');
        let phone = document.createElement('p'); 
        let website = document.createElement('a');
        let logo = document.createElement('img');
        let service = document.createElement('p');

        // Build the h3 and other content out to show the members information
        name.textContent = `${member.name}`; 
        phone.textContent = `Phone Number: ${member.number}`;
        website.innerHTML = `<p>Website: <a href="${member.website}" target="_blank"> Company's Site</a></p>`;
        service.textContent = `Service: ${member.service}`;
        // Build the image logo by setting all the relevant attributes
        logo.setAttribute('src', member.imageurl);
        logo.setAttribute('alt', `${member.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        // Append the section(card) with the created elements
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(phone);
        card.appendChild(website);
        card.appendChild(service);

        cards.appendChild(card);

    });
}

