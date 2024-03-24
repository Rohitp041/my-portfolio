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
import { FormattedMessage } from 'react-intl';


import RouterScrollTop from "./components/ScrollToTop/RouterScrollTop"
import Experience from './pages/Experience/ExperiencePage';
import Contact from './pages/Contact/ContactPage';
import ParticleHeaderBg from '../src/components/ParticlesBg/ParticlesHeader/ParticleHeaderBg';

function App() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 9000)
    }, [])
    return (
        <>
            <RouterScrollTop />
            {loading ? (
         <><section className="inicio" id="inicio">

                    <div className="titulo">

                        <p data-aos="fade-up" data-aos-delay="600">
                            <FormattedMessage
                                id='greeting'
                                defaultMessage='Welcome' />
                        </p>
                        <h1 data-aos="fade-up" data-aos-delay="800">
                            <FormattedMessage
                                id='name'
                                defaultMessage='To the Space of creativity' />

                        </h1>
                        <p data-aos="fade-up" data-aos-delay="1000">
                            <FormattedMessage
                                id='rol'
                                defaultMessage='&' />
                        </p>
                        <p data-aos="fade-up" data-aos-delay="1000">
                            <FormattedMessage
                                id='rol'
                                defaultMessage='Professionalism in my portfolio...' />
                        </p>
                    </div>
                </section><ParticleHeaderBg /></>
                    
               
            ) :
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
