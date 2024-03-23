import React, { useState, useEffect } from 'react';
import {
    Route,
    Routes,
} from "react-router-dom";
import './App.css';

/* Pages */
import Home from "./pages/Home/HomePage";
import About from "./pages/About/AboutPage";
import Services from "./pages/Service/ServicesPage";


import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"
import Experience from './pages/Experience/ExperiencePage';
import Contact from './pages/Contact/ContactPage';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, [])
    return (
        <>
            <RouterScrollTop />
            {
                loading ?

                    <div className='loading-pag'>
                        <div className="loader">
                            <span>=(PatelRohit)=></span>
                            <span>=(PatelRohit)=></span>
                        </div>
                    </div>

                    :

                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route exact path="/about" element={<About />}></Route>
                        <Route exact path="/service" element={<Services />}></Route>
                        <Route exact path="/experince" element={<Experience />}></Route>
                        <Route exact path="/contact" element={<Contact />}></Route>
                    </Routes>

            }

        </>
    )
}

export default App
