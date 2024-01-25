import React from 'react';
import './WeatherDetails.css';
import WeatherShortText from './weather_shorttext/WeatherShortText';
import HourlyWeatherDetails from './hourly_weather_details/HourlyWeatherDetails';
function WeatherDetails({cityName}){

    let city = cityName;
    return(
        <div className='weatherDetails'>
            <hr />
            <HourlyWeatherDetails cityName={city}></HourlyWeatherDetails>   
            <hr />
        </div>
    )
}

export default WeatherDetails;