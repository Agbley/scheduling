import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Developers from './pages/Developers'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Profile from './pages/Profile'
import Appointment from './pages/Appointment'
import MyAppointment from './pages/MyAppointment'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
       <Navbar/>
      <Routes><Route path='/'element={<Home/>}/>
   
    <Route path='/'element={<Home/>}/>
    <Route path='developers'element={<Developers/>}/>
    <Route path='developers/:expert'element={<Developers/>}/>
    <Route path='/login'element={<Login/>}/>
    <Route path='/about'element={<About/>}/>
    <Route path='/contact'element={<Contact/>}/>
    <Route path='/profile'element={<Profile/>}/>
    <Route path='/appointment'element={<Appointment/>}/>
    <Route path='/my-appointment'element={<MyAppointment/>}/>
    <Route path='/appointment/:devId'element={<Appointment/>}/>
    </Routes>
    <Footer/>
    </div>
  )
}

export default App