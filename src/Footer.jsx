import {assets} from './assets/assets'

function Footer(){

    return(
       <div className='mt-[70px]  '>
        <div className='flex '>
            <div className='w-[33%] border p-5'>
                <img src={assets.logo} alt=""  className='w-[100px] p-[20px]'/>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab suscipit laboriosam officiis. Perferendis iure, explicabo voluptatum accusantium nesciunt reprehenderit architecto maxime sed amet deleniti aliquid voluptas ab debitis laboriosam quos.</p>
            </div>
            <div className='w-[33%] border p-[20px]'>
                <h1>COMPANY</h1>
                <p>Home</p>
                <p>About Us</p>
                <p>Delivery</p>
                <p>Privacy policy</p>
            </div>
            <div className='w-[34%] border p-[20px]'>
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