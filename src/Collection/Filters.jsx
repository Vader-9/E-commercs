import { useEffect, useState } from "react"
import { products, assets } from "../assets/assets"
import { use } from "react"
import { Link } from "react-router-dom"

function Filters({ search, setSearch, }) {

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
            {search && (
  <div className="flex justify-center items-center w-full bg-white shadow-md py-4 px-6 gap-4 rounded-lg m-[10px]  fixed">
    <input
      type="text"
      value={searchItems}
      onChange={(e) => setSearchItems(e.target.value)}
      placeholder="Search products..."
      className="w-2/3 md:w-1/2 border border-gray-300 rounded-full px-4 py-2 outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-200 transition-all duration-200"
    />

    <img
      src={assets.cross_icon}
      onClick={() => setSearch(false)}
      alt="close"
      className="w-5 h-5 cursor-pointer opacity-70 hover:opacity-100 transition"
    />
  </div>
)}

            <div className="flex gap-[50px]">
                <div>
                    <h1>Filters</h1>
                    <div className="border border-green-600 p-[20px] mt-[40px] mb-[40px] w-[200px] h-[200px] rounded-[30px] ">
                        <h3>CATEGORIES</h3>
                        <div className="flex gap-[10px]">
                            <input type="checkbox" onClick={getMenCloths} />
                            <p>Men</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <input type="checkbox" onClick={getWomenCloths} />
                            <p>Women</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <input type="checkbox" onClick={getKidsCloths} />
                            <p>Kids</p>
                        </div>
                    </div>
                    <div className="border border-green-600 p-[20px] mt-[40px] mb-[40px] w-[200px] h-[200px] rounded-[30px] ">
                        <h3>Types</h3>
                        <div className="flex gap-[10px]">
                            <input type="checkbox" onClick={setTopwears} />
                            <p>Topwear</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <input type="checkbox" onClick={setBottompwears} />
                            <p>Bottomwear</p>
                        </div>
                        <div className="flex gap-[10px]">
                            <input type="checkbox" onClick={setWinterwears} />
                            <p>Winterwear</p>
                        </div>
                    </div>
                </div>
                <div>
                    <div>

                        <div className="flex justify-space-between">
                            <h1>ALL COLLECTIONS_________</h1>
                            
                        </div>
                    </div>
                    <div className="bg-gray-50 py-10">
                        <div className="text-center max-w-6xl mx-auto">
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 p-4 justify-center">
                                {displayCloths.map((product) => (
                                    <Link
                                        to={`/Details/${product._id}`}
                                        key={product._id}
                                        className="bg-white rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden border border-gray-100"
                                    >
                                        <div className="overflow-hidden">
                                            <img
                                                src={product.image}
                                                alt={product.name}
                                                className="w-full h-48 object-cover transform transition-transform duration-300 hover:scale-105"
                                            />
                                        </div>
                                        <div className="p-3 text-center">
                                            <p className="font-semibold text-gray-800">{product.name}</p>
                                            <p className="text-gray-500">${product.price}</p>
                                            <p className="text-sm text-gray-400">{product.category}</p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Filters