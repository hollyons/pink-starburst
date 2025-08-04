export interface WeatherData {
  coord: {
    lon: number;
    lat: number;
  };
  weather: {
    id: number;
    main: string;
    description: string;
    icon: string;
  }[];
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
    sea_level?: number;
    grnd_level?: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust?: number;
  };
  clouds: {
    all: number;
  };
  rain?: {
    "1h"?: number;
    "3h"?: number;
  };
  dt: number;
  sys: {
    country: string;
    sunrise: number;
    sunset: number;
  };
  name: string;
}

export const fetchWeather = async (lat: number, lon: number): Promise<WeatherData> => {
  const apiKey = process.env.GATSBY_WEATHER_API_KEY;
  const apiURL = process.env.GATSBY_WEATHER_API_URL
  const url = `${apiURL}?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

  console.log("API Key:", apiKey); 
  console.log("url:", url); 
  
  if (!apiKey || !apiURL) {
    throw new Error("Missing environment variables.");
  }

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to fetch weather: ${response.statusText}`);
  }

  return response.json();
};