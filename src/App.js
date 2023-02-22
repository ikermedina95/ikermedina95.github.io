import { Routes, Route }  from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import "./utils/scss/base.scss";
import Header from './layout/header/header';
import Home from './pages/home';
import Page404 from './pages/page-404';
import Information from './components/Information/information';
import Footer from './layout/footer/footer';
import { faCirclePlay, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import AvisoDePrivacidad from './pages/aviso-de-privacidad';
import TerminosYCondiciones from './pages/terminos-y-condiciones';

library.add(faPhone, faInstagram, faWhatsapp, faCirclePlay, faEnvelope);

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/aviso-de-privacidad" element={<AvisoDePrivacidad />} />
        <Route exact path="/terminos-y-condiciones" element={<TerminosYCondiciones />} />
        <Route path="/*" element={<Page404 />} />
      </Routes>
      <Information id="contacto"/>
      <Footer />
    </>
  );
}

export default App;
