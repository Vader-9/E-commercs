import { products } from "../assets/assets"


function Best(){

    const bestSellers = products.filter((product) => product.bestseller === true )
   // console.log(bestSellers)

    return(
       <div className="flex justify-center py-10 bg-gray-50">
  <div className="text-center max-w-6xl">
    <h1 className="text-3xl font-bold mb-2 tracking-wide">BEST SELLERS</h1>
    <p className="text-gray-600 mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
    </p>

    <div className="flex flex-wrap justify-center gap-6 p-4">
      {bestSellers.map((best) => (
        <div
          key={best.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden border border-gray-100 w-[200px]"
        >
          <div className="overflow-hidden">
            <img
              src={best.image}
              alt={best.name || 'No image available'}
              className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-3">
            <p className="font-semibold text-gray-800">{best.name}</p>
            <p className="text-gray-500">${best.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    )
}
export default Best