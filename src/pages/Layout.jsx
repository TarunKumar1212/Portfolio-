import React from 'react'
import Home from './Home'
import About from './About'
import Skill from './Skill'
import { useEffect } from 'react'
import Projects from './Projects'
import Contact from './Contact'

function Layout() {

    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <div>
      <Home/>
      <About/>
      <Skill/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Layout
