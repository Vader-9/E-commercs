import { useEffect, useState } from "react"
import { products, assets } from "../assets/assets"
import { use } from "react"
import { Link } from "react-router-dom"

function Filters({ search, setSearch,}) {

    const [showProducts, setShowProducts] = useState(products)

    const [categorys, setCategorys] = useState('')
    // enables picking subcategory
    const [singular, setSingular] = useState(true)

    const [subCategory, setSubCategory] = useState('')
    // it helps it get the sub category
    const [topWear, setTopwear] = useState('Topwear')
    const [bottomWear, setBottomwear] = useState('Bottomwear')
    const [winterWear, setWinterwear] = useState('Winterwear')
    // to show the subCategory
    const [showSubCartegory, setShowSubCartegory] = useState([])

    //Searching items
    const [searchItems, setSearchItems] = useState('')




    function getMenCloths() {
        setSingular(true)
        setCategorys('Men')
        // setSubCategory('Topwear')
        setShowProducts(products.filter((item) => item.category === 'Men'))

    }

    function getWomenCloths() {
        setSingular(true)
        setCategorys('Women')
        setShowProducts(products.filter((item) => item.category === 'Women'))
    }

    function getKidsCloths() {
        setSingular(true)
        setCategorys('Kids')
        setShowProducts(products.filter((item) => item.category === 'Kids'))
    }

    function setTopwears() {
        setSubCategory(topWear)
    }

    function setBottompwears() {
        setSubCategory(bottomWear)
    }

    function setWinterwears() {
        setSubCategory(winterWear)
    }



    useEffect(() => {
        if (subCategory && categorys) {
            setSingular(false)
            setShowSubCartegory(products.filter((item) => item.category === categorys && item.subCategory === subCategory))
        }
    }, [subCategory, categorys])

    // searching items
    const searchingItems = products.filter((product) => product.name.toLocaleLowerCase().includes(searchItems.toLocaleLowerCase()))

    const displayCloths = singular ? !search ? showProducts : searchingItems : showSubCartegory

    return (
        <div className="px-[100px]">
            {search ? <div className="flex justify-center items-center w-full border pt-[20px] pb-[20px] gap-[50px]">
                <input type="text"
                    value={searchItems}
                    onChange={(e) => setSearchItems(e.target.value)}
                    placeholder="Search products" />


                <img src={assets.cross_icon} onClick={() => setSearch(false)} />
            </div> : <></>}
            <div className="flex gap-[50px]">
                <div>
                    <h1>Filters</h1>
                    <div className="border p-[20px] mt-[40px] mb-[40px] w-[200px] h-[200px]">
                        <h3>CATEGORIES</h3>
                        <div className="flex">
                            <input type="checkbox" onClick={getMenCloths} />
                            <p>Men</p>
                        </div>
                        <div className="flex">
                            <input type="radio" onClick={getWomenCloths} />
                            <p>Women</p>
                        </div>
                        <div className="flex">
                            <input type="radio" onClick={getKidsCloths} />
                            <p>Kids</p>
                        </div>
                    </div>
                    <div className="border p-[20px] mt-[40px] mb-[40px] w-[200px] h-[200px]">
                        <h3>Types</h3>
                        <div className="flex">
                            <input type="radio" onClick={setTopwears} />
                            <p>Topwear</p>
                        </div>
                        <div className="flex">
                            <input type="radio" onClick={setBottompwears} />
                            <p>Bottomwear</p>
                        </div>
                        <div className="flex">
                            <input type="radio" onClick={setWinterwears} />
                            <p>Winterwear</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>

                        <div className="flex justify-space-between">
                            <h1>ALL COLLECTIONS_________</h1>
                            <input type="text" name="" id="" />
                        </div>
                    </div>
                    <div className="grid grid-cols-5 grid-rows-2 gap-[20px] p-4 text-center justify-center" >{
                        displayCloths.map((product) => (
                            <Link to={`/Details/${product._id}`} key={product._id} >
                            <div key={product._id}  >
                                <img src={product.image} alt="" />
                                <p>{product.name}</p>
                                <p>${product.price}</p>
                                <p>{product.category}</p>
                            </div>
                            </Link>
                        ))
                    }</div>
                </div>
            </div>
        </div>
    )
}

export default Filters