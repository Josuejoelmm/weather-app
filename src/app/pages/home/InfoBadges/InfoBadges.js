import React from 'react';
import Badge from 'react-bootstrap/Badge';

export default function InfoBadges({ main: {pressure, humidity}, wind: {speed, deg}, visibility }) {
    return (
        <>
            <h4 className="extra-small-t"><Badge variant="dark">Pressure: {pressure} hPa</Badge></h4>
            <h4 className="extra-small-t"><Badge variant="dark">humidity: {humidity}%</Badge></h4>
            <h4 className="extra-small-t"><Badge variant="dark">Wind: {Math.floor(speed * 3.6)} Km/h</Badge></h4>
            <h4 className="extra-small-t"><Badge variant="dark">Wind direction: {deg} &deg;deg</Badge></h4>
            <h4 className="extra-small-t"><Badge variant="dark">Visibility: {visibility / 1000} Km</Badge></h4>
        </>
    )
}
