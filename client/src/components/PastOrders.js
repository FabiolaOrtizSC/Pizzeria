import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const PastOrders = () => {

    const [pizza, setPizza] = useState([]);

    const userId = localStorage.getItem("idUsuario");

    const histo = useHistory();

    const updateFavorite = (e,pizzaId) => {
        axios.put('http://localhost:8000/api/pizzas/update/' + pizzaId, {
            'favorite':Boolean(e.target.checked)
        }, {withCredentials:true})
            .then(res => {
                console.log(res.data.updatedPizza.favorite)
                histo.push("/account")
            })
            .catch(err=>{
                console.log(err)
            }); 
    }
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/pizzas', {withCredentials:true})
            .then(res => {
                console.log(res);
                setPizza(res.data.allDaPizzas);
            })
    }, [])

    return (
        <div>
            <h1 className='titulo fw-bolder text-center mb-4'>Past Orders</h1>
            {pizza.map((p, idx)=>{
                return (
                    <div key={idx}>  
                        {(p.idCliente === userId) &&
                            <div>
                                <div className="container">
                                    <div className="row justify-content-between">
                                        <div className="col-6">
                                            <p>
                                                {(p.createdAt).substring(0,10)}
                                            </p>
                                            <p>
                                                {p.size}
                                                {" - "+(p.toppings).toString()}
                                                {" - $ "+p.price}
                                            </p>
                                        </div>
                                        <div className="col-2 form-check">
                                            <input className="form-check-input" type="checkbox" defaultChecked={Boolean(p.favorite)} onChange={(e) => {updateFavorite(e,p._id)} }/>
                                            <label className="form-check-label">Favorite</label>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
                        }
                    </div>
                )
            })}  
        </div>
    )
}

export default PastOrders;