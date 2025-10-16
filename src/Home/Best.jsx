import { products } from "../assets/assets"
import { Link } from "react-router-dom"


function Best() {

  const bestSellers = products.filter((product) => product.bestseller === true)
  // console.log(bestSellers)

  return (
    <div className="flex justify-center py-10 bg-gray-50">
      <div className="text-center max-w-6xl">
        <h1 className="text-3xl font-bold mb-2 tracking-wide">BEST SELLERS</h1>
        <p className="text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>

        <div className="grid grid-cols-2 justify-center gap-3 p-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-8">
          {bestSellers.map((product) => (
            <Link to={`/Details/${product._id}`}
              key={product._id}>
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden border border-gray-100 w-[200px]"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name || 'No image available'}
                    className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <div className="p-3">
                  <p className="font-semibold text-gray-800">{product.name}</p>
                  <p className="text-gray-500">${product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>

  )
}
export default Best