import React, { useState, useEffect } from 'react';
import './WeatherDetails.css';
import WeatherShortText from './weather_shorttext/WeatherShortText';
import HourlyWeatherDetails from './hourly_weather_details/HourlyWeatherDetails';
function WeatherDetails({cityName}){

    const [city, setCity] = useState(cityName);
    
    useEffect(() => {
        setCity(cityName);}
    , [location.state]);

    return(
        <div className='weatherDetails'>
            <hr />
            <HourlyWeatherDetails cityName={city}></HourlyWeatherDetails>   
            <hr />
        </div>
    )
}

export default WeatherDetails;