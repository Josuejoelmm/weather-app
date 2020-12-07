import React, { useContext } from 'react';
import { GlobalContext } from '../../../state/Contex';
import Loader from '../../../components/Loader';
import Container from 'react-bootstrap/Container';

/* Componets */
import SingleWeather from '../SingleWeather';
import Forecast from '../Forecast';
import DisplayFetchError from '../../../components/DisplayFetchError';

export default function Weather() {
    const globalContext = useContext(GlobalContext);
    const state = globalContext.state;

    const renderWeather = () => {
        if (!state.isLoading && state.currentWeather.main) {
            return(
                <>
                    <SingleWeather state={state} />
                    <Forecast forecast={state.forecast && state.forecast} />
                </>
            )
        }

        if (state.fetchError) {
            <DisplayFetchError/>
        }

        return (
            <Container className="d-flex justify-content-center pt-5">
                <Loader/>
            </Container>
        )
    }

    return renderWeather()
}