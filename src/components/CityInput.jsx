import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding: 12px 15px;
  margin-bottom: 10px;
  border-radius: 12px;
  border: none;
  font-size: 1rem;
  outline: none;
  box-sizing: border-box;
`;

const SuggestionList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
  text-align: left;
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

export default function CityInput({ city, setCity, suggestions, fetchSuggestions, fetchWeather, setSuggestions }) {
  return (
    <>
      <Input
        type="text"
        placeholder="Digite uma cidade"
        value={city}
        onChange={(e) => {
          const value = e.target.value;
          setCity(value);
          fetchSuggestions(value);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') fetchWeather();
        }}
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
    </>
  );
}
