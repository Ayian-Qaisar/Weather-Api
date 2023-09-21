export const celsiusToFahrenheit = (celsius) => (celsius * 9) / 5 + 32;
export const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5;
export function kelvinToCelsius(kelvin) {
  return Math.round(kelvin - 273.15);
}
