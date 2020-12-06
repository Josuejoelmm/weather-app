import React, { useState, useEffect ,useReducer, useMemo } from 'react';
import reducer from './reducer';
import { getCurrentWeather, getForecast } from './actions';
import { ACTIONS } from './actions';

const initialState = {
    isLoading: false,
    currentWeather: {},
    forecast: []
};

const GlobalContext = React.createContext();

function GlobalProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        getCurrentWeather()
            .then(data => {
                dispatch({
                    type: ACTIONS.SET_CURRENT_WH,
                    data
                })
            });
        getForecast()
        .then(data => {
            dispatch({
                type: ACTIONS.SET_FORECAST,
                data
            })
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