import React from 'react';
import './App.css';
import { About } from './components/about/About';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Skills } from './components/skills/Skills';

export const App = () => {
  return (
    <div >
      <Header />
      <main className='main'>
        <Home />
        <About />
        <Skills />
      </main>
    </div>
  );
}
