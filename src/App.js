import React from 'react';
import Connect from './pages/Connect/Connect';
import Navbar from './components/Navbar';
import Project from "./pages/Project/Project";
import Welcome from "./pages/Welcome/Welcome";
import Footer from "./pages/Footer/Footer";

function App() {
  return (
    <div id="app">
      <Navbar/>
      <Welcome/>
      <Project/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
