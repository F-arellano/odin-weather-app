import "../css/styles.css";
import "../css/styles.css";

import { WeatherData } from "./weather";

const input = document.querySelector("input");
const btn = document.querySelector("button")

input.addEventListener("keydown", getLocationData);
btn.addEventListener("click", switchDeg)

async function getLocationData(event) {
  if (event.key === "Enter") {
    const value = event.target.value;
    let weather = new WeatherData(value);
    await weather.fetchData();
    showData(weather)
  }
}

function showData (weather) {
  const table = document.querySelector("table")
  const tr = document.createElement("tr")

  const tdCity = document.createElement("td")
  tdCity.textContent = weather.location

  const tdTemp = document.createElement("td")
  tdTemp.classList.add("temperature")
  tdTemp.textContent = toCelsius(weather.temp)

  const tdMin = document.createElement("td")
  tdMin.classList.add("temperature")
  tdMin.textContent = toCelsius(weather.tempMin)

  const tdMax = document.createElement("td")
  tdMax.classList.add("temperature")
  tdMax.textContent = toCelsius(weather.tempMax)

  tr.appendChild(tdCity)
  tr.appendChild(tdTemp)
  tr.appendChild(tdMin)
  tr.appendChild(tdMax)

  table.appendChild(tr)
}

function toCelsius (Tf) {
  return Math.floor(100 * (Tf - 32) / 1.8) / 100
}

function switchDeg(event) {
  const allTemp = document.querySelectorAll(".temperature")

  for (let i = 0; i < allTemp.length; i++) {
    const td = allTemp[i]
    let temp = +td.textContent
    if (event.target.value == "celsius") {
      td.textContent =  Math.floor(100 * (1.8 * temp + 32)) / 100
      event.target.value = "fahrenheit"
      event.target.textContent = "fahrenheit"
    } else {
      td.textContent = Math.floor(100 * (temp - 32) / 1.8) / 100
      event.target.value = "celsius"
      event.target.textContent = "celsius"
    }
  }
}