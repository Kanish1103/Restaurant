import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/LoginPage/Login'
// import ExploreMenu from './components/ExploreMenu/ExploreMenu'
// import FoodDisplay from './components/FoodDisplay/FoodDisplay'
import Menu from './pages/Menu/Menu'

const App = () => {

  const [showLogin, setShowLogin] = React.useState(false)


  return (
    <>
      {showLogin ? <Login setShowLogin={setShowLogin} /> : <> </>}
      <div className='app'>
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route path='/Foodies' element={<Home />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>

  )
}

export default App