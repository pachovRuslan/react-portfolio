import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { init } from 'ityped';
import './skills.css';
import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';


function Skills() {
  const [skillsFilter, setSkillsFilter] = useState('HARDSKILLS');
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
            <div className="skills_btns d-flex flex-column align-items-center">
              <button
                className="skills_btn skills_btn-active"
                onClick={() => setSkillsFilter('HARDSKILLS')}>
                {' '}
                Hard skills
              </button>
              <button className="skills_btn" onClick={() => setSkillsFilter('SOFTSKILLS')}>
                {' '}
                Soft skills
              </button>
            </div>
          </Col>
          <Col lg="8" md="9">
            {skillsFilter === 'HARDSKILLS' && <HardSkills />}
            {skillsFilter === 'SOFTSKILLS' && <SoftSkills/>}
           
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
