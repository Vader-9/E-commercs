import Header from "./Header"
import Latest from "./Latest"
import Best from "./Best"
//import Easy from "./Easy"
import Subcribe from "./Subcribe"

function Home(){

    return(
        <div className="w-full mt-[50px]">
            <Header/>
            <Latest/>
            <Best/>
            <Subcribe/>
        </div>
    )
}
export default Home