
function Filters(){

    return(
        <div className="px-[100px]">
            <div className="flex gap-[50px]">
                <div>
                    <h1>Filters</h1>
                    <div className="border p-[20px] mt-[40px]mb-[40px] w-[200px] h-[200px]">
                        <h3>CATEGORIES</h3>
                        <div>
                            <input type="radio"/>
                            <p>Men</p>
                        </div>
                         <div>
                            <input type="radio"/>
                            <p>Women</p>
                        </div>
                         <div>
                            <input type="radio"/>
                            <p>Kids</p>
                        </div>
                    </div>
                    <div className="border p-[20px] mt-[40px]mb-[40px] w-[200px] h-[200px]">
                        <h3>Types</h3>
                        <div>
                            <input type="radio"/>
                            <p>Topwear</p>
                        </div>
                         <div>
                            <input type="radio"/>
                            <p>Bottomwear</p>
                        </div>
                         <div>
                            <input type="radio"/>
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
                    <div>{}</div>
                </div>
            </div>
        </div>
    )
}

export default Filters