import React from "react"; 


function CardUser({description, location, urlProduct}){
    return(
        <div className="card-body">
            <div className="text-center">
                <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: "25rem" }} src={location} alt="" />
            </div>
            <p>{description}</p>
            <a target="_blank" rel="noreferrer" href={urlProduct}>
                Ver detalle del usuario
            </a>
        </div>
    )
}

export default CardUser;