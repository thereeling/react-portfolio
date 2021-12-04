import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

function App() {
  const [currentPage, handlePageChange] = useState('About');

  const renderPage = () => {
    switch (currentPage) {
      case 'Portfolio':
        return <Portfolio/>;
        
      case 'Contact':
        return <Contact/>;

      case 'Resume':
        return <Resume/>;
        
      default: return <About/>;
    }
  };
  return (
    <div>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <div>
        {
          renderPage()
        }
      </div>
    </div>  

  );
}

export default App;
