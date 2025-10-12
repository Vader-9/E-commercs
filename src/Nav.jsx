import { assets } from './assets/assets'
import { Link } from "react-router-dom"

function Nav({ setSearch, addToCart }) {

    return (
        <div className='flex items-center gap-[270px] justify-between py-2 font-medium '>
            <img src={assets.logo} alt="" />
            <div className='flex gap-[10px] items-center'>
                <Link to="/">Home</Link>
                <Link to='Collection'>Collection</Link>
                <Link to='About'>About</Link>
                <Link to='Contact'>Contact</Link>
                <Link to ="Admin"><button>Admin panel</button></Link>
            </div>
            <div className='flex gap-[10px]'>
                <Link to= 'Collection'><img src={assets.search_icon} alt="" onClick={()=> setSearch(true)} className="w-8 h-8"  /></Link>
                <Link to = 'Profile'><img src={assets.profile_icon} alt=""  className="w-8 h-8"  /></Link>
                <Link to='Cart'><div className="relative inline-block">
                    <img src={assets.cart_icon} alt="cart" className="w-8 h-8" />
                    {addToCart.length > 0 && (
                        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                            {addToCart.length}
                        </div>
                    )}
                </div>
                </Link>
            </div>
        </div>
    )
}

export default Nav