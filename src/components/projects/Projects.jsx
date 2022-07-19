import React, { useRef, useEffect } from 'react';
import { init } from 'ityped';
import './projects.css';
import { Container, Row, Col } from 'reactstrap';

function Projects() {
  const projects = [
    {
      title: 'React pizza v2',
      discription: 'discription',
      image: '/pizza.png',
    },
    {
      title: 'Social network',
      discription: 'discription',
      image: '/sn.png',
    },
    {
      title: 'React sneaker shop',
      discription: 'discription',
      image: '/sneaker.png',
    },
    {
      title: 'Next project',
      discription: 'discription',
      image: '/4.png',
    },
  ];
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ['portfolio'],
    });
  }, []);
  return (
    <section id="projects">
      <Container>
        <div className="portfolio_title">
          <h2>
            My <span ref={textRef}></span>
          </h2>
        </div>
        <div className="portfolio_wrapper d-flex gap-2">
          <div className="portfolio row align-items-start">
            {projects.map((item, index) => (
              <div className="portfolio_data col-6">
                <div className="portfolio_title">
                  <h4>{item.title}</h4>
                  <span>{item.discription}</span>
                  <div className="portfolio_image align-items-end">
                    <img src={item.image} alt="logo" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Projects;
