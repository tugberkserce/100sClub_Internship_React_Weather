import React, { useEffect, useState } from 'react';
import './Container.css';
import WeatherInfo from "/src/view/details/components/weather_info/WeatherInfo"
import Navbar from "/src/view/main/components/navbar/Navbar";
import { useLocation } from 'react-router-dom';


function Container(){
    const location = useLocation();
    const [city, setCity] = useState(location.state);
    
    console.log(location.state);

    useEffect(() => {
        setCity(location.state);}
    , [location.state]);

    return(
        <div className="container">
            <WeatherInfo cityName = {city}></WeatherInfo>
        </div>
    )
}

export default Container;