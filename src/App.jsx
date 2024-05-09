import { useState, useEffect } from 'react';
import './App.css';
import NavBar from './Components/NavBar';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Accomplishment from './Pages/Accomplishment';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Loader from './Components/loader';

function App() {
  const [page, setPage] = useState("Home");
  const [loader, setLoader] = useState(true); // Initially, set loader to true to display loader on mount
  const location = useLocation();

  // Show loader when navigation occurs
  const handleNavigation = () => {
    setLoader(true);
    // Simulate loading delay
    setTimeout(() => {
      setLoader(false);
    }, 1500); // Adjust delay as needed
  };

  // Check for navigation on location change
  useEffect(() => {
    handleNavigation();
  }, [location]);

  return (
    <div className='w-screen h-screen flex overflow-hidden bg-[#0A192F]'>
      <div className='w-auto h-auto'>
        <div className='w-60 bg-[#07101F] h-screen'>
          <NavBar page={page} />
        </div>
      </div>
      <div className='w-[calc(100vw-18rem)] overflow-hidden'>
        {loader ? ( // Conditionally render loader
          <div className='h-screen flex items-center bg-[#0A192F] text-white justify-center overflow-hidden'>
            <Loader />
          </div>
        ) : (
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/work' element={<Work />} />
            <Route path='/accomplishment' element={<Accomplishment />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        )}
      </div>
    </div>
  );
}

export default App;
