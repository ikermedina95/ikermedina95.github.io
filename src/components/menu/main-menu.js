import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import dataMenu from '../../utils/api/menu.json';

const MainMenu = () => {
  return (
    <>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="flex-grow-0" id="responsive-navbar-nav">
        <Nav className="me-auto main--menu">
          {dataMenu.menu.map((data) => {
            return <a key={data.id} href={data.link}>{data.name}</a>
          })}
        </Nav>
      </Navbar.Collapse>
    </>
  )
}

export default MainMenu