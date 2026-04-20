import React from 'react'
import Navbar from './components/Navbar'
import Admin from './Pages/Admin/Admin'
 import { ToastContainer } from 'react-toastify';

const App = () => {
  return (
    <div>
      <Navbar/>
      <ToastContainer/>
      <Admin/>
    </div>
  )
}

export default App
