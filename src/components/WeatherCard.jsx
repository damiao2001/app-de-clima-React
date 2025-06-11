import React from 'react';
import styled from 'styled-components';

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

const WeatherIcon = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
`;

export default function WeatherCard({ weather }) {
  return (
    <>
      <Temp>{weather.temp}°C</Temp>
      <Description>{weather.description}</Description>
      <WeatherIcon src={weather.icon} alt="Ícone do clima" />
    </>
  );
}
