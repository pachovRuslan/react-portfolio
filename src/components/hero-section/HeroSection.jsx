import React, {useRef, useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import { init } from 'ityped';
import './hero-section.css';
import hero from '../../assests/img/hero.png'

function HeroSection() {

  const textRef = useRef()
  useEffect(()=> {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: [
        'Ruslan Pachkov',
        'frontend developer'
      ]
    })
  }, [])

  return (
    <section className='hero_section' id='home'>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_content">
              <p>Welcome to my world!</p>
             
              <h2 className='hero_title mb-4'>
                I'm <span ref={textRef}></span>
                </h2>
              <p className='mb-3'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque dignissimos voluptatum dicta natus ut ipsam? Quod facere possimus, earum dolore architecto repellendus ab laborum distinctio? Dolor eligendi maiores nesciunt non.</p>
            <div className=" mt-5 hero_btns d-flex align-items-center gap-4">
                <button className="hero_btn"><a href="/#">Hire Me</a></button>
                <button className="hero_btn">Contact</button>
            </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <div className="hero_img">
                <img src={hero} alt="hero" className='w-100' />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default HeroSection;
