import React, { useState, useEffect } from "react";
import SmallCard from "./SmallCard";

function ContentRowTop(){
    
    let [products, setProducts] = useState("No dispone");
    let [users, setUsers] = useState("Sin usuarios");
    let [orders, setOrders] = useState("No dispone")

    let datos = [
        {
            titulo: "Productos en Base de Datos",
            cifra: products,
            colorBorder: "primary",
            icono: "fa-clipboard-list"
        },
        {
            titulo: "Ordenes de Compra",
            cifra: orders,
            colorBorder: "success",
            icono: "fa-dollar-sign"
        },
        {
            titulo: "Cantidad de Usuarios",
            cifra: users,
            colorBorder: "warning",
            icono: "fa-user-check"
        }
    ]
    

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
        .then(resultado => resultado.json())
        .then(dataProduct => {
            setProducts(dataProduct.meta.total_products)
        })

        fetch("http://localhost:3000/api/orders")
        .then(resultado => resultado.json())
        .then(dataOrders => {
            setOrders(dataOrders.meta.total_orders)
        })

        fetch("http://localhost:3000/api/users")
        .then(resultado => resultado.json())
        .then(dataUser => {
            
            setUsers(
                dataUser.meta.total_users
            )
        })
    }, [])

    return (
        <>
            <div className="row">
                {datos.map((dato, i) => 
                    <SmallCard key={i} 
                        titulo={dato.titulo} 
                        cifra={dato.cifra}
                        colorBorder={dato.colorBorder}
                        icono={dato.icono}
                    /> 
                )}
            </div>
        </>    
    )
}



export default ContentRowTop;