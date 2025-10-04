import { products } from "../assets/assets"


function Best(){

    const bestSellers = products.filter((product) => product.bestseller === true )
   // console.log(bestSellers)

    return(
        <div className="flex justify-center">
            <div className="text-center">
           <h1>BEST SELLERS</h1>
           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.</p>
           <div className="flex gap-[20px] justify-center">
            {bestSellers.map((best) =>(
                <div key={best.id} className="border w-[200px]  ">
                       <img src={best.image} alt="no image availabe" />
                       <p>{best.name}</p>
                       <p>{best.price}</p>
                    </div>
            ))}
           </div>
        </div>
        </div>
    )
}
export default Best