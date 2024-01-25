import React, { useState, useEffect } from 'react';
import './CityInfo.css';


function CityInfo({cityName}) {
    const [cityData, setCityData] = useState({});
    const endPoint = "http://api.weatherapi.com/v1/";
    const apiKey = "de6cd1dcf0ea426eb2b155445241501";
    let whatWeWant = "current.json";
    let city = cityName;
    
     useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${endPoint}${whatWeWant}?key=${apiKey}&q=${city}&aqi=no`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCityData(data);
            } catch (error) {
                console.error('Error:', error.message);
            }
        };

        fetchData();
    }, []);

    if (!cityData || !cityData.location || !cityData.current) {
        return null;
    }

    return (
        <div className="city-info">
            <h1 className="city-name">{cityData.location.name}</h1>
            <h2 className="city-weather-celsius">{cityData.current.temp_c} &#176;</h2>
            <h3 className="city-weather-status">{cityData.current.condition.text}</h3>
            <img src={cityData.current.condition.icon} alt="" />
        </div>
    );
}

export default CityInfo;