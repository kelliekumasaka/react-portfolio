import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import About from "./components/About";
import Work from "./components/Work";
import Welcome from "./components/Welcome/Welcome"

function App() {
  return (
    <div id="app">
      <Navbar/>
      <Welcome/>
      {/* <About/> */}
      <Work/>
      <Footer/>
    </div>
  );
}

export default App;
