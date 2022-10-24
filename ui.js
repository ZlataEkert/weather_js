class UI {
  constructor() {
    this.coord = document.getElementById('coord');
    this.description = document.getElementById('description');
    this.temp = document.getElementById('temp');
    this.icon = document.getElementById('icon');
    this.humidity = document.getElementById('humidity');
    this.feelsLike = document.getElementById('feels_like');
    this.pressure = document.getElementById('pressure');
    this.wind = document.getElementById('wind');
  }

  paint(weather) {
    this.coord.textContent = weather.name;
    this.description.textContent = weather.weather[0].description;
    this.temp.textContent = `${weather.main.temp.toFixed()}℃`;
    this.icon.setAttribute('src', `http://openweathermap.org/img/w/10d.png`);
    this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like.toFixed()}℃`;
    this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
    this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
  }
}