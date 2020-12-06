import React from 'react';

export default function MainInfo({ name, dt, description }) {
    const unix = dt;
    const date = new Date(unix * 1000);
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const day = days[date.getDay()];
    const hours = date.getHours();
    const minutes = date.getMinutes();

    return (
            <>
                <h1>{name}</h1>
                <h3>{`${day}, ${hours}:${minutes}`}</h3>
                <p>{description}</p>
            </>
            )
}