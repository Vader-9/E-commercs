import { LatestProducts } from "../assets/assets"
import { Link } from "react-router-dom"


function Latest() {
 // console.log(LatestProducts)

  return (
    <div className="flex justify-center py-10 bg-gray-50 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-6xl">
        <h1 className="text-3xl font-bold mb-2 tracking-wide">LATEST COLLECTIONS</h1>
        <p className="text-gray-600 mb-8">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
          {LatestProducts.map((product) => (
            <Link to={`/Details/${product._id}`}
              key={product._id}>
              <div key={product._id}
                className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 w-[100%] md: w-[20px]"
              >
                <div className="overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
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

export default Latest