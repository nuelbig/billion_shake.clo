import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'
import Header from '../components/Header'
import Preloader from '../components/Preloader'
import ScrollToHash from '../components/ScrollToHash'

const MainLayout = () => {
  return (
    <>
      <Preloader />
      <ScrollToHash />
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default MainLayout
