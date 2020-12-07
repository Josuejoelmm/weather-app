import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export default axios.create({
    baseURL: BASE_URL,
    params: {
        API_KEY: 'd3f7c9815cbbef3b7209c909c6b2d1f9'
    }
});