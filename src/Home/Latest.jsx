import { LatestProducts } from "../assets/assets"

function Latest() {
    console.log(LatestProducts)

    return (
     <div className="flex justify-center py-10 bg-gray-50">
  <div className="text-center max-w-6xl">
    <h1 className="text-3xl font-bold mb-2 tracking-wide">LATEST COLLECTIONS</h1>
    <p className="text-gray-600 mb-8">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
    </p>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4">
      {LatestProducts.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100 w-[100%] md: w-[20px]"
        >
          <div className="overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
          <div className="p-3">
            <p className="font-semibold text-gray-800">{item.name}</p>
            <p className="text-gray-500">${item.price}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

    )
}

export default Latest