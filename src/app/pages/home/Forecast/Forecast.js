import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import SingleForecast from '../SingleForecast';

export default function Forecast({ forecast }) {
    return (
        <div className="forecast_section">
            {
                forecast.length && forecast.map((singleDay, i) => (
                    <Accordion defaultActiveKey="0">
                        <SingleForecast key={singleDay.dt} singleDay={singleDay} index={i} />
                    </Accordion>
                ))
            }
        </div>
    )
}
