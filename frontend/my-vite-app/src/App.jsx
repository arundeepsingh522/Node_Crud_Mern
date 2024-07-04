import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './screens/Dashboard'
import { Route, Router, RouterProvider, Routes, createBrowserRouter } from 'react-router-dom'
import SignUp from './screens/SignUp'
import Header from './components/Header'
import Footer from './components/Footer'
function App() {
  const router = createBrowserRouter([

    {path:'/',
      element:<><Header/><SignUp/></>}

  ]);
  return (
    
    <div className='w-full mt-32'>
    <RouterProvider router={router}/>

    </div>
   
    
  )
}
export default App
