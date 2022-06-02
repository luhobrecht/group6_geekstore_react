import LastProduct from "./LastProduct" ;
import CardCategory from "./CardCategory" ;


function ContentRow() {
    return (
        <div className="row">
            <LastProduct />
            <CardCategory />
        </div>
    )
}
export default ContentRow;