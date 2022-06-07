import React, {useState, useEffect} from "react";
import TableData from "./TableData";
let datos = [
    {
        name: "Ninguna información",
        description:"Ninguna información",
        price:"$0",
        discount: "0"
    }
]

function DataBase(){

    let [products, setProducts] = useState(datos);

    useEffect(()=>{
        fetch("http://localhost:3001/api/products")
        .then(res => res.json())
        .then(data =>{
            let array = data.data
            setProducts(array)
        })
        
    },[])
    
    return (
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                <th>Descuento</th>
                            </tr>
                        </thead>
                        
                        {products.map((dato,i)=> 

                             <TableData key={i} 
                                name= {dato.name}
                                description= {dato.description}
                                price={dato.price}
                                discount= {dato.discount}
                                endpoint= {dato.endpoint}

                            />
                        
                        )}  
                    
                    </table>
                </div>
            </div>
        </div>
    )
}



export default DataBase;