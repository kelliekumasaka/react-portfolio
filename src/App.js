import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Work from "./components/pages/Project/Work"
import Welcome from "./components/pages/Welcome/Welcome"

function App() {
  return (
    <div id="app">
      <Navbar/>
      <Welcome/>
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
