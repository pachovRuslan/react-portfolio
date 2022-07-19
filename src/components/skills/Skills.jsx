import React, { useState, useRef, useEffect } from 'react';
import './about.css';
import { Container, Row, Col } from 'reactstrap';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';
import { init } from 'ityped';

function Skills() {
  const [aboutFilter, setAboutFilter] = useState('HARDSKILLS');
  const textRef = useRef()
  useEffect(()=> {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: [
        'Skills'        
      ]
    })
  }, [])
  return (
    <section id="skills">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className='skills_title'>
            <h2>My <span ref={textRef}></span></h2>
            </div>
          </Col>
          <Col lg="4" md="3">
            <div className="about_btns d-flex flex-column align-items-center">
              <button
                className="about_btn about_btn-active"
                onClick={() => setAboutFilter('HARDSKILLS')}>
                {' '}
                Hard skills
              </button>
              <button className="about_btn" onClick={() => setAboutFilter('SOFTSKILLS')}>
                {' '}
                Soft skills
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {aboutFilter === 'HARDSKILLS' && <HardSkills />}
            {aboutFilter === 'SOFTSKILLS' && <SoftSkills/>}
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
