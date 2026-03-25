
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import ScrollTopButton from './components/ScrollTopButton'

function App() {

  return (
    <>
     <Routes>
      <Route path='/' element={<Home/>} />

     </Routes>
     <ScrollTopButton/>
    </>
  )
}

export default App
