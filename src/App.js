import './style/output.css';
// import Navbar from './components/Navbar';
import HomeContent  from './pages/HomeContent';
import About from './pages/About';
import SertifPage from './pages/SertifPage';
import React, {Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Fragment>
        <div className="h-20 flex justify-between items-center px-10">
          <h1 className="font-bold text-[32px] text-blue-donk">My Web</h1>
          <ul className="flex">
            <li className="pr-10 hover:text-[#E23E57] text-blue-donk">
              <Link to="/">Home</Link>
            </li>
            <li className="pr-10">
              <Link to="/about" className="hover:text-[#E23E57] text-blue-donk">About</Link>
            </li>
            <li >
              <Link to="/sertif" className="hover:text-[#E23E57] text-blue-donk">Sertificate</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" exact element={<HomeContent />} />
          <Route path='/about' element={<About />} />
          <Route path='/sertif' element={<SertifPage />} />
        </Routes>
      </Fragment>
    </Router>
    // <div className='font-dosis'>
    //   <header>
    //     <Navbar />
    //   </header>
    //   <main>
    //     <HomeContent />
    //   </main>
    // </div>
  );
}

export default App;
