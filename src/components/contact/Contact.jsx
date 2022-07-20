import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { init } from 'ityped';
import Form from '../form/Form';
import './contact.css';

function Contact() {
  
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: ['contacts'],
    });
  }, []);

  return (
    <section id="contact">
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <h2 className="contact_title">
              My <span ref={textRef}></span>
            </h2>
          </Col>
          <Col lg="6" md="6">
            <div className="contact_info-container d-grid align-items-center gap-2">
              <div className="single_info-box w-50">
                <h6>Address</h6>
                <p>Belarus, Polotsk</p>
              </div>
              <div className="single_info-box  w-50">
                <h6>Phone</h6>
                <p>+375295933838</p>
              </div>
              <div className="single_info-box  w-50">
                <h6>Email</h6>
                <p>cao-macao@mail.ru</p>
              </div>
            </div>
          </Col>
          <Col lg="6" md="6">
            <Form />
          </Col>
          <div className="social_links">
            <h6 className="mb-3">Connect with me:</h6>
            <span>
              <a href="/#">
                <i class="ri-telegram-line"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-linkedin-fill"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-facebook-fill"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-mail-line"></i>
              </a>
            </span>
            <span>
              <a href="/#">
                <i class="ri-github-line"></i>
              </a>
            </span>
          </div>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
