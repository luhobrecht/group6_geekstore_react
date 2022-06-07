import {useState, useEffect} from "react";
import CardLastUser from "./CardLastUser";

function LastTen(){
    let [users, setUsers] = useState([{name:"No se cargó ningun usuario", user:"No se cargó ningun usuario"}]);

    useEffect(()=>{
        fetch("http://localhost:3001/api/users")
        .then(res => res.json())
        .then(data => {
            setUsers(data.meta.lastUsers)
        })

    },[])



    return (
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Últimos usuarios creados</h6>
                </div>
                <div className="card-body">
                    <div className="row">
                        { users.map((user, i) =>
                            <CardLastUser key={i} name={user.name} user={user.user} />)
                        }

                    </div>
                </div>
            </div>
        </div>
    )
}
export default LastTen;