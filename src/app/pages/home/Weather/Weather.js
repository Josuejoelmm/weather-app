import React, { useState, useContext } from 'react';
import { GlobalContext } from '../../../state/Contex';
import Loader from '../../../components/Loader';

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
        <div>
            <h1>asd App</h1>
            <button onClick={startLoanding}>CLICK</button>
            <Loader />
        </div>
    )
}
