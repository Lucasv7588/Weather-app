const weatherAPI = "https://www.metaweather.com/api";
const weatherIconsAPI = "https://www.metaweather.com/static/img/weather";
const convertFarenheit = temp => ((temp * 9/5) + 32);
const convertVelocity = vel => (vel*1.609);

export { weatherAPI, weatherIconsAPI, convertFarenheit, convertVelocity}