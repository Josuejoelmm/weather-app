import React from 'react';
import SingleForecast from '../SingleForecast';

export default function Forecast({ forecast }) {
    return (
        <div className="forecast_section">
            {
                forecast.length && forecast.map((singleDay, i) => (
                    <SingleForecast key={singleDay.dt} singleDay={singleDay} index={i} />
                ))
            }
        </div>
    )
}
