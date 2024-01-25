import "./HourlyWeatherDetails.css";
import React, {useState, useEffect} from "react";

function HourlyWeatherDetails() {
    const [hourlyData, setHourlyData] = useState({});
    const endPoint = "http://api.weatherapi.com/v1/";
    const apiKey = "de6cd1dcf0ea426eb2b155445241501";
    let whatWeWant = "forecast.json";
    let city = "Istanbul";

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              `${endPoint}${whatWeWant}?key=${apiKey}&q=${city}&days=1&agi=no&alerts=no`
            );
            const data = await response.json();
            setHourlyData(data);
          } catch (error) {
            console.error("Error fetching weather data:", error);
          }
        };
    
        getData();
      }, []);
    
      const renderHourlyDetails = () => {
        if (!hourlyData.forecast || !hourlyData.forecast.forecastday) {
          return null;
        }
    
        const hourlyForecast = hourlyData.forecast.forecastday[0].hour;
        const specificHours = [0, 4, 8, 12, 16, 20];
        const filteredHourlyData = hourlyForecast.filter(
          (hour) => specificHours.includes(new Date(hour.time).getHours())
        );


        return filteredHourlyData.map((hour, index) => (
          <div key={index} className="hourly">
            <span>{hour.time.slice(11,16)}</span>
            <img
              className="weatherIcon"
              src={`http:${hour.condition.icon}`}
              alt="weather-icon"
            />
            <span>{hour.temp_c} °C</span>
          </div>
        ));
      };

      return <div className="hourlyWeatherDetails">{renderHourlyDetails()}</div>;

}

export default HourlyWeatherDetails;