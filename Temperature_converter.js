function convertTemperature() {
    const inputTemperature = document.getElementById("temperatureInput").value;
    const selectedUnit = document.getElementById("unitSelector").value;
    const resultElement = document.getElementById("result");
  
    // Validate input as a number
    if (isNaN(inputTemperature)) {
      resultElement.textContent = "Please enter a valid number.";
      return;
    }
  
    // Perform conversion
    let convertedTemperature;
    if (selectedUnit === "celsius") {
      convertedTemperature = (parseFloat(inputTemperature) - 32) * (5/9);
    } else if (selectedUnit === "fahrenheit") {
      convertedTemperature = (parseFloat(inputTemperature) * (9/5)) + 32;
    } else {
      convertedTemperature = parseFloat(inputTemperature) + 273.15; // Kelvin conversion
    }
  
    // Display the result
    resultElement.textContent = `Converted Temperature: ${convertedTemperature.toFixed(2)} ${selectedUnit.toUpperCase()}`;
  }