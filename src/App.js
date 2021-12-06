import React, { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Footer from "./components/Footer";


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
    <div className='page-container'>
    <div className='content-wrap'>
      <Header currentPage={currentPage} handlePageChange={handlePageChange}/>
      <main className='container'>
        {
          renderPage()
        }
      </main>
    </div>
      <Footer />
    </div>  

  );
}

export default App;
