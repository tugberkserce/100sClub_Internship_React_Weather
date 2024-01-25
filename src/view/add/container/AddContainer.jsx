import React, { useState } from 'react';
import { IoAdd, IoArrowForwardCircle, IoSearch } from 'react-icons/io5';
import SearchBar from '../search_bar/SearchBar';
import './AddContainer.css';
import {Link, useNavigate} from 'react-router-dom';

function AddContainer() {
  const endPoint = "http://api.weatherapi.com/v1/";
  const apiKey = "de6cd1dcf0ea426eb2b155445241501";
  let whatWeWant = "current.json";
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [cityName, setCityName] = useState('');
  const [countryName, setCountryName] = useState('');
  const [error, setError] = useState(false);

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const fetchCity = async () => {
    try {
      const response = await fetch(`${endPoint}${whatWeWant}?key=${apiKey}&q=${searchQuery}`);
      if (!response.ok) {
        setError(true);
        alert('Write at least 3 characters');
      } else {
        const data = await response.json();
        console.log(data);
        setError(false);
        setCityName(data.location.region);
        setCountryName(data.location.country);
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  const addToList = () => {
    let city_text = `${cityName}`;
    navigate('/list', {state: city_text});
  };

  const lookToCity = () => {
    let city = `${cityName}`;
    navigate('/', {state: city});
  };

  return (
    <div className="add-container">
      <div className="search">
        <SearchBar onSearch={handleSearch} />
        <button onClick={fetchCity}>
          <IoSearch />
        </button>
      </div>
      {error || !cityName || !countryName || (
        <div className='city-container'>
          <div className='city-container-name'>{cityName} / {countryName}</div>
          <div className='buttons'>
            <button onClick={addToList} className='add-to-list-button'>
              <IoAdd />
            </button>
            <button onClick={lookToCity} className='look-button'>
              <IoArrowForwardCircle />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddContainer;
