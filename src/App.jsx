import { useState } from 'react'
import './App.css'
import Section1 from './components/section1'
import Section2 from './components/section2'

function App() {
  return (
    <div className='h-screen w-full bg-gray-100 flex justify-center items-center p-10 gap-10'>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default App
