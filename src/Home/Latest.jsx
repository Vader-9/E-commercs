import { LatestProducts } from "../assets/assets"

function Latest() {
    console.log(LatestProducts)

    return (
     <div className="flex justify-center">
           <div className="text-center">
            <h1>LATEST COLLECTIONS</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
            <div className="grid grid-cols-5 grid-rows-2 gap-[20px] p-4 text-center justify-center">
                {LatestProducts.map((item) => (
                    <div key={item.id} className="border w-[200px]  ">
                       <img src={item.image} alt="" />
                       <p>{item.name}</p>
                       <p>${item.price}</p>
                    </div>
                ))}

            </div>
        </div>
     </div>
    )
}

export default Latest