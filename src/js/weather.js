class WeatherData {
  static APIkey = "LMQZ8Y9SE9NDPDE4SNL7ZA4FH";

  temp;
  tempMax;
  tempMin;

  constructor(location, date1 = null, date2 = null) {
    this.prefix =
      "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
    this.location = location;
    this.date1 = date1;
    this.date2 = date2;
  }

  getUrl() {
    let url = this.prefix + this.location;
    if (this.date1) {
      url += "/" + this.date1;
    }
    if (this.date2) {
      url += "/" + this.date1;
    }
    url += "?key=" + WeatherData.APIkey;
    return url;
  }

  async fetchData() {
    const response = await fetch(this.getUrl());
    const json = await response.json();

    console.log(json);
    console.log(json.days[0].temp);
    console.log(json.days[0].tempmin);
    console.log(json.days[0].tempmax);

    this.temp = json.days[0].temp;
    this.tempMax = json.days[0].tempmax;
    this.tempMin = json.days[0].tempmin;

    console.log(`here: ${this.temp}`)
  }
}

export { WeatherData };
