import React, { Fragment } from 'react'
import Skills from '../skills/Skills';
import Header from '../header/Header'
import HeroSection from '../hero-section/HeroSection';
import Projects from '../projects/Projects';


function Layout() {
  return (
 <Fragment>
    <Header/>
    <HeroSection/>
    <Skills/>
    <Projects/>
 </Fragment>
  )
}

export default Layout