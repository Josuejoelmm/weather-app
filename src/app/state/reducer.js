import { ACTIONS } from './actions';
import filterForecast from '../helper/filterForecast';

const reducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.SET_LOADING:
            return {
                ...state,
                isLoading: true
            }
        case ACTIONS.SET_CURRENT_WH:
            return {
                ...state,
                currentWeather: action.data,
                isLoading: false
            }
        case ACTIONS.SET_FORECAST:
            return {
                ...state,
                forecast: filterForecast(action.data.list),
                isLoading: false
            }
        default:
            return state;
    }
}

export default reducer;