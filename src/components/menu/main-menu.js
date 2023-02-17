import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import dataMenu from '../../utils/api/menu.json';
import { HashLink as Link } from 'react-router-hash-link';

const MainMenu = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="flex-grow-0" id="responsive-navbar-nav">
        <Nav className="me-auto main--menu">
          {dataMenu.menu.map((data) => {
            return <Link key={data.id} to={ data.link }> {data.name}</Link>
          })}
        </Nav>
      </Navbar.Collapse>
    </>
  )
}

export default MainMenu