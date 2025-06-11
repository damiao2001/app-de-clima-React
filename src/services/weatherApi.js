import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export async function fetchWeatherData(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&units=metric&lang=pt_br&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Cidade não encontrada');
  }

  const data = await response.json();

  return {
    temp: Math.round(data.main.temp),
    description: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  };
}

export async function fetchCitySuggestions(query) {
  const response = await axios.get('https://wft-geo-db.p.rapidapi.com/v1/geo/cities', {
    params: { namePrefix: query, limit: 5 },
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY,
      'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com',
    },
  });
  return response.data.data.map((city) => city.city);
}
export async function fetchWeatherDataByCoords(lat, lon) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&lang=pt_br&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Dados climáticos não encontrados');
  }

  const data = await response.json();

  return {
    temp: Math.round(data.main.temp),
    description: data.weather[0].description,
    icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
  };
}