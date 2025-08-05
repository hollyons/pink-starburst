import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchWeather, Weather } from "../utils/fetchWeather";

interface Coords {
  lat: number;
  lon: number;
}

interface WeatherContextType {
  coords: Coords | null;
  weather: Weather | null;
  loading: boolean;
  error: string | null;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider = ({ children }: { children: React.ReactNode }) => {
  const [coords, setCoords] = useState<Coords | null>(null);
  const [weather, setWeather] = useState<Weather | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false); // NEW

  // Ensure this runs only in the browser
  useEffect(() => {
    setMounted(true); // Flag that we're in the browser now
  }, []);

  // Step 1: Get location
  useEffect(() => {
    if (!mounted) return;

    if (navigator?.geolocation) {
      const watchId = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoords({ lat: latitude, lon: longitude });
          navigator.geolocation.clearWatch(watchId);
        },
        (err) => {
          console.warn("Geolocation failed, using default location:", err.message);
          setCoords({ lat: 40.7128, lon: -74.0060 }); // NYC fallback
        }
      );
    } else {
      console.warn("Geolocation not supported, using default location.");
      setCoords({ lat: 40.7128, lon: -74.0060 }); // NYC fallback
    }
  }, [mounted]);

  // Step 2: Fetch weather
  useEffect(() => {
    const getWeather = async () => {
      if (!coords) return;

      try {
        const data = await fetchWeather(coords.lat, coords.lon);
        setWeather(data);
        setError(null);
      } catch (err) {
        setError("Failed to fetch weather.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [coords]);

  // Avoid rendering children at all during SSR
  if (!mounted) return null;

  return (
    <WeatherContext.Provider value={{ coords, weather, loading, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

// Hook to use the weather context
export const useWeather = () => {
  const context = useContext(WeatherContext);
  if (!context) throw new Error("useWeather must be used within a WeatherProvider");
  return context;
};
