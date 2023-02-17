import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Menu from '../../components/menu/menu';
import { ReactComponent as Brand } from '../../assets/icons/logo.svg';

const Header = () => {

  const [scrollDir, setScrollDir] = useState("initial");

  useEffect(() => {
    const threshold = 0;
    let lastScrollY = window.pageYOffset;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      if (scrollY < 10) {
        setScrollDir("initial");
      } else {
        if (Math.abs(scrollY - lastScrollY) < threshold) {
          ticking = false;
          return;
        }

        setScrollDir(scrollY > lastScrollY ? "hide" : "show");
      }

      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDir]);


  return (
    <header>
      <Navbar collapseOnSelect expand="lg" bg="white" variant="white" className={scrollDir}>
        <Container>
          <div className="row justify-content-lg-center">
            <div className="col-lg-10 nav-wrapper">
              <a href="#home">
                <Brand style={{ width: '170' }} />
              </a>
              <Menu />
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;