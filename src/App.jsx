import Navbar from './Components/Navbar.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home.jsx'
import { ContextProvider } from './Context/Context.jsx'
import ForMen from './Pages/ForMen.jsx'
import MobileNav from './Components/MobileNav.jsx'
import Footer from './Components/Footer.jsx'
import Input from './Components/Input.jsx'
import Brands from './Pages/Brands.jsx'


export default function App() {
  return (
    <ContextProvider>
      <BrowserRouter>
        <main>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Дома" element={<Home />}></Route>
            <Route path="/Мужчинам" element={<ForMen />}></Route>
            <Route path="/input" element={<Input/>}></Route>
            <Route path="/бренды" element={<Brands/>}></Route>
  
          </Routes>

          <MobileNav />
          <Footer />
        </main>
      </BrowserRouter>
    </ContextProvider>
  )
}
