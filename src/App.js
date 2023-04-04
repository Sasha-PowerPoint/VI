import { useState, useEffect } from 'react';
import './App.css';
import { useLocation } from 'react-router-dom';
import { ModalComp } from './Modal';

function App() {
  

  const location = useLocation();

  return (
    <>
   <iframe src={`https://avito.ru${location.pathname}`} ></iframe>
    <ModalComp />
   </>
  );
}

export default App;
