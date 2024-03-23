
import '../../pages/Contact/ContactPage.css'
/* TypedJs */
import Typical from 'react-typical';

/* Multi idioma */
import { FormattedMessage } from 'react-intl';

import React, { useState} from "react";
import SnackBar from 'my-react-snackbar';

const FORMSPARK_URL = "https://submit-form.com/EhBg2dmWa";

function Contact() {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [open, setOpen] = useState(false);
  const [disable, setDisable] = useState(false);

  //   const notify = () => toast.success("Here is your toast.");

  const onSubmit = async (e) => {
    e.preventDefault();
    setDisable(true);
    await fetch(FORMSPARK_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        message,
      }),
    });
    setOpen(true);
    setEmail("");
    setMessage("");
    setTimeout(setDisable(false), 2000);
  };

  return (
    
  








    <section id="contactos" class="contactos">
        <div class="container" data-aos="fade-up">
            
            <h2 className="heading">
                <FormattedMessage
                    id='contact'
                    defaultMessage='Contact' />
            </h2>
            <div className="columns" data-aos="fade-up" data-aos-delay="200">
               
            <div id="contact-form">
            
                <form onSubmit={onSubmit}>
                    <input
                        id="email"
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required />
                    <textarea
                        id="message"
                        type="text"
                        name="message"
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    ></textarea>
                    <button type="submit" disabled={disable}>
                        Submit
                    </button>
                </form>
            </div>
        </div>
        <SnackBar
            open={open}
            message={"Your Message is sent!"}
            position="bottom-left"
            type="success"
            yesLabel="Ok"
            timeout={2000}
            onYes={() => {
                setOpen(false);
            } }
            closeOnClick={true} />
  


            <h3 className="titulo" data-aos="fade-left" data-aos-delay="300">
                <FormattedMessage
                    id='contact-info'
                    defaultMessage='Contact me by: ' />
                <Typical
                    className="site-contacto"
                    loop={Infinity}
                    wrapper="b"
                    steps={[
                        'Gmail', 1500,
                        'WhatsApp', 1500,
             
                        'Linkedin', 1500,
               
                    ]} />

            </h3>

            <div className="icons">
                <a href="mailto:rohitp041@gmail.com" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        
                        <span className="fab fas fa-envelope"></span>
                    </div>
                    <div className="text">
                        Gmail
                    </div>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                    
                        <span className="fab fa-whatsapp"></span>
                    </div>
                    <div className="text">
                        WhatsApp
                    </div>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" data-aos="zoom-in">
                    <div className="layer">
                        <span></span>
                        <span></span>
                        <span></span>
                        
                        <span className="fab fa-linkedin-in"></span>
                    </div>
                    <div className="text">
                        Linkedin
                    </div>
                </a>
                </div>         </div>    
        </section>
);
                }
export default React.memo(Contact);