import React from 'react';
import Card from 'react-bootstrap/Card';

export default function MainTemp({ main, icon }) {
    return (
        <>
            <Card>
                <Card.Body>
                    <Card.Img 
                        className="rounded mx-auto d-block" 
                        style={{width: '40%', margin: '0 auto'}} 
                        variant="top" 
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`} 
                    />
                    <h4 style={{fontSize: '2.5rem'}} className="text-center">
                            {main.temp !== undefined ? Math.floor(main.temp - 273.15) : null} &deg;C
                    </h4>
                    <h5 className="extra-small-t text-center">
                        MIN {main.temp_min !== undefined ? Math.floor(main.temp_min - 273.15) : null} &deg; / MAX {main.temp_max && Math.floor(main.temp_max - 273.15)} &deg;
                    </h5>
                </Card.Body>
            </Card>
        </>
    )
}
