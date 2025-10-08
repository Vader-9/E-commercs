import { useState } from "react";
import Nav from "./Nav"
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Collection from "./Collection/Collection";
import About from "./About/About";
import Contact from "./Contact/Contact";
import Details from "./Collection/Details";


function App() {

  const [search, setSearch] = useState(false)

  return (
    <app>
      <div className='App'>
        <Router>
          <Nav setSearch={setSearch} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Collection" element={<Collection search={search} setSearch={setSearch} />}/>
              <Route path="About" element={<About/>}/>
              <Route path="Contact" element={<Contact/>}/>
              <Route path="Details/:id" element={<Details/>}/>
            </Routes>
          <Footer />
        </Router>
      </div>
    </app>
  )
}

export default App
