import React, { useState } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { fetchCitySuggestions } from './services/citySuggestions';

const GlobalStyle = createGlobalStyle`
  body, html, #root {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background: linear-gradient(135deg, #667eea, #764ba2);
  }
`;

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.15);
  border-radius: 16px;
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.18);
  width: 340px;
  padding: 30px 25px;
  color: #fff;
  text-align: center;
`;

const Title = styled.h1`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 2rem;
`;

const Temp = styled.p`
  font-size: 4rem;
  margin: 0;
  font-weight: 700;
`;

const Description = styled.p`
  font-size: 1.2rem;
  margin-top: 8px;
  font-style: italic;
  text-transform: capitalize;
`;

const CityInput = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 10px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
`;

const Button = styled.button`
  background: linear-gradient(90deg, #2575fc, #6a11cb);
  border: none;
  padding: 10px 25px;
  border-radius: 12px;
  color: white;
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #6a11cb, #2575fc);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`;

const SuggestionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  text-align: left;
  max-height: 120px;
  overflow-y: auto;
`;

const SuggestionItem = styled.li`
  padding: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;

export default function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;

  async function fetchWeather() {
    if (!city) {
      setError('Digite uma cidade!');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
          city
        )}&units=metric&lang=pt_br&appid=${API_KEY}`
      );

      if (!response.ok) {
        throw new Error('Cidade não encontrada');
      }

      const data = await response.json();

      setWeather({
        temp: Math.round(data.main.temp),
        description: data.weather[0].description,
        icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`,
      });
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  }

  async function handleCityChange(value) {
    setCity(value);
    if (value.length < 3) {
      setSuggestions([]);
      return;
    }
    try {
      const results = await fetchCitySuggestions(value);
      setSuggestions(results);
    } catch {
      setSuggestions([]);
    }
  }

  return (
    <>
      <GlobalStyle />
      <Container>
        <Card>
          <Title>CLIMA TEMPO TESTE API</Title>

          <CityInput
            value={city}
            onChange={(e) => handleCityChange(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && fetchWeather()}
            placeholder="Digite uma cidade"
          />

          <SuggestionList>
            {suggestions.map((s, i) => (
              <SuggestionItem
                key={i}
                onClick={() => {
                  setCity(s);
                  setSuggestions([]);
                }}
              >
                {s}
              </SuggestionItem>
            ))}
          </SuggestionList>

          <Button onClick={fetchWeather} disabled={loading}>
            {loading ? 'Carregando...' : 'Buscar'}
          </Button>

          {error && <p style={{ color: 'red', marginTop: '15px' }}>{error}</p>}

          {weather && (
            <>
              <Temp>{weather.temp}°C</Temp>
              <Description>{weather.description}</Description>
              <WeatherIcon src={weather.icon} alt="Ícone do clima" />
            </>
          )}
        </Card>
      </Container>
    </>
  );
}
