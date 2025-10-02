import { assets } from "../assets/assets"

function Header(){
    return(
        <div className="flex border h-100 justify-center items-center">
            <div className="p-[100] w-50%">
                <h1>_______Welcome to Amazo</h1>
                <h1>Latest Arrivals</h1>
                <h1>SHOP NOW_________</h1>
            </div>
            <img src={assets.hero_img} alt="" className="border w-50% " />
        </div>
    )
}

export default Header