import axios from '../helper/axios';
import regAxios from 'axios';

export const ACTIONS = {
    SET_LOADING: 'SET_LOADING',
    SET_CURRENT_WH: 'SET_CURRENT_WH',
    SET_FORECAST: 'SET_FORECAST',
    SET_APP_DATA: 'SET_APP_DATA'
};

export const getWeatherData = async (query) => {
    try {
        let responseGeo = '';
        if (!query) {
            // GET CURRENT LOCATION
            const fetchGeo = await regAxios.get('http://ip-api.com/json/')
            responseGeo = fetchGeo.data;
        }

        let city = responseGeo ? responseGeo.regionName : query;

        const weatherFetch = await axios.get(`/weather?q=${city}&appid=${axios.defaults.params.API_KEY}`)
        const weatherResponse = weatherFetch.data;

        const forecastFetch = await axios.get(`/forecast?q=${city}&appid=${axios.defaults.params.API_KEY}`)
        const forecastResponse = forecastFetch.data;

        return {weatherResponse, forecastResponse, city};
    } catch (error) {
        console.log(error);
    }
}
