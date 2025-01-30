import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import WhatWeDo from './pages/WhatWeDo';
import Partners from './pages/Partners';
import ContactUs from './pages/ContactUs';
import AboutUs from './pages/AboutUs';
import './styles.css';

const App: React.FC = () => {
    return (
        <Router>
            <header className='App-header'>
                <div className="logo-container">
                    <img src="./logo.png" alt="Logo" className="logo" />
                </div>
                <nav>
                    <ul className="nav-list">
                    <li><Link to="/">About Us</Link></li>
                        
                        {/* <li><Link to="/partners">Partners</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/aboutus">About Us</Link></li> */}
                    </ul>
                </nav>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<AboutUs />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/partners" element={<Partners />} />
                    <Route path="/contact" element={<ContactUs />} />
                    {/* <Route path="/aboutus" element={<AboutUs />} /> */}
                </Routes>
            </main>
            <footer>
                <p>&copy; {new Date().getFullYear()} Intern Partner. All rights reserved.</p>
            </footer>
        </Router>
    );
};

export default App;