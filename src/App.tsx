import { useState } from 'react'
import reactLogo from './assets/react.svg'
import classes from './App.module.scss'

import Navbar from './components/navbar/navbar';

function App() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar/>
    </div>
  )
}

export default App
