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
import AboutUs from './pages/AboutUs/AboutUs'
import NotFound from './pages/NotFound/NotFound'

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
        <Route path='/about' element={<AboutUs />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
