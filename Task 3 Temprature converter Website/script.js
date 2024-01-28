function convertTemperature() {
    const temperature = parseFloat(document.getElementById("temperature").value);
    const fromUnit = document.getElementById("fromUnit").value.toLowerCase();
    const toUnit = document.getElementById("toUnit").value.toLowerCase();
  
    if (isNaN(temperature)) {
      alert("Please enter a valid number for temperature.");
      return;
    }
  
    let convertedTemperature;
  
    switch (fromUnit) {
      case "celsius":
        convertedTemperature =
          toUnit === "fahrenheit"
            ? temperature * 9 / 5 + 32
            : toUnit === "kelvin"
            ? temperature + 273.15
            : temperature; 
        break;
      case "fahrenheit":
        convertedTemperature =
          toUnit === "celsius"
            ? (temperature - 32) * 5 / 9
            : toUnit === "kelvin"
            ? (temperature + 459.67) * 5 / 9
            : temperature;
        break;
      case "kelvin":
        convertedTemperature =
          toUnit === "celsius"
            ? temperature - 273.15
            : toUnit === "fahrenheit"
            ? temperature * 9 / 5 - 459.67
            : temperature; 
        break;
      default:
        alert("Invalid unit selected.");
        return;
    }
  
    document.getElementById("result").textContent =
      `Converted temperature: ${convertedTemperature.toFixed(2)} ${toUnit}`;
  }
  