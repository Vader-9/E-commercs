import Filters from "./Filters"
//import Details from "./Details"


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