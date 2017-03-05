import axios from 'axios'

const API_KEY = 'd8d3b978da34077fda0071048190eaea';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`;
    const request = axios.get(url);

    console.log('request: ', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}