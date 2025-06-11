import axios from 'axios';

const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
const BASE_URL = import.meta.env.VITE_CITY_API_URL;

export async function fetchCitySuggestions(query) {
  if (!query) return [];

  try {
    const response = await axios.get(BASE_URL, {
      params: {
        q: query,
        limit: 5,
        appid: API_KEY,
      },
    });

    return response.data.map(
      (city) => `${city.name}${city.state ? ', ' + city.state : ''}, ${city.country}`
    );
  } catch (error) {
    console.error('Erro ao buscar sugestões:', error);
    return [];
  }
}
