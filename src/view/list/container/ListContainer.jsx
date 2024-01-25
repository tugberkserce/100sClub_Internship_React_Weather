import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './ListContainer.css';

function ListContainer(props) {
  const [city, setCity] = useState('');
  const [savedCities, setSavedCityName] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state) {
      setCity(location.state);
    }
  }, [location.state]);

  useEffect(() => {
    if (city) {
      setSavedCityName((prevCities) => {
        const newCities = [...prevCities, city];
        localStorage.setItem('savedCities', JSON.stringify(newCities));
        return newCities;
      });
    }
  }, [city]);

  useEffect(() => {
    const storedCities = localStorage.getItem('savedCities');
    if (storedCities) {
      setSavedCityName(JSON.parse(storedCities));
    }
  }, []); // Empty dependency array to run only once on mount

  if (!savedCities.length) {
    return (
      <div className="list-container">
        <div className="listed-cities-container">No cities added</div>
      </div>
    );
  }

  return (
    <div className="list-container">
      {savedCities.map((cityName, index) => (
        <div className="listed-cities-container" key={index}>
          {cityName}
          <button>
            <span className="material-icons">Look</span>
          </button>
        </div>

      ))}
    </div>
  );
}

export default ListContainer;
