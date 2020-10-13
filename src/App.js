import React from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main'; 
import Features from './components/Features/Features';
import Footer from './components/Footer/Footer';
import Calendar from './components/Calendar/Calendar'

import './style.css'; // импортируем стили

function App() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Footer />
      <Calendar />
    </>
  );
}

export default App;
