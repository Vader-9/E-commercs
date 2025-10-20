
function Subcribe() {

    return (
        <div className="flex justify-center  mt-[50px] w-full mb-[50px] p-10px">
            <div className="text-center p-[20px] md:w-[700px] sm:w-[400px] w-[350px] h-[250px] ">
                <h1>Subscribe now & get 20% off</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <div className="flex justify-center items-center mt-[20px] md:flex-row flex-col gap-4 ">
                    <input type="text" placeholder="Enter your email" className="border mt-[20px] p-[10px] md:w-[400px] sm:w-[350px] outline-none" />
                    <button className="bg-black text-white p-[11px] w-[150px] mt-[20px]">Subscribe</button>
                </div>
            </div>
        </div>
    )
}

export default Subcribe