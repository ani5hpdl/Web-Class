import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Register from './pages/Register'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Headers from './components/Headers'
import Footers from './components/Footers'
import Login from './pages/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Toaster/>
      <Headers/>
      <Routes>
        <Route path="/" element={""} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/contact" element={"s"} />  
      </Routes>
      <Footers/>
    </Router>
  )
}

export default App
