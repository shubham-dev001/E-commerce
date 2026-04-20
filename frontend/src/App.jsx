import './App.css'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Shop from './pages/Shop'
import ShopCategory from './pages/ShopCategory'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Fotter from './components/Fotter/Fotter'
import men_banner from "./assets/banner_mens.png"
import women_banner from "./assets/banner_women.png"
import kids_banner from "./assets/banner_kids.png"
import { ToastContainer } from 'react-toastify';


function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
            <ToastContainer />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kid" />} />
          <Route path='/product/:productId' element={<Product/>}/>         
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
        <Fotter />
      </BrowserRouter>

    </>
  )
}

export default App
