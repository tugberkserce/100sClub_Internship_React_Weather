import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Container from './view/main/components/container/Container'
import Navbar from './view/main/components/navbar/Navbar'
import {  BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AddContainer from './view/Add/container/AddContainer';
import ListContainer from './view/list/container/ListContainer';

/* <Route path="/list" element={<ListContainer />} /> */

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/add" element={<AddContainer />} />
          <Route path="/list" element={<ListContainer />} />
        </Routes>
        <Navbar />
      </Router>
    </>
  );
}

export default App
