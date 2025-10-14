import { assets } from './assets/assets'
import { Link } from "react-router-dom"
import {EllipsisVertical } from 'lucide-react'

function Nav({ setSearch, addToCart, setActive }) {

    return (
        <div className=' flex items-center gap-[100px] justify-between py-2 font-medium w-full px-4 sm:px-6 md:px-10 md:gap-[150px] '>
            <img src={assets.logo} alt="" className='w-[150px]' />
            <div className='hidden md:flex md:gap-[10px] md:items-center'>
                <Link to="/">Home</Link>
                <Link to='Collection'>Collection</Link>
                <Link to='About'>About</Link>
                <Link to='Contact'>Contact</Link>
                <Link to ="Admin"><button>Login/sign up</button></Link>
            </div>
            <div className='flex gap-[10px] items-center'>
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
                <EllipsisVertical className='md:hidden w-5 h-5' onClick={()=>setActive(true)}/>
            </div>
        </div>
    )
}

export default Nav