import React, { useState,useContext } from 'react';
import { GlobalContext } from '../../../state/Contex';
import { getWeatherData, ACTIONS } from '../../../state/actions';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function SelectCity() {
    const globalContext = useContext(GlobalContext);
    const city = globalContext.state.city;
    const dispatch = globalContext.dispatch;
    const [selectedCity, setSelectedCity] = useState('');

    const onSubmitForm = (e) => {
        e.preventDefault();
        dispatch({type: ACTIONS.SET_LOADING});
        getWeatherData(selectedCity)
            .then(data => {
                dispatch({type: ACTIONS.SET_APP_DATA, data})
            });
    }

    const onSelect = (e) => {
        setSelectedCity(e.target.value)
    }

    return (
        <Form onSubmit={onSubmitForm}>
            <Form.Group>
                <Form.Label><h3>Select City</h3></Form.Label>
                <Row>
                    <Col>
                        <Form.Control onChange={onSelect} as="select">
                            <option>{city}</option>
                            <option>Detroit</option>
                            <option>London</option>
                            <option>Madrid</option>
                            <option>Cordoba</option>
                            <option>New York</option>
                        </Form.Control>
                    </Col>
                    <Col>
                        <Button variant="secondary" type="submit">Submit</Button>
                    </Col>
                </Row>
            </Form.Group>
        </Form>
    )
}