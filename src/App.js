import React from 'react';
import './App.css';
import { About } from './components/about/About';
import { Header } from './components/header/Header';
import { Home } from './components/home/Home';
import { Skills } from './components/skills/Skills';
import { Services } from './components/services/Services';
import { Qualification } from './components/qualification/Qualification';
import { Testimonials } from './components/testimotions/Testimonials';
import { Contact } from './components/contact/Contact';
import { Footer } from './components/footer/Footer';

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
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}
