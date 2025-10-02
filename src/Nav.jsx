import {assets} from './assets/assets'
import { Link } from "react-router-dom"

function Nav(){

    return(
        <div className='flex items-center gap-[270px] justify-between py-2 font-medium '>
            <img src={assets.logo} alt="" />
            <div className='flex gap-[10px] items-center'>
                <Link to="/">Home</Link>
                <Link to = 'Collection'>Collection</Link>
                <Link to ='About'>About</Link>
                <Link to ='Contact'>Contact</Link>
                <button>Admin panel</button>
            </div>
            <div className='flex gap-[10px]'>
                <img src={assets.search_icon} alt="" />
                <img src={assets.profile_icon} alt="" />
                <img src={assets.cart_icon} alt="" />
            </div>
        </div>
    )
}

export default Nav