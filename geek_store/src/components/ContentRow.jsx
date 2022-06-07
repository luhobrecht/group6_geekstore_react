import LastProduct from "./LastProduct" ;
import LastTen from "./LastTenProducts"


function ContentRow() {
    return (
        <div className="row">
            <LastProduct />
            <LastTen />
        </div>
    )
}
export default ContentRow;