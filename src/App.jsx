import { useEffect, useState } from "react";
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
import Sidebar from "./Sidebar";
import { getItem, setItem } from "./utiles/localStorage";



function App() {

  const [search, setSearch] = useState(false)
  const [active, setActive] = useState(false)
const [addToCart, setAddToCart] = useState(() => {
  const stored = getItem('addToCart');
  // make sure we always return an array
  return Array.isArray(stored) ? stored : [];
});

useEffect(() => {
  setItem('addToCart', addToCart);
}, [addToCart]);


  return (
    <app className ='bg-gray-50  flex justify-center '>
      <div className="App">
        <Router>
          <Nav setSearch={setSearch} addToCart={addToCart} setActive={setActive} /> 
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
            <Sidebar active={active} setActive={setActive}/>
          <Footer />
        </Router>
      </div>
    </app>
  )
}

export default App
