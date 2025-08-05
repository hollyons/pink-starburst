import React from "react";
import WeatherDisplay from "./WeatherDisplay";
import RainOverlay from "./RainOverlay";
import Greeting from "./Greeting";
import { useWeather } from "../context/WeatherContext";
import { useTimeOfDay } from "../context/TimeOfDayContext";
import { timeOfDayBgMap, timeOfDayTextMap } from "../styles/timeOfDayStyles";
import mountain from "../images/mountain.png";


export default function App() {
  const { weather, error } = useWeather();
  const { timeOfDay } = useTimeOfDay();
  const bgColorClass = timeOfDayBgMap[timeOfDay];
  const textColorClass = timeOfDayTextMap[timeOfDay];

  const isRaining = weather?.weather?.[0]?.main?.toLowerCase?.();
  const shouldShowRain = ["rain", "drizzle", "thunderstorm"].includes(isRaining ?? "");

  return (
    <main className={`${bgColorClass} ${textColorClass} transition-colors duration-1000 p-24 font-epilogue min-h-screen`}>
      {shouldShowRain && <RainOverlay />}
      <div className="text-center">
        <Greeting />
        {error && <p>{error}</p>}
        {!weather && !error && <p>Loading weather...</p>}
      <img
        src={mountain}
        alt="A mountain landscape"
        className="absolute bottom-0 right-0 w-[100%] h-auto opacity-50"
        />
      {weather && <WeatherDisplay weather={weather} />}
      </div>
    </main>
  );
}
