import { useParams } from "react-router"
import { products, assets } from "../assets/assets"
import { useState } from "react"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Details({ addToCart, setAddToCart }) {

    const { id, } = useParams()

    const product = products.find((item) => item._id === id)
    const cartProduct = { ...product, quantity: 1 }

    // console.log(product)

    const [size, setSize] = useState('')

    /*  {
                    id: product._id,
                    uniqueid: Date.now(),
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    productSize: size,
                    count:1
                }*/

    function setAddToCarts() {

        if (size === '') {
            toast('Please pick a size')
            return
        } 
        const isAlreadyInCart = addToCart.find((item) => item.name === cartProduct.name && item.productSize === size)
        if (!isAlreadyInCart) {
            setAddToCart(prev => [...prev, { ...cartProduct, uniqueid: Date.now(), productSize: size }])
            toast('Item added to cart')
        } else {
            setAddToCart(prev => 
                prev.map((item) => item.name === cartProduct.name && item.productSize === size ? { ...item, quantity: item.quantity + 1 } : item)
            )
        }
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-50 py-10 px-4">
  <div className="flex flex-col md:flex-row gap-10 bg-white shadow-lg rounded-2xl p-8 max-w-4xl w-full">
    {/* PRODUCT IMAGE */}
    <div className="flex-1 flex justify-center">
      <img
        src={product.image}
        alt={product.name}
        className="w-64 h-64 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
      />
    </div>

    {/* PRODUCT DETAILS */}
    <div className="flex-1 text-gray-800">
      <h1 className="text-2xl font-semibold mb-2">{product.name}</h1>

      {/* Rating + Price */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex">
          <img src={assets.star_icon} alt="" className="w-5" />
          <img src={assets.star_icon} alt="" className="w-5" />
          <img src={assets.star_icon} alt="" className="w-5" />
          <img src={assets.star_icon} alt="" className="w-5" />
          <img src={assets.star_dull_icon} alt="" className="w-5" />
        </div>
        <h2 className="text-2xl font-bold text-blue-600">${product.price}</h2>
      </div>

      {/* Size Selector */}
      <h3 className="text-lg font-medium mb-2">Select Size</h3>
      <div className="flex gap-3 mb-6">
        {product.sizes.map((size, index) => (
          <p
            key={index}
            onClick={() => setSize(size)}
            className={`cursor-pointer border px-4 py-2 rounded-md transition  ${
              size === product.size
                ? "bg-blue-500 text-white"
                : "border-gray-300 hover:bg-gray-100 active:bg-red-500"
            }`}
          >
            {size}
          </p>
        ))}
      </div>

      {/* Add to Cart Button */}
      <button
        onClick={setAddToCarts}
        className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-blue-700 transition"
      >
        Add to Cart
      </button>

      <hr className="my-6" />
    </div>
  </div>

  <ToastContainer />
</div>

    )
}

export default Details