import './App.css'
import Navbar from './components/Navbar'
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Layout from './pages/Layout'
import Skill from './pages/Skill'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div>
    <Navbar/>

    
    <Routes>
      <Route path='/' element={<Layout/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/skills' element={<Skill/>}></Route>
      <Route path='/projects' element={<Projects/>}></Route>
      <Route path='/contact' element={<Contact/>}></Route>
    </Routes>
    
    <Footer/>
    </div>
  )
}

export default App
