import { assets } from "../assets/assets"
import Subcribe from "../Home/Subcribe"


function Contact(){
   return(
       <div>
           <div>
             <h1 className="text-center m-[20px]">CONTACT US__________</h1>
             <div className="flex justify-center items-center gap-[30px] ">
                <img src={assets.contact_img} alt=""  className="w-[40%]"/>
                <div>
                    <h1>Our Store</h1>
                    <p>54709 Willms Station</p>
                    <p>Suite 350, Washington, USA</p>
                    <p>Tel: (415) 555-0132</p>
                    <p>Email: admin@forever.com</p>
                    <h2>Careers at Forever</h2>
                    <p>Learn more about our teams and job openings.</p>
                    <button>Explore jobs</button>
                </div>
             </div>
           </div>
           <Subcribe/>
       </div>
    ) 
}

export default Contact