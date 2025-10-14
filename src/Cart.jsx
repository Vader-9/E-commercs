import { Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
function Cart({ addToCart, setAddToCart }) {

    console.log(addToCart)

    const cartItems = addToCart

    let SubTotal = addToCart.reduce((acc, item) => acc + item.price, 0)
    //console.log(SubTotal)

    let shipping = 10

    function removeChart(item) {
        setAddToCart(addToCart.filter((cart) => cart.uniqueid !== item.uniqueid))
    }



    return (
        <div className=" bg-gray-50 py-10 px-4">
            <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-2xl p-8 md">
                <h1 className="text-2xl font-semibold mb-6 border-b pb-3 text-gray-800">
                    🛒 Your Cart
                </h1>

                {/* CART ITEMS */}
                <div className="space-y-6">
                    {cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between border-b pb-4"
                        >
                            <div className="flex items-center gap-4">
                                <img
                                    src={item.image}
                                    alt={item.name}
                                    className="w-20 h-20 object-cover rounded-lg shadow-sm"
                                />
                                <div className="text-left">
                                    <h2 className="font-semibold text-gray-800">{item.name}</h2>
                                    <p className="text-gray-500 text-sm">Size: {item.productSize}</p>
                                    <p className="text-blue-600 font-medium mt-1">${item.price}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <p className="text-gray-700">x{item.quantity}</p>
                                <button
                                    onClick={() => removeChart(item)}
                                    className="text-red-500 hover:text-red-600 transition"
                                >
                                    <Trash2 />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* TOTALS */}
                <div className="mt-10 border-t pt-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-800">
                        Cart Totals
                    </h2>

                    <div className="space-y-2 text-gray-700">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>${SubTotal}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Shipping Fee</span>
                            <span>${shipping}</span>
                        </div>
                        <div className="flex justify-between font-semibold text-gray-900 text-lg border-t pt-2">
                            <span>Total</span>
                            <span>${SubTotal === 0 ? 0 : SubTotal + shipping}</span>
                        </div>
                    </div>

                    <button className="w-full mt-6 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold">
                        Proceed to Checkout
                    </button>
                </div>
            </div>
        </div>

    )
}

export default Cart