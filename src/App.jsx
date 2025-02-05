import { useState, useEffect } from 'react';
import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Accomplishment from './Pages/Accomplishment';
import Work from './Pages/Work';
import Contact from './Pages/Contact';
import Loader from './Components/loader';
import NavBar from './Components/NavBar';
import { Menu, X } from 'lucide-react';

function App() {
  const [page, setPage] = useState("Home");
  const [loader, setLoader] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const handleNavigation = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 1500);
  };

  useEffect(() => {
    handleNavigation();
  }, [location]);

  return (
    <div className="w-screen h-screen flex overflow-hidden bg-[#0A192F]">
      <div className="hidden lg:block w-60 bg-[#07101F] h-screen">
        <NavBar page={page} setPage={setPage} />
      </div>
      <div className='w-full lg:w-[calc(100vw-15rem)] bg-[#07101F] h-screen flex flex-col'>
        <div className="lg:hidden w-full bg-[#07101F] p-4 flex justify-between items-center text-white h-16 z-50">
          <h1 className="text-lg font-bold" onClick={() => window.open("https://leetcode.com/u/legitcoder15/", "_blank")}>LeGiTCoDeR</h1>
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-2xl">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        {isMenuOpen && (
          <div className="lg:hidden fixed top-0 left-0 h-16 w-full bg-[#07101F] z-40 flex flex-col items-center pt-20 text-white">
            <NavBar page={page} setPage={setPage} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        )}
        <div className={`w-full lg:w-[calc(100vw-15rem)] lg:h-screen flex-1 ${isMenuOpen ? "hidden" : "block"} overflow-y-auto `}>
          {loader ? (
            <div className="lg:h-screen h-full flex items-center justify-center bg-[#0A192F] text-white overflow-hidden">
              <Loader />
            </div>
          ) : (
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/accomplishment" element={<Accomplishment />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          )}
        </div>
      </div>
    </div>
  );
}
export default App;