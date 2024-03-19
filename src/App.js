import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Aboutme from './pages/Aboutme'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about-me' element={<Aboutme />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contacts/>}/>
      </Routes>
      
    </div>
  )
}

export default App
