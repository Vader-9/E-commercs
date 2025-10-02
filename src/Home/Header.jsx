import { assets } from "../assets/assets"

function Header(){
    return(
        <div className="flex border h-150 justify-center items-center gap-130">
            <div className="p-[100] w-50% text-center">
                <h1>_______Welcome to Amazo</h1>
                <h1>Latest Arrivals</h1>
                <h1>SHOP NOW_________</h1>
            </div>
            <img src={assets.hero_img} alt="" className=" w-50% h-[100%] " />
        </div>
    )
}

export default Header