import React from 'react';
import Footer from './pages/Footer/Footer'
import Navbar from './components/Navbar';
import Work from "./pages/Project/Work"
import Welcome from "./pages/Welcome/Welcome"

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
