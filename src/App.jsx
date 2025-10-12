import { useState } from "react";
import Nav from "./Nav"
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Collection from "./Collection/Collection";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Details from "./Collection/Details";
import Cart from "./Cart";
import Login from "./Profile";
import Admin from "./Admin";



function App() {

  const [search, setSearch] = useState(false)
  const [addToCart, setAddToCart] = useState([])

  return (
    <app className ='bg-gray-50'>
      <div className='App'>
        <Router>
          <Nav setSearch={setSearch} addToCart={addToCart} /> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Collection" element={<Collection search={search} setSearch={setSearch} />}/>
              <Route path="About" element={<About/>}/>
              <Route path="Contact" element={<Contact/>}/>
              <Route path="Details/:id" element={<Details setAddToCart={setAddToCart} addToCart={addToCart}/>}/>
              <Route path="Cart" element={<Cart addToCart={addToCart} setAddToCart={setAddToCart}/>}/>
              <Route path="Profile" element={<Login/>}/>
              <Route path="Admin" element ={<Admin/>}/>
            </Routes>
          <Footer />
        </Router>
      </div>
    </app>
  )
}

export default App
