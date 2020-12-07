import axios from 'axios';

const BASE_URL = 'http://api.openweathermap.org/data/2.5';

export default axios.create({
    baseURL: BASE_URL,
    params: {
        API_KEY: 'YOUR API KEY HERE'
    }
});