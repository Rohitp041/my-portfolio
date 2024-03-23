import "../../App.css"
import HeaderPage from '../../components/Header/HeaderPage';
import Footer from '../../components/Footer/Footer';
import ParticleBackground from "../../components/ParticlesBg/ParticleBackground";
import ScrollToTop from '../../components/ScrollToTop/ScrollToTop';
import Contactos from '../../components/Main/Contact'
export const Contact= () => {
    return (
<div>
<HeaderPage/>

    <ParticleBackground />

    <main className="contact-page">
    <Contactos />


  </main> 

  <ScrollToTop />

<Footer />

  </div>
      );
}
    export default Contact;