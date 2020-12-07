import React, { useEffect ,useReducer, useMemo } from 'react';
import reducer from './reducer';
import { getWeatherData , ACTIONS } from './actions';

const initialState = {
    isLoading: false,
    currentWeather: {},
    forecast: [],
    fetchError: false,
    city: ''
};

const GlobalContext = React.createContext();

function GlobalProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getWeatherData()
            .then(data => {
                dispatch({type: ACTIONS.SET_APP_DATA, data})
            });
    }, [])

    
    // AVOID to pass literal Object inside de context value (re-render fix)
    const contextValue = useMemo(() => {
        return { state, dispatch };
      }, [state, dispatch]);

    return(
        <GlobalContext.Provider value={contextValue}>
            {props.children}
        </GlobalContext.Provider>
    );
}

export { GlobalContext, GlobalProvider };