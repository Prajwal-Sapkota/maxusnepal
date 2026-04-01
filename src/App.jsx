
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Vehicles from './pages/Vehicles'
import VehicleDetail from './pages/Vehicles/VehicleDetail/VehicleDetail'
import About from './pages/About'
import Contact from './pages/Contact'

function App() {

  return (
    <>
     <Routes>
      
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />

      <Route path='/vehicles' element={<Vehicles/>} />
       <Route path="/vehicles/:slug" element={<VehicleDetail />} />
        <Route path="/vehicles/:slug/:section" element={<VehicleDetail />} />

     </Routes>
    </>
  )
}

export default App
