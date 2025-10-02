import Nav from "./Nav"
import Footer from './Footer'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home/Home";
import Collection from "./Collection/Collection";
import About from "./About/About";
import Contact from "./Contact/Contact";


function App() {


  return (
    <app>
      <div className='App'>
        <Router>
          <Nav />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="Collection" element={<Collection/>}/>
              <Route path="About" element={<About/>}/>
              <Route path="Contact" element={<Contact/>}/>
            </Routes>
          <Footer />
        </Router>
      </div>
    </app>
  )
}

export default App
