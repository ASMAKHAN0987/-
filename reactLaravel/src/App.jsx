import { useState } from 'react'
import {createBrowserRouter,createRoutesFromElements, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import Dashboard from './components/Dashboard'
import Login from './components/Login'
import Home from './components/Home'
import authUser from './authUser'
import GuestLayout from './components/GuestLayout'
import AuthLayout from './components/AuthLayout'
import Registration from './components/Registration'
export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
        <Route path='/' element={<GuestLayout/>}>
        <Route path='login' element={<Login/>}/>
        <Route path='registration' element={<Registration/>}/>
        <Route path='Home' element={<Home/>}/>
        </Route>
        <Route path='/' element={<AuthLayout/>}>
        <Route path='Home' element={<Home/>}/>
        <Route path='dashboard' element={<Dashboard/>}/>
        </Route>
    </Route>
  )
)
function App() {
  const {getToken} = authUser()
  if(!getToken()){
    return <GuestLayout/>
  }
  return (
   <>
      <AuthLayout/> 
   </>
  )
}

export default App