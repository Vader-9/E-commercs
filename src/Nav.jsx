import { assets } from './assets/assets'
import { Link } from "react-router-dom"
import {EllipsisVertical } from 'lucide-react'
import { useState } from 'react'
import './Nav.css'

function Nav({ setSearch, addToCart, setActive }) {

    const [bar, setBar] = useState('Home')

    return (
        <div className=' flex items-center gap-[30px] justify-between py-2 px-6 font-medium w-[100%] mx-[10px] sm:px-[1px] sm:flex sm:justify-center sm:gap-[10px] sm:px-[1] md:px-10 mb-[30px] md:gap-[400px] '>
            <Link to='/'><img src={assets.logo} alt="" className='w-[100px] md:w-[150px]' /></Link>
            <div className='hidden md:flex md:gap-[10px] md:items-center'>
                <Link to="/" onClick={()=>setBar('Home')} className={bar === 'Home' ? 'activeBar' : ''} class="Hover:text-red">Home</Link>
                <Link to='Collection' onClick={()=>setBar('Collection')} className={bar === 'Collection' ? 'activeBar' : ''}>Collection</Link>
                <Link to='About' onClick={()=>setBar('About')} className={bar === 'About' ? 'activeBar' : ''} >About</Link>
                <Link to='Contact'onClick={()=>setBar('Contact')} className={bar === 'Contact' ? 'activeBar' : ''}>Contact</Link>
                <Link to ="Admin"><button className='cursor-pointer text-white rounded-[20px] px-5 py-2 bg-blue-500 '>Login</button></Link>
            </div>
            <div className='flex gap-[10px] items-center md:gap-[10px]'>
                <Link to= 'Collection'><img src={assets.search_icon} alt="" onClick={()=> setSearch(true)} className="w-5 h-5 "  /></Link>
                <Link to = 'Profile'><img src={assets.profile_icon} alt=""  className="w-5 h-5"  /></Link>
                <Link to='Cart'>
                <div className="relative inline-block">
                    <img src={assets.cart_icon} alt="cart" className="w-5 h-5" />
                    {addToCart.length > 0 && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            {addToCart.length}
                        </div>
                    )}
                </div>
                </Link>
                <EllipsisVertical className='md:hidden w-5 h-5 mx-0 px-0' onClick={()=>setActive(true)}/>
            </div>
        </div>
    )
}

export default Nav