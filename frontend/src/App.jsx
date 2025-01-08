import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import UserPage from './pages/UserPage'
import AdminPage from './pages/AdminPage'

function App() {
  return (
    <>
       <BrowserRouter>
       <Routes>
            <Route path="/" element={<UserPage/>}/>
            <Route path="/admin" element={<AdminPage/>}/>
        </Routes>
       </BrowserRouter>
  
    </>
  )
}

export default App
