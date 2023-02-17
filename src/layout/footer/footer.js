import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container } from "react-bootstrap";
import { HashLink as Link } from 'react-router-hash-link';
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-4 pb-6">
      <Container>
        <div className="row">
          <div className="col-12 col-lg-4 offset-1 d-lg-flex justify-content-lg-start footer-col-1">
            <p className="h4 mb-3 mb-lg-5">CIRAT RPBI de Monterrey</p>
            <p className="mb-3 mb-lg-5">Quinta Avenida 304, Parque Industrial Escobedo, 66062 Cd Gral Escobedo, N.L.</p>
            <p className="mb-3 mb-lg-5">Teléfono: <a href='tel:8110821316'>81-10-82-13-16</a></p>
            <p className="mb-3 mb-lg-5">Encuéntranos en <a href='/#'>Maps!</a></p>
          </div>
          <div className="col-12 col-lg-4 offset-1 d-lg-flex justify-content-lg-start footer-col-2">
            <Link to='/aviso-de-privacidad#aviso-de-privacidad' className="footer-menu mb-3 mb-lg-5">Aviso de Privacidad</Link>
            <a href='/#b' className="footer-menu mb-3 mb-lg-10">Términos y Condiciones</a>
            <div className="icon-wrapper">
              <a href="https://wa.me/+5218110821316" className="anchor-icon"><FontAwesomeIcon icon={['fab', 'whatsapp']} /></a>
              <a href="https://www.instagram.com/ciratrpbi/" className="anchor-icon"><FontAwesomeIcon icon={['fab', 'instagram']} /></a>
              <a href='tel:8110821316' className="anchor-icon"><FontAwesomeIcon icon={['fas', 'phone']} /></a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer;