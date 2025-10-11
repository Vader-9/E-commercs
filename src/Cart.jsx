import { Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
function Cart({ addToCart, setAddToCart }) {

    console.log(addToCart)

    const cartItems = addToCart

    let SubTotal = addToCart.reduce((acc, item) => acc + item.price, 0)
    console.log(SubTotal)

    let shipping = 10

    function removeChart(item) {
        setAddToCart(addToCart.filter((cart) => cart.uniqueid !== item.uniqueid))
    }



    return (
        <div>
            <h1>YOUR CART________</h1>
            {cartItems.map((item) => (
                <div key={item.id}>
                    <img src={item.image} alt="" />
                    <div>
                        <h1>{item.name}</h1>
                        <p>${item.price}</p>
                        <button>{item.productSize}</button>
                        <button onClick={() => removeChart(item)}><Trash2 /></button>
                    </div>
                </div>
            ))}
            <div>
                <h1>CART TOTALS_______</h1>
                <div>
                    <p>Subtotal</p>
                    <p>${SubTotal}</p>
                </div>
                <div>
                    <p>Shipping Fee</p>
                    <p>${shipping}</p>
                </div>
                <div>
                    <p>Total</p>
                    <p>${SubTotal === 0 ? 0 : SubTotal + shipping}</p>
                </div>
            </div>
            <button>PROCEED TO CHECKOUT</button>
        </div>
    )
}

export default Cart