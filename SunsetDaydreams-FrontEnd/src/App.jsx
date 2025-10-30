import React from 'react'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import Cart from './pages/Cart'
import PlaceOrder from './pages/PlaceOrder'
import Product from './pages/Product'
import NavBar from './components/NavBar'
import Orders from './pages/Orders'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/place-order" element={<PlaceOrder />} />
        <Route path="/products/:productID" element={<Product />} />
      </Routes>

    </div>
  )
}

export default App