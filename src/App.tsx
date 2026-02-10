
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ValueProp from './components/ValueProp';
import Services from './components/Services';
import Workflow from './components/Workflow';
import SelectedWork from './components/SelectedWork';
import Process from './components/Process';
import Team from './components/Team';
import Testimonial from './components/Testimonial';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
  <div>
    <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
    <Hero />
    <ValueProp />
    <Services />
    <Workflow />
    <SelectedWork />
    <Process />
    <Team />
    <Testimonial />
    <ContactForm />
    <Footer />
  </div>
);



};

export default App;
