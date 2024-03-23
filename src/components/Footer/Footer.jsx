import React from 'react';
import './Footer.css';

/* Multi idioma */
import {FormattedMessage} from 'react-intl';


const Footer = () =>{
    const start = 2023;
    const end = new Date().getFullYear();
    let copyrightString = start.toString();
    if (end > start) {
      copyrightString = `${start} - ${end}`;
    }

    return (
        <footer className="footer">
            <div className="site-footer">
                <div className="copyright">
                    <p>
                        <FormattedMessage
                            id='footer-info'
                            defaultMessage='Page created by Rohit Patel'
                        />
                    </p>
                    <p>&copy; {copyrightString}. All Rights Reserved.</p>
                </div>
                <div className="redes-sociales">
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    {/* <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a> */}
                    <a href="mailto:rohitp041@gmail.com" target="_blank" rel="noopener noreferrer"><i className=" fab fas fa-envelope"></i></a>
                    <a href="" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a>
                </div>
            </div>
        </footer>
    )
};

export default React.memo(Footer);