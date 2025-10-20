import {assets} from './assets/assets'

function Footer(){

    return(
       <div className='mt-[70px] mx-[0px] w-full bg-blue-500 md:px-[100px] px-[20px]  pt-[30px] pb-[20px] sm:px-[0px] w-[20%] '>
        <div className=' md:flex w-full sm:w-full'>
            <div className='w-[33%]   md:w-[33%] sm:w-[50%] w-[100%] '>
                <img src={assets.logo} alt=""  className='w-[100px] p-[20px]'/>
                <p className='text-white '>Lorem ipsum dolor, sit amet consectetur adipisicin explicabo voluptatum accusantium nesciunt reprehenderit architecto maxime sed amet deleniti aliquid voluptas ab debitis laboriosam quos.</p>
            </div>
            <div className='w-[33%]  p-[20px] text-white'>
                <h1>COMPANY</h1>
                <p>Home</p>
                <p>About Us</p>
                <p>Delivery</p>
                <p>Privacy policy</p>
            </div>
            <div className='w-[34%]  p-[20px] text-white'>
                <p>Get-IN touch</p>
                <p>usidemewilliams69@gmail.come</p>
                <p>Instagram</p>
            </div>
        </div>
        <hr className='mt-[40px] text-white' />
       </div>
    )
}

export default Footer