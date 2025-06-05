import React from 'react'
import { Routes,BrowserRouter,Route} from 'react-router-dom'
import Home from '../Pages/Home.jsx'
import Login from '../Pages/Login.jsx'
import SignUp from '../Pages/SignUp.jsx'
import Project from '../Pages/Project.jsx'

function routes() {
  return (

   
      <BrowserRouter>
        
        <Routes>

            <Route path='/' element={<Home/>}/>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/project' element={<Project/>}></Route>
        </Routes>
      </BrowserRouter>
  )
}

export default routes
