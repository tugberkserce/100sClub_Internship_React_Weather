import React from 'react';
import './WeatherIcon.css';

function WeatherIcon(){
    return(
        <div className="weather-icon">
            <img className="sunny-icon" src="src/assets/weather_icons/sun.gif" alt="sunny-icon"/>
        </div>
    )
}

export default WeatherIcon;