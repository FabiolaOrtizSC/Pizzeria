import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from "react-router-dom";
import NavBar from '../components/NavBar';

const ReOrder = () => {

    const histo = useHistory();

    const { id } = useParams();

    const [idCliente,setIdCliente] = useState('');
    const [method,setMethod] = useState('');
    const [size,setSize] = useState('');
    const [crust,setCrust] = useState('');
    const [qty,setQty] = useState('');
    const [toppings,setToppings] = useState([]);
    const [price,setPrice] = useState('');
    const [favorite,setFavorite] = useState(false);



    useEffect(() => {
        axios.get('http://localhost:8000/api/pizzas/ticket/' + id, {withCredentials:true})
            .then(res => {
                console.log(res);
                setIdCliente(res.data.oneSinglePizza.idCliente);
                setMethod(res.data.oneSinglePizza.method);
                setSize(res.data.oneSinglePizza.size);
                setCrust(res.data.oneSinglePizza.crust);
                setQty(res.data.oneSinglePizza.qty);
                setToppings(res.data.oneSinglePizza.toppings);
                setPrice(res.data.oneSinglePizza.price);
                setFavorite(res.data.oneSinglePizza.favorite);
                
            })
    }, [id])


    const createPizza = e => {
        axios.post('http://localhost:8000/api/pizzas/new', {
            idCliente, method, size, crust, qty, toppings, price, favorite
        })
        .then(res => {
            console.log(res.data.newlyCreatedPizza);
            histo.push("/ticket/" + id);
        })
        .catch(err=>{
            console.log(err)
        }); 
    }

    
    return (
        <div>
            <NavBar/>
            <h1 className='titulo fw-bolder text-center mb-4'>Craft A Pizza</h1>
            <form onSubmit={createPizza} className='container w-75'>
                <div className="form-floating mb-3">
                    <select className="form-select" id="floatingSelect" name="method" value={method} onChange={(e) => { setMethod(e.target.value) }}>
                        <option value="Carry Out">Carry Out</option>
                        <option value="Delivery">Delivery</option>
                    </select>
                    <label htmlFor="floatingSelect">Method</label>
                </div>
                <div className="row g-3 mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelect" value={size} onChange={(e) => { setSize(e.target.value) }}>
                                <option value="Large">Large</option>
                                <option value="Medium">Medium</option>
                                <option value="Small">Small</option>
                            </select>
                            <label htmlFor="floatingSelect">Size</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelect" value={crust} onChange={(e) => { setCrust(e.target.value) }}>
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
                            value={qty} onChange={(e) => { setQty(e.target.value) }}/>
                            <label htmlFor="floatingInput">Qty</label>
                        </div>
                    </div>
                </div>
                <div className="card mb-3">
                    <div className="card-body">
                        <div className="row">
                            <div className="col">
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Pepperoni" defaultChecked={toppings.includes('Pepperoni')}/>
                                    <label className="form-check-label">Pepperoni</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Tomato"/>
                                    <label className="form-check-label">Tomato</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Onion"/>
                                    <label className="form-check-label">Onion</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Arugula"/>
                                    <label className="form-check-label">Arugula</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Pineapple"/>
                                    <label className="form-check-label">Pineapple</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Mushroom"/>
                                    <label className="form-check-label">Mushroom</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Pepper"/>
                                    <label className="form-check-label">Pepper</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Bacon"/>
                                    <label className="form-check-label">Bacon</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Garlic"/>
                                    <label className="form-check-label">Garlic</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Red Onion"/>
                                    <label className="form-check-label">Red Onion</label>
                                </div>
                            </div>
                            <div className="col">
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Chicken"/>
                                    <label className="form-check-label">Chicken</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Olives"/>
                                    <label className="form-check-label">Olives</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Basil"/>
                                    <label className="form-check-label">Basil</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" value="Broccoli" />
                                    <label className="form-check-label">Broccoli</label>
                                </div>
                                <div className="col form-check">
                                    <input className="form-check-input" type="checkbox" defaultChecked={toppings.includes('Oregano')}/>
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