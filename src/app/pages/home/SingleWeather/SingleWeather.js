import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

/* Componets */
import MainInfo from '../MainInfo';
import MainTemp from '../MainTemp';
import InfoBadges from '../InfoBadges';

export default function SingleWeather({ state }) {
    return (
        <Container>
            <Row>
                <Col>
                    <MainInfo 
                    name={state.currentWeather.name && state.currentWeather.name}
                    dt={state.currentWeather.dt && state.currentWeather.dt}
                    description={state.currentWeather.weather && state.currentWeather.weather[0].description}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm={5}>
                    <MainTemp 
                        main={state.currentWeather.main && state.currentWeather.main} 
                        icon={state.currentWeather.weather && state.currentWeather.weather[0].icon} />
                </Col>
                <Col sm={7}>
                    <InfoBadges main={state.currentWeather.main && state.currentWeather.main}
                                visibility={state.currentWeather.visibility}
                                wind={state.currentWeather.wind && state.currentWeather.wind} />
                </Col>
            </Row>
        </Container>
    )
}
