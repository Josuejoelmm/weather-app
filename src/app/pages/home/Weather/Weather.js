import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../../state/Contex';
import Loader from '../../../components/Loader';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Weather() {
    const globalContext = useContext(GlobalContext);
    const dispatch = globalContext.dispatch;
    const isLoading = globalContext.state.isLoading;
    const [currentWeather, setCurrentWeather] = useState(false);
    const [forecast, setForecast] = useState(false);

    useState(() => {
        console.log('howMANY');
        fetch('http://api.openweathermap.org/data/2.5/forecast?q=Buenos%20Aires&appid=d3f7c9815cbbef3b7209c909c6b2d1f9')
            .then(req => req.json())
            .then(res => {
                setCurrentWeather(res);
            });

        fetch('http://api.openweathermap.org/data/2.5/weather?q=Buenos%20Aires&appid=d3f7c9815cbbef3b7209c909c6b2d1f9')
            .then(req => req.json())
            .then(res => {
                setForecast(res);
            });
    }, [currentWeather, forecast, isLoading]);

    const startLoanding = () => {
        dispatch({type: "SET_LOADING"});
    }

    return (
        <Container className="py-4">
            <Row>
                <Col>
                    <Form>
                        <Form.Group>
                            <Form.Label>Search City</Form.Label>
                            <Form.Control type="text" placeholder="New York" />
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
            <Row>
                <Col sm>
                <Card style={{ width: '18rem' }}>
                    <Card.Img style={{width: '40%', margin: '0 auto'}} variant="top" src="https://www.placecage.com/60/40" />
                    <Card.Body>
                        <Card.Title>18*</Card.Title>
                        <Card.Text>
                        Con probabilidad de precipitacion: 50%
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                </Card>
                </Col>
                <Col sm>COL 2</Col>
            </Row>
            <Row>
                <Col sm>1</Col>
                <Col sm>2</Col>
                <Col sm>3</Col>
                <Col sm>4</Col>
                <Col sm>5</Col>
                <Col sm>6</Col>
            </Row>
        </Container>
    )
}
