import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Aboutme from './pages/Aboutme'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Contacts from './pages/Contacts'
import Blogs from './pages/Blogs'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className="bg-white dark:bg-gray-800 text-black dark:text-white min-h-screen">
      <Routes>
        <Route path='/' element={<Home/>}  />
        <Route path='/about-me' element={<Aboutme />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contacts/>}/>
        <Route path='/blogs' element={<Blogs/>}/>
      </Routes>
      <Footer />
      
    </div>
  )
}

export default App
