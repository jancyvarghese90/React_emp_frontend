import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Dashboard from './component/Dashboard'
import Empform from './component/Empform'
import Main from './component/Main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
    <Routes>

<Route path='/' element={<Main child={<Dashboard/>}/>}></Route>
<Route path='/empform' element={<Main child={<Empform/>}/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
