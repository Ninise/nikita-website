import React from 'react';
import './App.css';
import { About } from './components/about/About';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Qualification } from './components/qualification/Qualification';

export const App = () => {
  return (
    <div >
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
        <Services />
        <Qualification />
      </main>
    </div>
  );
}
