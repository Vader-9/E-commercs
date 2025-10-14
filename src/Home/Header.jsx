import { assets } from "../assets/assets"

function Header() {
    return (
        <div className="w-full h-[600px] flex justify-center items-center bg-gray-50">
            <div className="flex flex-col gap-[5px] h-[400px]   md:flex-row md:justify-between md:items-center  sm:px-2 md:px-5  bg-gray-50 md:pt-[0px] md:h-[600px] md: w-[90%] md: border border-gray-200 md:p-[0px] md: gap-[100px]">  
            <div className="p-[100] w-50% text-center md: w-full md:gap-[50px] md:text-left">
                <h1>_______Welcome to Amazo</h1>
                <h1>Latest Arrivals</h1>
                <h1>SHOP NOW_________</h1> 
            </div>
            <img src={assets.hero_img} alt="" className="w-full h-[300px]  md:w-full md:h-full   " />
        </div>
        </div>

    )
}

export default Header