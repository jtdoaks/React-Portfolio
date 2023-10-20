import { useState } from 'react'
import { Outlet } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css'
import './index.css'

import NavBar from "./components/NavBar";

import Footer from "./components/Footer";

function App() {
  

  return (
    <>
   
      <NavBar />
      <main className="main-outlet">
        <Outlet />
      </main>
      <Footer/>
    
    </>
      
  )
}

export default App