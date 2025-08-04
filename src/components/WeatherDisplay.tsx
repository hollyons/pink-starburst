// components/WeatherDisplay.tsx
import React from "react";
import { celsiusToFahrenheit } from "../utils/celciusToFahrenheit";

interface WeatherDisplayProps {
  weather: {
    name: string;
    weather: {
      main: string;
      description: string;
      icon: string;
    }[];
    main: {
      temp: number;
      feels_like: number;
    };
  };
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ weather }) => {
  const { name, weather: conditions, main } = weather;
  const condition = conditions[0];

  return (
    <section>
      <h2>Weather in {name}</h2>
      <p>{condition.main} – {condition.description}</p>
      <p>{celsiusToFahrenheit(main.temp)}°F</p>
    </section>
  );
};

export default WeatherDisplay;
