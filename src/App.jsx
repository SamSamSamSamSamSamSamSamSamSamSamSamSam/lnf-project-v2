
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Footer, Navbar } from './components/index'
import { Home, Login, SignUp, Report, AboutUs, ContactUs, Support, Search, Profile } from './pages/index'

function App() {

  const isLoggedIn = true; //dummy value only. change to user authentication logic

  return (
    <>
    <Router>
      <Navbar isLoggedIn={isLoggedIn}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/report" element={<Report/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/report" element={<Report/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
          <Route path="/support" element={<Support/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      <Footer/>
    </Router>
      
    </>
  )
}

export default App
