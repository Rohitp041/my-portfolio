import React from 'react';
import './Content.css';
import ParticleHeaderBg from '../ParticlesBg/ParticlesHeader/ParticleHeaderBg';

/* ReactScroll */
import { Link } from 'react-scroll';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

const Content = () => (
    <div className="contenido">
        <ParticleHeaderBg/>
        <section className="inicio" id="inicio">
        
            <div className="titulo">
            
                <p data-aos="fade-up" data-aos-delay="600">
                    <FormattedMessage
                        id='greeting'
                        defaultMessage='Hello'
                    />
                </p>
                <h1 data-aos="fade-up" data-aos-delay="800">
                    <FormattedMessage
                        id='name'
                        defaultMessage='I am Rohit Patel'
                    />
                    
                </h1>
                <p data-aos="fade-up" data-aos-delay="1000">
                    <FormattedMessage
                        id='rol'
                        defaultMessage='Senior Software Engineer'
                    />
                </p>

                <div className="redes-sociales">
                    <a href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200"><i className="fab fa-linkedin"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800"><i className="fab fa-whatsapp"></i></a>
                    <a href="mailto:rohitp041@gmail.com" target="_blank" rel="noopener noreferrer"><i className=" fab fas fa-envelope"></i></a>
                </div>
                <div className="wrapper">
                    <a className="button" href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1200">
                        <div className="icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <span>Linkedin</span>
                    </a>
                    <a className="button" href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1800">
                        <div className="icon">
                            <i className="fab fa-whatsapp"></i>
                        </div>
                        <span>Whatsapp</span>
                    </a>
                    <a className="button" href="" target="_blank" rel="noopener noreferrer" data-aos="fade-up" data-aos-delay="1600">
                        <div className="icon">
                            <i className="fab fas fa-envelope"></i>
                        </div>
                        <span>Gmail</span>
                    </a>
                </div>

                <Link to="sobre-mi" href="#sobre-mi">
                    <div className="scroll-down"></div>
                </Link>
            </div>
        </section>
    </div>
);

export default Content;