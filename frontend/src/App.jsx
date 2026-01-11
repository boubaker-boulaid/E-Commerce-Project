import {Routes , Route} from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Products from './pages/Products/Products'
import ProductDetails from './pages/ProductDetails/ProductDetails'
import Favorites from './pages/Favorites/Favorites'
import ContactUs from './pages/ContactUs/ContactUs'
import Cart from './pages/Cart/Cart'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  
  return (
    <>
      <Header />
      <Routes >
        <Route path='/' element={<Landing />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:product' element={<ProductDetails />} />
        <Route path='/favorites' element={<Favorites />} />
        <Route path='/contact-us' element={<ContactUs />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
