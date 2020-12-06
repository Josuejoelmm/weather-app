import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../../state/Contex';
import Loader from '../../../components/Loader';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

/* Componets */
import SingleWeather from '../SingleWeather';
import Forecast from '../Forecast';

export default function Weather() {
    const globalContext = useContext(GlobalContext);
    const state = globalContext.state;
    const dispatch = globalContext.dispatch;
    const isLoading = state.isLoading;
    let asd = null;

    useState(() => {
        if (state.forecast.length) {
           
        }
    }, [isLoading]);

    const startLoanding = () => {
        dispatch({type: "SET_LOADING"});
    }

    const renderForecast = () => {
        if(state.forecast.length) {
            return <Forecast forecast={state.forecast && state.forecast} />
        }
    }
    console.log(state.forecast);
    return (
        state.currentWeather.main ? 
        <Container className="py-4">
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Select City</Form.Label>
                            <Form.Control as="select">
                                <option>Detroit</option>
                                <option>London</option>
                                <option>Madrid</option>
                                <option>Cordoba</option>
                                <option>New York</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <SingleWeather state={state} />
            {renderForecast()}
        </Container> : <Container className="d-flex justify-content-center pt-5"><Loader/></Container>
    )
}
