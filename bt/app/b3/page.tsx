import axios from 'axios';
import React from 'react';

async function getWeather() {
    const res = await axios.get("https://api.open-meteo.com/v1/forecast?latitude=35&longitude=139&hourly=temperature_2m,weathercode");
    return res.data;
}

export default async function page() {
    const weatherData = await getWeather();
    console.log(weatherData);

    return (
        <div>
            <h1>Weather Forecast</h1>
            {weatherData.hourly.time.map((time: string, index: number) => (
                <div key={index}>
                    <p>Time: {time}</p>
                    <p>Temperature: {weatherData.hourly.temperature_2m[index]}°C</p>
                    <p>Weather Condition: {getWeatherCondition(weatherData.hourly.weathercode[index])}</p>
                </div>
            ))}
        </div>
    );
}

// Hàm để chuyển đổi mã thời tiết thành trạng thái thời tiết (cần xem tài liệu API để biết chi tiết các mã)
function getWeatherCondition(code: number) {
    switch(code) {
        case 0: return "Clear sky";
        case 1: return "Mainly clear";
        case 2: return "Partly cloudy";
        case 3: return "Overcast";
        case 45: return "Fog";
        case 48: return "Depositing rime fog";
        case 51: return "Drizzle: Light";
        case 53: return "Drizzle: Moderate";
        case 55: return "Drizzle: Dense intensity";
        case 61: return "Rain: Slight";
        case 63: return "Rain: Moderate";
        case 65: return "Rain: Heavy intensity";
        case 71: return "Snow fall: Slight";
        case 73: return "Snow fall: Moderate";
        case 75: return "Snow fall: Heavy intensity";
        case 80: return "Rain showers: Slight";
        case 81: return "Rain showers: Moderate";
        case 82: return "Rain showers: Violent";
        default: return "Unknown condition";
    }
}
