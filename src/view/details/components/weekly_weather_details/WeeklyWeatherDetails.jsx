import DayDetails from "./day_details/DayDetails";
import './WeeklyWeatherDetails.css';
import React, {useState, useEffect} from "react";


function WeeklyWeatherDetails() {
    const [weeklyData, setWeeklyData] = useState({});
    const endPoint = "http://api.weatherapi.com/v1/";
    const apiKey = "de6cd1dcf0ea426eb2b155445241501";
    let whatWeWant = "forecast.json";
    let city = "Istanbul";

    useEffect(() => {
        const getData = async () => {
          try {
            const response = await fetch(
              `${endPoint}${whatWeWant}?key=${apiKey}&q=${city}&days=7&agi=no&alerts=no`
            );
            const data = await response.json();
            setWeeklyData(data);
          } catch (error) {
            console.error("Error fetching weather data:", error);
          }
        };
    
        getData();
      }, []);
    
      if (!weeklyData.forecast || !weeklyData.forecast.forecastday) {
          return null;
      }

     const weeklyForecast = weeklyData.forecast.forecastday;


    return (
    <div className="weeklyWeatherDetails">
        <span className="text">
            Next 7 Days
        </span>
        <hr />
        <DayDetails data={weeklyForecast[0]}></DayDetails>
        <hr />
        <DayDetails data={weeklyForecast[1]}></DayDetails>
        <hr />
        <DayDetails data={weeklyForecast[2]}></DayDetails>
        <hr />
        <DayDetails data={weeklyForecast[3]}></DayDetails>
        <hr />
        <DayDetails data={weeklyForecast[4]}></DayDetails>
        <hr />
        <DayDetails data={weeklyForecast[5]}></DayDetails>
        <hr />
        <DayDetails data={weeklyForecast[6]}></DayDetails>
        <hr />
    </div>)
}

export default WeeklyWeatherDetails;