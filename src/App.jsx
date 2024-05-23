import React, { Suspense, lazy } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Header } from './NavBar/Header'
const  HomePage   = lazy(() => import('./Home/HomePage'))

const App = () => {
    return (
      <Suspense fallback = {<p className=' text-center'>Loading..</p>}>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element = {<HomePage/>} />
        </Routes>
      </BrowserRouter>
      </Suspense>
    )
}

export default App