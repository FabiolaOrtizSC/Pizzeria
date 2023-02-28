import axios from 'axios';
import { Link, useParams, useHistory } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const Ticket = () => {

    const [pizza, setPizza] = useState(null);
    const [pizzas, setPizzas] = useState([]);
    const histo = useHistory();
    // Usamos los parametros de la URL para hacer la consulta a la API
    const { id } = useParams();
    useEffect(() => {
        axios.get("http://localhost:8000/api/pizzas/ticket/" + id, {withCredentials:true})
        .then(res => {
            console.log(res.data.oneSinglePizza);
            setPizza(res.data.oneSinglePizza);
        })
        .catch(err => console.log(err))
    }, [id]);

    const deletePizza = e => {
        axios.delete('http://localhost:8000/api/pizzas/delete/' + id, {withCredentials:true})
            .then(res=>{
                setPizzas(pizzas.filter(pizzas => pizzas._id !== id))
                histo.push("/order")
            })
    }

    const logOut = () => {
        axios.get('http://localhost:8000/api/logout')
        .then(res=>{
            console.log(res);
        })
        .catch(err=>{
            console.log(err)
        });
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg fondo-rojo mb-4">
                <div className="container-fluid text-white">
                <h5 className='text-white margen-abajo-cero'><FontAwesomeIcon icon={faPizzaSlice}/> Fabi's Pizza</h5>
                    <div className="align-items-end" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item ">
                            <Link to='/home' className="nav-link"><span className='text-white'>Home</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/prices' className="nav-link"><span className='text-white'>Prices</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/order' className="nav-link"><span className='text-white'>Order (1)</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/account' className="nav-link"><span className='text-white'>Account</span></Link>
                        </li>
                        <li className="nav-item ">
                            <Link to='/' className="nav-link" onClick={logOut}><span className='text-white'>Logout</span></Link>
                        </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <h1 className='titulo fw-bolder text-center mb-4'>Your Order</h1>
            {/* {Si la pizza no esta vacia entonces renderizamos} */}
            {pizza &&
                <div className='container w-75'>
                    <div className="card">
                        <div className="card-body">
                            <div className="row justify-content-between">
                                <div className="col-6">
                                    <li className="list-group-item"><span className='text-danger fw-bolder'>Method: </span></li>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="col-6">{pizza.method}</div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-1">
                                    <li className="list-group-item"><span className='text-danger fw-bolder'>Qty: </span></li>
                                    <ul className="list-group list-group-flush">
                                        <li className="list-group-item">
                                            <div className="col-6">{pizza.qty}</div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <li className="list-group-item"><span className='text-danger fw-bolder'>Size: </span></li>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                <div className="row justify-content-between">
                                    <div className="col-6">{pizza.size}</div>
                                    <div className="col-2 text-end">$5.00</div>
                                </div></li>
                            </ul>
                            <li className="list-group-item"><span className='text-danger fw-bolder'>Crust: </span></li>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                <div className="row justify-content-between">
                                    <div className="col-6">{pizza.crust}</div>
                                    <div className="col-2 text-end">$5.00</div>
                                </div></li>
                            </ul>
                            <li className="list-group-item"><span className='text-danger fw-bolder'>Toppings: </span></li>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">
                                    <div className="row justify-content-between">
                                        <div className="col-6">{(pizza.toppings).toString()}</div>
                                        <div className="col-2 text-end">{pizza.price}</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="card-footer text-bg-light text-end">
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item text-bg-light">
                                    <h6 className='margen-abajo-cero'>Total: $12.99</h6>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row g-3 mb-3 mt-1">
                        <div className="col d-grid gap-2">
                            <button className='btn btn-outline-danger' onClick={deletePizza}>Start Over</button>
                        </div>
                        <div className="col d-grid gap-2">
                            <button type="button" className="btn btn-danger">Purchase</button>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default Ticket;