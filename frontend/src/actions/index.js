import axios from 'axios'

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    const request = axios.get('/get_data?city='+city);

    console.log('request: ', request)

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}