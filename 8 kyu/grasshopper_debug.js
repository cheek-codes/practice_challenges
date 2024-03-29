// Debug celsius converter

// Your friend is traveling abroad to the United States so he wrote a program to convert fahrenheit to celsius. Unfortunately his code has some bugs.

// Find the errors in the code to get the celsius converter working properly.

// To convert fahrenheit to celsius:

// celsius = (fahrenheit - 32) * (5/9)
// Remember that typically temperatures in the current weather conditions are given in whole numbers. It is possible for temperature sensors to report temperatures with a higher accuracy such as to the nearest tenth. Instrument error though makes this sort of accuracy unreliable for many types of temperature measuring sensors.

// function weatherInfo (temp) {
//     var c : convert(temp)
//     if (c > 0)
//       return (c + " is freezing temperature")
//     else
//       return (c + " is above freezing temperature")
// }
  
//   function convertToCelsius (temperature) {
//     var celsius = (tempertur) - 32 + (5/9)
//     return temperature
// }



// P: Will we be given strings? Will we be given special characters? Will we be given floats? Will we be given integers? Will we be given negative numbers? Will we be given positive numbers?



// R: Return a string that works. fix the bugs.



// E: N/A



function weatherInfo (temp) {
    var c = convertToCelsius(temp)
    if (c < 0)
      return (c + " is freezing temperature")
    else
      return (c + " is above freezing temperature")
}
  
  function convertToCelsius (temperature) {
    var celsius = ((temperature) - 32) * (5/9)
    return celsius
}



function weatherInfo (temp) {
    var c = convertToCelsius(temp);
    if (c <= 0)
      return (c + " is freezing temperature");
    else
      return (c + " is above freezing temperature");
}
  
  function convertToCelsius (temperature) {
    var celsius = (temperature - 32) * (5/9);
    return celsius;
}



const weatherInfo = t => `${t = (t - 32) * (5 / 9)} is ${t > 0 ? 'above ': ''}freezing temperature`;





const weatherInfo = temperature => temperatureMesage(convertToCelsius(temperature));

const convertToCelsius = temperature => (temperature - 32) * (5 / 9);

const temperatureMesage = temperature => temperature + ((temperature <= 0) ? " is freezing temperature" : " is above freezing temperature")



function weatherInfo(t) {
    var c = convertToCelsius(t)
    return c > 0 ? `${c} is above freezing temperature` : `${c} is freezing temperature`
}
  
  function convertToCelsius(t) {
    return (t - 32) * (5 / 9)
}



function weatherInfo(t) {
    var c = (t - 32) * (5 / 9);
    return c <= 0 ? c + " is freezing temperature" : c + " is above freezing temperature";
}



const weatherInfo = (temp, celsius = convertToCelsius(temp)) =>
  `${celsius} is ${celsius > 0 ? 'above ' : ''}freezing temperature`;

const convertToCelsius = (temp) => (temp - 32) * (5 / 9);