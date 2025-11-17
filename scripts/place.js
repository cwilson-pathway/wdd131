const temp = document.querySelector("#temp");
const windSpeed = document.querySelector("#wind-speed");
const windChill = document.querySelector("#wind-chill");

let currentTemp = 10;
let units = "C";
let currentWindSpeed = 5;
let windUnits = "km/h"
let currentWindChill = 0;

temp.textContent = `${currentTemp} °${units}`;
windSpeed.textContent = `${currentWindSpeed} ${windUnits}`;

if ((units === "C" && windUnits === "km/h" && currentTemp <= 10 && currentWindSpeed > 4.8) || (units === "F" && windUnits === "mph" && currentTemp <= 50 && currentWindSpeed > 3)) {
    calculateWindChill();
    windChill.textContent = `${currentWindChill.toFixed(1)} °${units}`;
} else {
    windChill.textContent = `N/A`;
}

function calculateWindChill() {
    let convertedTemp = 0;
    let convertedSpeed = 0;
    let revertedTemp = currentTemp;
    let revertedSpeed = currentWindSpeed;

    // Converting to Fahrenheit if units are in Celcius.
    if (units === "C") {
        convertedTemp = currentTemp * (9 / 5) + 32;
        currentTemp = convertedTemp;
    }

    // Converting to mph if units are in km/h.
    if (windUnits === "km/h") {
        convertedSpeed = currentWindSpeed / 1.609;
        currentWindSpeed = convertedSpeed;
    }

    // Calculating Wind Chill in Fahrenheit.
    currentWindChill = 35.74 + (0.6215 * currentTemp) - (35.75 * Math.pow(currentWindSpeed, 0.16)) + (0.4275 * currentTemp * Math.pow(currentWindSpeed, 0.16));

    // Converting wind chill to Celcius if units are in Celcius. Also reverts currentTemp to its previous value.
    let convertedWindChill = 0;
    if (units === "C") {
        currentTemp = revertedTemp;
        convertedWindChill = (currentWindChill - 32) * (5 / 9);
        currentWindChill = convertedWindChill;
    }

    // Reverts currentWindSpeed to km/h.
    if (windUnits === "km/h") {
        currentWindSpeed = revertedSpeed;
    }
}