import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
                <Row className="d-flex align-items-center">
                    <Col>{`${day}, ${currentDate}`}</Col>
                    <Col>{minTemp}&deg;/{maxTemp}&deg;</Col>
                    <Col><img className="w-25" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/></Col>
                    <Col>{weather && weather[0].description}</Col>
                </Row>
            </Card.Header>
            <Card.Body>
                <Row>
                    <Col className="mar-b-mob" sm>
                        <section className="border border-secondary rounded text-center p-3">
                            <h4 className="m-0">{weather && weather[0].description.toUpperCase()}</h4>
                            <div><img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt=""/></div>
                            <h2>{Math.floor(main.temp - 273.15)}&deg;</h2>
                            <div>Min {minTemp}&deg;/Max {maxTemp}&deg;</div>
                        </section>
                    </Col>
                    <Col sm>
                        <section style={{height: '100%'}} className="border border-secondary rounded p-3">
                            <p className="text-center text-md-left">Pressure: {main.pressure} hPa</p>
                            <p className="text-center text-md-left">humidity: {main.humidity}%</p>
                            <p className="text-center text-md-left">Wind: {Math.floor(wind.speed * 3.6)} Km/h</p>
                            <p className="text-center text-md-left">Wind direction: {wind.deg} &deg;deg</p>
                            <p className="text-center text-md-left">Visibility: {visibility / 1000} Km</p>
                        </section>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}