import './App.css'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar'
import Register from './components/Register/Register'


function App() {


  return (
    <>
      <BrowserRouter>
          <Navbar />
        <Routes>
          <Route path="/register" element={<Register />} />
          {/* <Route path="/login" element={<Login />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
