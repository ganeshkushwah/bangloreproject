import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Shoping from './AppData/components/Shoping'
import Navbar from './AppData/components/Navbar'
import SeeDetail from './AppData/components/SeeDetail'
import Footer from './AppData/components/Footer'
import ShoppingCart from './AppData/components/ShopingCart'


const App = () => {
  return (
    <>
      <BrowserRouter>
       <Navbar/>
        <Routes>
          <Route path='/' element={<Shoping/>}/>
          <Route path='/seedetail' element={<SeeDetail/>}/>
          <Route path='/shoppingcart' element={<ShoppingCart/>}/>
       
        </Routes>
        <Footer/>
       
      </BrowserRouter>
    </>


    
  )
}

export default App