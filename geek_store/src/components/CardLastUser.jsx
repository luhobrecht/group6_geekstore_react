import React from "react";

function CardLastUser({name, user}){
    return (
        <div className="col-lg-6 mb-4">
            <div className="card bg-info text-white shadow">
                <div className="card-body">
                    <div>
                    Nombre: {name}
                    </div>
                    <div>
                    Usuario: {user} 
                    </div>
				</div>
            </div>
        </div>
    )
}

export default CardLastUser;