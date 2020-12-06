import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';

export default function SingleForecast({ singleDay: { dt, weather, main, wind, visibility }, index }) {
    const unix = dt;
    const date = new Date(unix * 1000);
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const day = days[date.getDay()];
    const currentDate = date.getDate();
    const icon = weather && weather[0].icon;
    const minTemp = main.temp_min && Math.floor(main.temp_min - 273.15);
    const maxTemp = main.temp_max && Math.floor(main.temp_max - 273.15);
    return (
        <Card>
            <Card.Header>
                <Accordion.Toggle as={Card.Header} variant="link" eventKey={index}>
                    <Row className="d-flex align-items-center">
                        <Col>{`${day}, ${currentDate}`}</Col>
                        <Col>{minTemp}&deg;/{maxTemp}&deg;</Col>
                        <Col><img className="w-25" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/></Col>
                        <Col>{weather && weather[0].description}</Col>
                    </Row>
                </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={index}>
            <Card.Body>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h4>Pressure: {main.pressure} hPa</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h4>humidity: {main.humidity}%</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h4>Wind: {Math.floor(wind.speed * 3.6)} Km/h</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h4>Wind direction: {wind.deg} &deg;deg</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Body>
                                <h4>Visibility: {visibility / 1000} Km</h4>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Card.Body>
            </Accordion.Collapse>
        </Card>
    )
}
