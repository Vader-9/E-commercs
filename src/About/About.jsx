import { assets } from "../assets/assets"
import Subcribe from "../Home/Subcribe"

function About() {
    return (
        <div>
            <div>
                <h1 className="m-[20px]">ABOUT US________</h1>
                <div className="flex justify-center items-center gap-[50px] mb-[30px] sm:flex-col md:flex-row flex-col">
                    <img src={assets.about_img} alt="" className="w-[40%]" />
                    <div className="w-[80%] md:w-[40%]" >
                        <p>Forever was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.</p>
                        <p>Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. From fashion and beauty to electronics and home essentials, we offer an extensive collection sourced from trusted brands and suppliers.</p>
                        <h1>Our Mission</h1>
                        <p>Our mission at Forever is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
                    </div>
                </div>
                <div className="hidden md:block md:ml-[30px]">
                    <h1>WHY CHOOSE US__________</h1>
                    <div className="flex w-[100%] mt-[30px]">
                        <div className="border w-[33%] p-[50px] h-[250px]">
                            <h1>Quality Assurance:</h1>
                            <p>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
                        </div>
                        <div className="border w-[33%] p-[50px] h-[250px]">
                            <h1>Convenience:</h1>
                            <p>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
                        </div>
                        <div className="border w-[33%] p-[50px] h-[250px]">
                            <h1>Exceptional Customer Service:</h1>
                            <p>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
                        </div>
                    </div>
                </div>
                <Subcribe />
            </div>
        </div>
    )
}

export default About