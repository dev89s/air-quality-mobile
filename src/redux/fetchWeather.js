const key = '200b81371c37c6e6a47806d105718544';

const fetchLocation = async (city) => {
  const url = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${key}`;
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  const data = await response.json();
  if (data.length === 0) {
    throw new Error(`There is no city named ${city}`);
  }
  return data[0];
};

export const fetchWeather = async (city) => {
  //* fetch weather by location
  // const { lat, lon } = await fetchLocation(city);
  // const urlGeo = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
  //* fetch weather by city name
  const urlCity = `https://api.openweathermap.org/data/2.5/weather?q=${city.split('-').join(' ')}&appid=${key}&units=metric`;
  const response = await fetch(urlCity);
  if (response.status === 404) {
    throw new Error(`HTTP error! The city "${city}" is not found!`);
  }
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status} ${response.statusText}`);
  }
  return response;
};

export const fetchPolution = async (city) => {
  const { lat, lon } = await fetchLocation(city);
  const url = `https://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=${key}`;
  const response = await fetch(url);
  if (response.status === 404) {
    throw new Error(`HTTP error! The city "${city}" is not found!`);
  }
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response;
};
