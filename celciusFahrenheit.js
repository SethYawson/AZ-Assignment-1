/**
 * Write two JavaScript functions that convert temperatures
 * to and from Celsius and Fahrenheit.
 * The name of your first function must be celciusToFahrenheit
 * and the name of the second function must be fahrenheitToCelcius.
 * The functions must take one arguments corresponding
 * to the temperature to be converted: temperature.
 * The celciusToFahrenheit function must return
 * the temperature converted from Celcius to Fahrenheit.
 * Round off the returned value to 2 decimal places.
 * The fahrenheitToCelcius function must return
 * the temperature converted from Fahrenheit to Celcius.
 * Round off the returned value to 2 decimal places.
 */

// Write your code here

//function to convert celcius to Fahrenheit
    function celciusToFahrenheit(temperature) {
    const fahrenheit = (temperature * 9/5) + 32;
    return fahrenheit;
    }

//fucntion to convert Fahrenheit to Celcius
    function fahrenheitToCelcius(temperature) {
        const celsius = (temperature - 32) * 5/9;
        return celsius;
    }

    let celsiusTemperature = 32;
    let fahrenheitTemperature = 54;

    let convertedToFahrenheit = celciusToFahrenheit(celsiusTemperature);
    let convertedToCelsius = fahrenheitToCelcius(fahrenheitTemperature);

    convertedToFahrenheit = convertedToFahrenheit.toFixed(2);
    convertedToCelsius = convertedToCelsius.toFixed(2);

    console.log("Fahrenheit Tempreture:", convertedToFahrenheit);
    console.log("Celcius Tempreture:", convertedToCelsius);
    
// End of code

// Do not modify code below this line.
// --------------------------------
