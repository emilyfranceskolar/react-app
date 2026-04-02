import type { KeyboardEvent } from "react";

export default async function getWeatherByInput(
  event: KeyboardEvent<HTMLInputElement>,
  location: string,
) {
  //openWeather
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=c44c3f2fcab621d682e1d711bdcf2022&units=metric`;
  if (event.key === "Enter") {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Weather api called failed (${response.status})`);
    }
    return response.json();
  }
}
