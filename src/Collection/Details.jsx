import { useParams } from "react-router"
import { products, assets } from "../assets/assets"
import { useState } from "react"

function Details({ setAddToCart }) {

    const { id, } = useParams()

    const product = products.find((item) => item._id === id)
    // const related = products.map((item) => item.name === name )

    // console.log(product)

    const [size, setSize] = useState('')

    function setAddToCarts() {

        if (size === '') {
            alert('Please pick a size')
        } else {
            setAddToCart(prev => [
                ...prev, {
                    id: product._id,
                    uniqueid: Date.now(),
                    name: product.name,
                    image: product.image,
                    price: product.price,
                    productSize: size
                }])
        }
    }

    return (
        <div className="flex justify-center ">
            <div className="flex gap-[50px]">
                <img src={product.image} alt="" />
                <div>
                    <h1>Men Tapered Fit Flat-Front Trousers</h1>
                    <div className="flex">
                        <div className="flex">
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_icon} alt="" />
                            <img src={assets.star_dull_icon} alt="" />
                        </div>
                        <h1>${product.price}</h1>
                    </div>
                    <h1>Select Size</h1>
                    <div>
                        <p onClick={() => setSize(product.sizes[0])}>{product.sizes[0]}</p>
                        <p onClick={() => setSize(product.sizes[1])}>{product.sizes[1]}</p>
                        <p onClick={() => setSize(product.sizes[2])}>{product.sizes[2]}</p>
                    </div>
                    <button onClick={setAddToCarts}>ADD TO CART</button>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Details