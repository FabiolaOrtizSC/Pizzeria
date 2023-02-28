import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import NavBar from '../components/NavBar';

const ReOrder = () => {
    const histo = useHistory();
    const [pizza, setPizza] = useState({
        method: "CarryOut",
        size: "Large",
        crust: "Thin Crust",
        qty: "1",
        favorite1: false,
        favorite2: false,
        favorite3: false,
        favorite4: false,
        favorite5: false,
        price: "20.99",
        favorite: true
    });

    const onSubmitHandler = e => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/pizzas/new', {
            idCliente: localStorage.getItem("idUsuario"),
            method: pizza.method,
            size: pizza.size,
            crust: pizza.crust,
            qty: pizza.qty,
            favorite1: pizza.favorite1,
            favorite2: pizza.favorite2,
            favorite3: pizza.favorite3,
            favorite4: pizza.favorite4,
            favorite5: pizza.favorite5,
            price: pizza.price,
            favorite: pizza.favorite
        })
        .then(res=>{
            console.log(res.data.newlyCreatedPizza);
            histo.push("/ticket/" + res.data.newlyCreatedPizza._id);
        })
        .catch(err=>{
            console.log(err)
        });
    }

    return (
        <div>
            <NavBar/>
            <h1 className='titulo fw-bolder text-center mb-4'>Craft A Pizza</h1>
            <form onSubmit={onSubmitHandler} className='container w-75'>
                <div class="form-floating mb-3">
                    <select class="form-select" id="floatingSelect" name="state" onChange = {(e)=>setPizza({...pizza, method: e.target.value})}>
                        <option value="Carry Out">Carry Out</option>
                        <option value="Delivery">Delivery</option>
                    </select>
                    <label htmlFor="floatingSelect">Method</label>
                </div>
                <div className="row g-3 mb-3">
                    <div className="col">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" value={pizza.size} onChange = {(e)=>setPizza({...pizza, size: e.target.value})}>
                                <option value="Large">Large</option>
                                <option value="Medium">Medium</option>
                                <option value="Small">Small</option>
                            </select>
                            <label htmlFor="floatingSelect">Size</label>
                        </div>
                    </div>
                    <div className="col">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" value={pizza.crust} onChange = {(e)=>setPizza({...pizza, crust: e.target.value})}>
                                <option value="Thin Crust">Thin Crust</option>
                                <option value="Stuffed Crust">Stuffed Crust</option>
                                <option value="Cheese Crust">Cheese Crust</option>
                                <option value="Thick Crust">Thick Crust</option>
                            </select>
                            <label htmlFor="floatingSelect">Crust</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="number" min="1" className="form-control" placeholder="qty"
                            onChange = {(e)=>setPizza({...pizza, qty: e.target.value})} value={pizza.qty}/>
                            <label htmlFor="floatingInput">Qty</label>
                        </div>
                    </div>
                </div>
                <div class="card mb-3">
                    <div class="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" defaultChecked={pizza.favorite1} onChange = {(e)=>setPizza({...pizza, favorite1: e.target.checked})}/>
                                    <label className="form-check-label">Pepperoni</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" defaultChecked={pizza.favorite2} onChange = {(e)=>setPizza({...pizza, favorite2: e.target.checked})}/>
                                    <label className="form-check-label">Tomato</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" defaultChecked={pizza.favorite3} onChange = {(e)=>setPizza({...pizza, favorite3: e.target.checked})}/>
                                    <label className="form-check-label">Onion</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" defaultChecked={pizza.favorite4} onChange = {(e)=>setPizza({...pizza, favorite4: e.target.checked})}/>
                                    <label className="form-check-label">Arugula</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" defaultChecked={pizza.favorite5} onChange = {(e)=>setPizza({...pizza, favorite5: e.target.checked})}/>
                                    <label className="form-check-label">Pineapple</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Mushroom</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Pepper</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Bacon</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Garlic</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Red Onion</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Chicken</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Olives</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Basil</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Broccoli</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox"/>
                                    <label className="form-check-label">Oregano</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-danger">Add To Order</button>
                </div>
            </form>
        </div>
    )
}

export default ReOrder;