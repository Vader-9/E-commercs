import { useParams } from "react-router"
import { products, assets } from "../assets/assets"

function Details() {

    const { id } = useParams()

    const product = products.find((item) => item._id === id)

    console.log(product)

    return (
        <div>
            <div>
                <img src={product.image} alt="" />
                <div>
                    <h1>Men Tapered Fit Flat-Front Trousers</h1>
                    <div>
                        <div>
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
                        <p>{product.sizes[0]}</p>
                        <p>{product.sizes[1]}</p>
                        <p>{product.sizes[2]}</p>
                        <p>{product.sizes[3]}</p>
                    </div>
                    <button>ADD TO CART</button>
                    <hr />
                </div>
            </div>
        </div>
    )
}

export default Details