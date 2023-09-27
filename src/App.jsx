import { useState } from 'react'
import { Outlet } from 'react-router-dom';

import './App.css'

import NavBar from "./components/NavBar";

import Footer from "./components/Footer";

function App() {
  

  return (
    <>
    
      <NavBar />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App