import type { KeyboardEvent } from "react";

const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;

export default async function getWeatherByInput(
  event: KeyboardEvent<HTMLInputElement>,
  location: string,
) {
  const city = encodeURIComponent(location.trim());
  //openWeather
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  if (event.key === "Enter") {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather api called failed (${response.status})`);
    }
    return response.json();
  }
}
