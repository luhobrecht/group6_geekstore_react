import React, {useState, useEffect} from "react";
import CardProduct from "./CardProduct";

function LastProduct() {
    let [product, setProduct] = useState({
        location:"assets/img/66260.jpg", 
        description:"No se cargo ningun producto",
        urlProduct: "/" 
    })

    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(data => {
            setProduct({    
                description: data.meta.lastProducts[0].description,
                location: "http://localhost:3001/img/uploadProducts/"+ data.meta.lastProducts[0].img[0].name,
                urlProduct: "http://localhost:3001/productos/"+ data.meta.lastProducts[0].id
            })
        })
        
    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Último producto agregado
                    </h6>
                </div>
                <CardProduct 
                    location={product.location} description={product.description} urlProduct={product.urlProduct} 
                />
            </div>
        </div>
    
    )
    
}  


export default LastProduct;