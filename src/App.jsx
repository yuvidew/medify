import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './NavBar/Header'
import { FAQ } from './components/ui/FAQ'
import { Download } from './components/ui/Download'
import { Footer } from './components/ui/Footer'
const  BookingPage  = lazy(() => import( './Bookings/BookingPage'))
const  DoctorsPage = lazy(() => import('./Docters/DoctorsPage'))
const  HomePage   = lazy(() => import('./Home/HomePage'))

const App = () => {
    return (
      <Suspense fallback = {<p className=' text-center'>Loading..</p>}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element = {<HomePage/>} />
          <Route path='/doctors' element = {<DoctorsPage/>} />
          <Route path='/bookings' element = {<BookingPage/>} />
        </Routes>
      <FAQ/>
      <Download/>
      <Footer/>
      </BrowserRouter>
      </Suspense>
    )
}

export default App