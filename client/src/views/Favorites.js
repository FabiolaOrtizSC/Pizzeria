import axios from 'axios';
import NavBar from '../components/NavBar';
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const Favorites = () => {

    const [pizza, setPizza] = useState([]);

    const userId = localStorage.getItem("idUsuario");

    useEffect(() => {
        axios.get('http://localhost:8000/api/pizzas', {withCredentials:true})
            .then(res => {
                console.log(res);
                setPizza(res.data.allDaPizzas);
            })
    }, [])

    return (
        <div>
            <NavBar/>
            <h1 className='titulo fw-bolder text-center mb-4'>Favorites</h1>
            {pizza.map((p, idx)=>{
                return (
                    <div key={idx}>  
                        {(p.idCliente === userId) && (p.favorite === true) && 
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
                                        <div className="col-2">
                                            <Link to={"/reorder/"+ p._id } className="btn btn-danger">Re-Order This Pizza</Link>
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

export default Favorites;