import React, {useState, useEffect} from "react";
import CardUser from "./CardUser";

function LastUser() {
    let [user, setUser] = useState({
        location:"assets/img/66260.jpg", 
        name:"No se cargó ningun usuario",
        user: "No se cargó ningun usuario",
        urlUser: "/" 
    })

    useEffect(()=>{
        fetch("http://localhost:3001/api/users")
        .then(res => res.json())
        .then(data => {
            setUser({    
                name: data.meta.name,
                user: data.meta.user,
                urlUser: "http://localhost:3001/usuarios/"+ data.meta.id
            })
        })
        
    },[])

    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">
                        Último usuario agregado
                    </h6>
                </div>
                <CardUser 
                    user={user.user} name={user.name} urlUser={user.urlUser} 
                />
            </div>
        </div>
    
    )
    
}  


export default LastUser;