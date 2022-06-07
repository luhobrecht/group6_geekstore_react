import {useState, useEffect} from "react";
import CardLastTen from "./CardLastTen";

function LastTen(){
    let [products, setProducts] = useState([{name:"Ninguna Categoria"}]);

    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(data => {
            setProducts(data.meta.lastTenProducts)
        })

    },[])



    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Últimos 10 productos</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        { products.map((product, i) =>
                            <CardLastTen key={i} name={product.name} />)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default LastTen;