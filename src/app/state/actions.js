import axios from '../helper/axios';

export const ACTIONS = {
    SET_LOADING: 'SET_LOADING',
    SET_CURRENT_WH: 'SET_CURRENT_WH',
    SET_FORECAST: 'SET_FORECAST'
};

export const getCurrentWeather = async () => {
    try {
        const fetch = await axios.get('/weather?q=Buenos%20Aires&appid=d3f7c9815cbbef3b7209c909c6b2d1f9')
        const response = fetch.data;
        return response;
    } catch (error) {
        console.log(error);
    }
};

export const getForecast = async () => {
    try {
        const fetch = await axios.get('/forecast?q=Buenos%20Aires&appid=d3f7c9815cbbef3b7209c909c6b2d1f9')
        const response = fetch.data;
        return response;
    } catch (error) {
        console.log(error);
    }
};