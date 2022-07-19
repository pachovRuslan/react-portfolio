import React, { Fragment } from 'react'
import Skills from '../skills/Skills';
import Header from '../header/Header'
import HeroSection from '../hero-section/HeroSection';


function Layout() {
  return (
 <Fragment>
    <Header/>
    <HeroSection/>
    <Skills/>
 </Fragment>
  )
}

export default Layout