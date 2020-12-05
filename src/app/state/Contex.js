import React, { useReducer, useMemo } from 'react';
import reducer from './reducer';

const initialState = {
    isLoading: false
};

const GlobalContext = React.createContext();

function GlobalProvider(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    
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