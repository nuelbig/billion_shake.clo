import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'

const App = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="/single-product" element={<SingleProduct />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}

export default App
