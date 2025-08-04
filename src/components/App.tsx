import React, { useEffect, useState } from "react";
import WeatherDisplay from "./WeatherDisplay";
import { fetchWeather } from "../utils/fetchWeather";

export default function App() {
  const [coords, setCoords] = useState<{ lat?: number; lon?: number } | null>(null);
  const [weatherData, setWeatherData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  // 1️⃣ Ask for location once on mount
  useEffect(() => {
    if (navigator.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lon: longitude });
          navigator.geolocation.clearWatch(watchId); // Stop after first result
        },
        (err) => {
          console.warn("Geolocation failed, using default location:", err.message);
          setCoords(null); // triggers fallback in fetch
        }
      );
    } else {
      console.warn("Geolocation not supported, using default location.");
      setCoords(null);
    }
  }, []);

  // 2️⃣ Fetch weather *after* coords are known or fallback is set
  useEffect(() => {
    if (weatherData || error !== null) return; // don't re-fetch unnecessarily

    const getWeather = async () => {
      try {
        // Only call fetchWeather if we have valid coordinates
        if (coords?.lat !== undefined && coords?.lon !== undefined) {
          const data = await fetchWeather(coords.lat, coords.lon);
          setWeatherData(data);
        } else if (coords === null) {
          // Handle fallback case when coords is explicitly null
          const data = await fetchWeather(40.7128, -74.0060); // Default to NYC coordinates
          setWeatherData(data);
        }
      } catch (err) {
        console.error("Error fetching weather:", err);
        setError("Failed to fetch weather.");
      }
    };

    getWeather();
  }, [coords, error, weatherData]);

  return (
    <main>
      {error && <p>{error}</p>}
      {!weatherData && !error && <p>Loading weather...</p>}
      {weatherData && <WeatherDisplay weather={weatherData} />}
    </main>
  );
}
