class Weather {
  constructor(city) {
    this.apiKey = 'f4adf741a7b362beb26a9614ee5d1025';
    this.city = city;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}&units=metric`)
   
    const responseData = await response.json();

    return responseData;
  }

  // Change weather location 
  changeLocation(city) {
    this.city = city;
  }
 }