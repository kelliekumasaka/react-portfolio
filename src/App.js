import React from 'react';
import Connect from './pages/Connect/Connect'
import Navbar from './components/Navbar';
import Work from "./pages/Project/Work"
import Welcome from "./pages/Welcome/Welcome"
import Footer from './pages/Footer/Footer';

function App() {
  return (
    <div id="app">
      <Navbar/>
      <Welcome/>
      <Work/>
      <Connect/>
      <Footer/>
    </div>
  );
}

export default App;
