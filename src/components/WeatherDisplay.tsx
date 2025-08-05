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
    <section className="absolute bottom-4 right-6 z-10 group text-lg md:text-base font-semibold px-4 py-2">
      <h1 className="text-[72px] font-light leading-none">{celsiusToFahrenheit(main.temp)}°</h1>
      <p className="text-sm font-light opacity-0 transition-opacity duration-500 group-hover:opacity-100">{name}</p>
    </section>
  );
};

export default WeatherDisplay;
