import {assets} from './assets/assets'

function Footer(){

    return(
       <div className='mt-[70px] md:px-[100px] px-[20px]  pt-[30px] pb-[20px] sm:px-[50px] '>
        <div className=' md:flex '>
            <div className='w-[33%]  p-5 md:w-[33%] sm:w-[50%] w-[100%] '>
                <img src={assets.logo} alt=""  className='w-[100px] p-[20px]'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicin explicabo voluptatum accusantium nesciunt reprehenderit architecto maxime sed amet deleniti aliquid voluptas ab debitis laboriosam quos.</p>
            </div>
            <div className='w-[33%]  p-[20px]'>
                <h1>COMPANY</h1>
                <p>Home</p>
                <p>About Us</p>
                <p>Delivery</p>
                <p>Privacy policy</p>
            </div>
            <div className='w-[34%]  p-[20px]'>
                <p>Get-IN touch</p>
                <p>usidemewilliams69@gmail.come</p>
                <p>Instagram</p>
            </div>
        </div>
        <hr className='mt-[40px]' />
       </div>
    )
}

export default Footer