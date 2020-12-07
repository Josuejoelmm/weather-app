import { ACTIONS } from './actions';
import filterForecast from '../helper/filterForecast';

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: true,
                currentWeather: {},
                forecast: [],
                fetchError: false
            }
        case ACTIONS.SET_APP_DATA:
            if (action.data && action.data.weatherResponse) {
                return {
                    ...state,
                    currentWeather: action.data.weatherResponse,
                    forecast: filterForecast(action.data.forecastResponse.list),
                    isLoading: false,
                    city: action.data.city
                }
            }
            return {
                ...state,
                fetchError: true,
                isLoading: false
            }
        default:
            return state;
    }
}

export default reducer;