import React, { useEffect, useRef } from 'react';
import { Container } from 'reactstrap';
import './header.css';
const navLinks = [
  {
    display: 'Home',
    url: '#home',
  },
  {
    display: 'Skills',
    url: '#skills',
  },

  {
    display: 'Portfolio',
    url: '#portfolio',
  },
  {
    display: 'Contact',
    url: '#contact',
  },
];

function Header() {

  const headerRef = useRef(null);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add('header_shrink');
      } else {
        headerRef.current.classList.remove('header_shrink');
      }
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);

  return (
    <header className="header" ref={headerRef}>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between ">
          <div className="logo">
            <h5>mihib</h5>
          </div>
          <div className="nav_menu">
            <ul className="nav_list">
              {navLinks.map((item, index) => (
                <li className="nav_item" key={index}>
                  <a href={item.url}>{item.display}</a>
                </li>
              ))}
            </ul>
          </div>
          <div className="nav_right">
            <div className="header_btn">Let's Talk</div>
            <span className="mobile_menu">
              <i class="ri-menu-5-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
