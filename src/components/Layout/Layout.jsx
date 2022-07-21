import React, { Fragment } from 'react'
import Skills from '../skills/Skills';
import Header from '../header/Header'
import HeroSection from '../hero-section/HeroSection';
import Portfolio from '../projects/portfolio';
import Contact from '../contact/Contact';
import Footer from '../footer/Footer';


function Layout() {
  return (
    <Fragment>
      <Header />
      <HeroSection />
      <Skills />
      <Portfolio />
      <Contact/>
      <Footer/>
    </Fragment>
  )
}

export default Layout