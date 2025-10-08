import Filters from "./Filters"
//import Details from "./Details"
import { useState } from "react"
import { Link } from "react-router";

function Collection({ search, setSearch }) {

    // Setting details
   // const [details, setDetails] = useState(true)

    return (
        <div>
            <Filters search={search} setSearch={setSearch}/>
        </div>
    )
}

export default Collection