import React from 'react'

// import Cursor from './components/Cursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  
  return (
    <div className='w-full h-screen bg-black text-white'>
      <Navbar />
      <Hero />
      {/* <Cursor /> */}
    </div>
  )
}