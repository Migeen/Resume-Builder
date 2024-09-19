import { useState } from 'react'
import './App.css'
import Section1 from './components/section1'
import Section2 from './components/section2'

function App() {

  return (
    <div className='h-full w-full bg-gray-100 flex flex-row p-10 gap-10'>
      <Section1/>
      <Section2/>
    </div>
  )
}

export default App
