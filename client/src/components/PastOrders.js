import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const PastOrders = () => {

    const [pizza, setPizza] = useState([]);

    const userId = localStorage.getItem("idUsuario");

    const [favorite,setFavorite] = useState(false);

    const histo = useHistory();

    /*useEffect(() => {
        axios.get('http://localhost:8000/api/pizzas/ticket/' + userId, {withCredentials:true})
            .then(res => {
                console.log(res);
                setFavorite(res.data.oneSinglePizza.favorite);
            })
    }, [userId])

    const updateFavorite = ((pizzaId) => {
        axios.put('http://localhost:8000/api/pizzas/update/' + pizzaId, {
            favorite
        }, {withCredentials:true})
            .then(res => {
                console.log(res)
                histo.push("/account")
            })
            .catch(err=>{
                console.log(err)
            }); 
    }, [])*/
    

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
                    <>
                        {(p.idCliente === userId) &&
                            <div key={idx}>
                                <div className="container">
                                    <div className="row justify-content-between">
                                        <div className="col-6">
                                            <p>
                                                {(p.createdAt).substring(0,10)}
                                            </p>
                                            <p>
                                                {p.size}
                                                {" - "+(p.toppings).toString()}
                                                {" - $"+p.price}
                                            </p>
                                        </div>
                                        <div className="col-2 form-check">
                                            <input className="form-check-input" type="checkbox" defaultChecked={p.favorite}/>
                                            <label className="form-check-label">Favorite</label>
                                        </div>
                                    </div>
                                    <hr></hr>
                                </div>
                            </div>
                        }
                    </>
                )
            })}  
        </div>
    )
}

export default PastOrders;