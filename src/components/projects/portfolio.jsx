import React, { useRef, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { init } from 'ityped';
import img1 from '../../assests/img/pizza.png';
import img2 from '../../assests/img/sn.png';
import img3 from '../../assests/img/sneaker.png';
import './portfolio.css'

const portfolioData = [
    {
        imgUrl: img1,
        title: 'React Pizza',
        urlPrev: '#',
        urlGit: '#'
    },
    {
        imgUrl: img2,
        title: 'Social Network',
        urlPrev: '#',
        urlGit: '#'
    },
    {
        imgUrl: img3,
        title: 'React Sneker Shop',
        urlPrev: '#',
        urlGit: '#'
    },

]

const Portfolio = () => {
    const textRef = useRef();
    useEffect(() => {
        init(textRef.current, {
            backDelay: 1500,
            showCursor: true,
            strings: ['portfolio'],
        });
    }, []);
    return (
        <section id="portfolio">
            <Container className='portfolio'>

                <Row>
                    <Col lg="12" className="portfolio_top mb-5">
                        <div className="portfolio_title">
                            <h2>
                                My <span ref={textRef}></span>
                            </h2>
                        </div>
                    </Col>

                    {portfolioData.map((item, index) => <Col lg='4' md='6' sm='6'>
                        <div className="portfolio_card">
                            <div className="portfolio_img">
                                <img src={item.imgUrl} alt="portfolio" className='w-100' />
                            </div>
                            <div className="portfolio_content">
                                <h5>{item.title}</h5>
                                <a href={item.urlPrev}>View live demo</a>
                                <a href={item.urlGit}>View code</a>
                            </div>
                        </div>
                    </Col>)

                    }


                </Row>
            </Container>
        </section>
    );
};
export default Portfolio;