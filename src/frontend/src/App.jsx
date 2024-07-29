import React from 'react'

import Navbar from './components/Navbar';
import Hero from './components/Hero';

export default function App() {
  
  return (
    <div className='w-full h-screen bg-zinc-800 text-white'>
      <Navbar />
      <Hero />
    </div>
  )
}