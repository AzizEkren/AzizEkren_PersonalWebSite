import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SocialIcons from './components/SocialIcons'
import About from './components/About'
import Education from './components/Education'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  const [currentPage, setCurrentPage] = useState('Home');
  
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }
  
  
  const renderPage = () => {
    switch(currentPage) {
      case 'About':
        return <About />;
      case 'Education':
        return <Education />;
      case 'Projects':
        return <Projects />;
      case 'Skills':
        return <Skills />;
      case 'Contact':
        return <Contact />;
      default:
        return null;
    }
  }
  
  return (
    <div className="app">
      <div className="center-content">
        {currentPage === 'Home' && <Home />}
        <Navbar onPageChange={handlePageChange} activePage={currentPage} />
        {currentPage !== 'Home' && (
          <div className={currentPage === 'About' ? "fullpage-container page-container" : "section-container page-container"}>
            {renderPage()}
          </div>
        )}
        {currentPage === 'Home' && <SocialIcons />}
      </div>
    </div>
  )
}

export default App
