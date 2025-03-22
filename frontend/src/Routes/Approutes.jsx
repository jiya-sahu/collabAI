import React from 'react'
import { Routes,BrowserRouter,Route} from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Login from '../Pages/Login.jsx'
import SignUp from '../Pages/SignUp.jsx'
import Navbar from '../components/Navbar.jsx'

function routes() {
  return (

    <BrowserRouter>
     <Navbar/>
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default routes
