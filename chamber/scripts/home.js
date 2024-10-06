// Weather Information
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#caption');
const weatherHigh = document.querySelector('#high');
const weatherLow = document.querySelector('#low');
const weatherHumidity = document.querySelector('#humidity');
const weatherSunrise = document.querySelector('#sunrise');
const weatherSunset = document.querySelector('#sunset');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.50&units=imperial&lon=-111.41&appid=3fef4e8fc26d6a0637a69b14d806dfc3'


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
const urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.50&units=imperial&lon=-111.41&appid=3fef4e8fc26d6a0637a69b14d806dfc3'

async function apiFetchForecast() {
    try {
      const response = await fetch(urlForecast);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
        displayForecastResults(data); 
      } else {
          throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }

    function displayForecastResults(data) {
        //Weather container or section
        console.log('hello');


    }

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

