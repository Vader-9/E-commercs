import { Link } from "react-router-dom"
import { X } from 'lucide-react'
import './Sidebar.css'


function Sidebar({ active, setActive }) {

    return (
        <div className="md:hidden">
            <div className={`sidebar ${active ? 'active' : ''}`} >
                <Link to="/">Home</Link>
                <Link to="Collection">Collection</Link>
                <Link to="About">About</Link>
                <Link to="Contact">Contact</Link>
                <Link to="Admin">
                    <button>Admin panel</button>
                </Link>
                <X onClick={() => setActive(false)} />
            </div>
        </div>

    )
}

export default Sidebar