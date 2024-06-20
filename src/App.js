import React from 'react';
import Header from './components/Header';
import Works from './components/Works';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Works />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;