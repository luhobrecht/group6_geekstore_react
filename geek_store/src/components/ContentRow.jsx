import LastProduct from "./LastProduct" ;
//import LastTen from "./LastTenProducts"
import LastUser from "./LastUser"


function ContentRow() {
    return (
        <div className="row">
            <LastProduct />
            <LastUser />
        </div>
    )
}
export default ContentRow;