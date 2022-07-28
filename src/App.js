import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';


// const burger = document.querySelector('#burger');
// const menu = document.querySelector('#menu');

// burger.addEventListener('click', () => {
//     if (menu.classList.contains('hidden')){
//         menu.classList.remove('hidden');
//     } else {
//         menu.classList.add('hidden')
//     }
// })

const App = () => {
  return (
    <>
    <Navbar />
    <Hero />
    </>  
  );
};

export default App;