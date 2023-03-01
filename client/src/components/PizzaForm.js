import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

const PizzaForm = () => {

    const histo = useHistory();

    const [checkedValues, setValue] = useState ([]);

    const handleChange = e => {
        
        const {value, checked} = e.target;
        if(checked){
            setValue(pre => [...pre, value])
        }else{
            setValue(pre => {
                return [...pre.filter(topping => topping !== value)]
            })
        }
    }

    console.log(checkedValues)

    const [pizza, setPizza] = useState({
        method: "CarryOut",
        size: "Large",
        crust: "Thin Crust",
        qty: "1",
        toppings: [],
        price: "0",
        favorite: false
    });

    const onSubmitHandler = e => {
        e.preventDefault()

        axios.post('http://localhost:8000/api/pizzas/new', {
            idCliente: localStorage.getItem("idUsuario"),
            method: pizza.method,
            size: pizza.size,
            crust: pizza.crust,
            qty: pizza.qty,
            toppings: checkedValues,
            price: pizza.price,
            favorite: pizza.favorite
        }, {withCredentials: true})
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
            <h1 className='titulo fw-bolder text-center mb-4'>Craft A Pizza</h1>
            <form onSubmit={onSubmitHandler} className='container w-75'>
                <div className="form-floating mb-3">
                    <select className="form-select" id="floatingSelect" name="state" onChange = {(e)=>setPizza({...pizza, method: e.target.value})}>
                        <option value="Carry Out">Carry Out</option>
                        <option value="Delivery">Delivery</option>
                    </select>
                    <label htmlFor="floatingSelect">Method</label>
                </div>
                <div className="row g-3 mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelect" onChange = {(e)=>setPizza({...pizza, size: e.target.value})}>
                                <option value="Large">Large</option>
                                <option value="Medium">Medium</option>
                                <option value="Small">Small</option>
                            </select>
                            <label htmlFor="floatingSelect">Size</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelect" onChange = {(e)=>setPizza({...pizza, crust: e.target.value})}>
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
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Pepperoni" onChange = {handleChange}/>
                                    <label className="form-check-label">Pepperoni</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Tomato" onChange = {handleChange}/>
                                    <label className="form-check-label">Tomato</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Onion" onChange = {handleChange}/>
                                    <label className="form-check-label">Onion</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Arugula" onChange = {handleChange}/>
                                    <label className="form-check-label">Arugula</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Pineapple" onChange = {handleChange}/>
                                    <label className="form-check-label">Pineapple</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Mushroom" onChange = {handleChange}/>
                                    <label className="form-check-label">Mushroom</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Pepper" onChange = {handleChange}/>
                                    <label className="form-check-label">Pepper</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Bacon" onChange = {handleChange}/>
                                    <label className="form-check-label">Bacon</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Garlic" onChange = {handleChange}/>
                                    <label className="form-check-label">Garlic</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Red Onion" onChange = {handleChange}/>
                                    <label className="form-check-label">Red Onion</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Chicken" onChange = {handleChange}/>
                                    <label className="form-check-label">Chicken</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Olives" onChange = {handleChange}/>
                                    <label className="form-check-label">Olives</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Basil" onChange = {handleChange}/>
                                    <label className="form-check-label">Basil</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Broccoli" onChange = {handleChange}/>
                                    <label className="form-check-label">Broccoli</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Oregano" onChange = {handleChange}/>
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

export default PizzaForm;