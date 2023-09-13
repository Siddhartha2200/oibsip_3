function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5/9;
}

function celsiusToKelvin(celsius) {
    return celsius + 273.15;
}

function kelvinToCelsius(kelvin) {
    return kelvin - 273.15;
}

function fahrenheitToKelvin(fahrenheit) {
    return (fahrenheit - 32) * 5/9 + 273.15;
}

function kelvinToFahrenheit(kelvin) {
    return (kelvin - 273.15) * 9/5 + 32;
}

function convertTemperature() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const fromUnit = document.getElementById('fromUnit').value;
    const toUnit = document.getElementById('toUnit').value;

    let convertedTemp;

    if (fromUnit === 'celsius') {
        if (toUnit === 'celsius') {
            convertedTemp = inputTemp;
        } else if (toUnit === 'fahrenheit') {
            convertedTemp = celsiusToFahrenheit(inputTemp);
        } else if (toUnit === 'kelvin') {
            convertedTemp = celsiusToKelvin(inputTemp);
        }
    } else if (fromUnit === 'fahrenheit') {
        if (toUnit === 'celsius') {
            convertedTemp = fahrenheitToCelsius(inputTemp);
        } else if (toUnit === 'fahrenheit') {
            convertedTemp = inputTemp;
        } else if (toUnit === 'kelvin') {
            convertedTemp = fahrenheitToKelvin(inputTemp);
        }
    } else if (fromUnit === 'kelvin') {
        if (toUnit === 'celsius') {
            convertedTemp = kelvinToCelsius(inputTemp);
        } else if (toUnit === 'fahrenheit') {
            convertedTemp = kelvinToFahrenheit(inputTemp);
        } else if (toUnit === 'kelvin') {
            convertedTemp = inputTemp;
        }
    }

    const resultElement = document.getElementById('conversionResult');
    resultElement.textContent = `${inputTemp.toFixed(2)} ${fromUnit.toUpperCase()} is ${convertedTemp.toFixed(2)} ${toUnit.toUpperCase()}`;
}
