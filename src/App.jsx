import { useState } from 'react'
import { Outlet } from 'react-router-dom';

import './App.css'

import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  

  return (
    <>
    <Header/>
      <NavBar />
      <main className="mx-3">
        <Outlet />
      </main>
      <Footer/>
    </>
  )
}

export default App