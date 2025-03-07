import { Route, Routes } from 'react-router-dom';
import Home from "./pages/Home"
import CarDetails from './pages/carDetails/CarDetails';
import NavBar from './components/navbar/NavBar'
import Footer from './components/Footer';
import Cart from './pages/Cart';
import Cars from './pages/Cars';

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/car-details/:id" element={<CarDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/cars" element={<Cars />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
