import React, { useEffect, useState} from 'react';
import './WeatherInfo.css';
import WeatherIcon from '../weather_icon/WeatherIcon';
import CityInfo from '../city_info/CityInfo';
import WeatherDetails from '../weather_details/WeatherDetails';
import WeeklyWeatherDetails from '../weekly_weather_details/WeeklyWeatherDetails';

function WeatherInfo({cityName}){   
    const [city, setCity] = useState(cityName);
    
    useEffect(() => {
        setCity(cityName);}
    , [location.state]);
    
    return (
        <div className='weather-info'>
            <CityInfo cityName={city}></CityInfo>
            <WeatherDetails cityName={city}></WeatherDetails>
            <WeeklyWeatherDetails cityName={city}></WeeklyWeatherDetails>
        </div>
    )
}

export default WeatherInfo;