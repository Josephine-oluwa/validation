import React from 'react'
import HomeScreen from './Screen/HomeScreen'
import Page2 from './Screen/2'

import About from './Screen/About'
import Blogs from './Screen/Blogs'
import Reviews from './Screen/Reviews'
import Socials from './Screen/Socials'
import Projects from './Screen/Projects'
import Vision from './Screen/Vision'
import Why from './Screen/Why'
import AboutMe from './Screen/AboutMe'
import NewsLetter from './Screen/NewsLetter'

const Page = () => {
  return (
    <div>
        <HomeScreen/>
       
        
       
        <About/>
       <Vision/>
     
       <Why/>
       <AboutMe/>
       <NewsLetter/>
{/*       
        <Blogs/>
        <Reviews/> */}
    </div>
  )
}

export default Page