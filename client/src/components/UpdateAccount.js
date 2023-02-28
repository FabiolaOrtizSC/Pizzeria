import axios from 'axios';
import { useHistory } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const UpdateAccount = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')

    const userId = localStorage.getItem("idUsuario");

    const histo = useHistory();

    useEffect(() => {
        axios.get('http://localhost:8000/api/user/' + userId, {withCredentials:true})
            .then(res => {
                console.log(res);
                setFirstName(res.data.oneSingleUsuario.firstName);
                setLastName(res.data.oneSingleUsuario.lastName);
                setEmail(res.data.oneSingleUsuario.email);
                setAddress(res.data.oneSingleUsuario.address);
                setCity(res.data.oneSingleUsuario.city);
                setState(res.data.oneSingleUsuario.state);
            })
    }, [userId])

    const updatePizza = e => {
        axios.put('http://localhost:8000/api/user/update/' + userId, {
            firstName, lastName, email, address, city, state
        }, {withCredentials:true})
            .then(res => {
                console.log(res)
                histo.push("/account")
            })
            .catch(err=>{
                console.log(err)
            }); 
    }
    
    return (
        <div>
            <h1 className='titulo fw-bolder text-center mb-4'>Account Info</h1>
            <form onSubmit={updatePizza} className='container'>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="First Name"
                    value={firstName} onChange={(e) => { setFirstName(e.target.value) }}/>
                    <label htmlFor="floatingInput">First Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Last Name"
                    value={lastName} onChange={(e) => { setLastName(e.target.value) }}/>
                    <label htmlFor="floatingInput">Last Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                    value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Address"
                    value={address} onChange={(e) => { setAddress(e.target.value) }}/>
                    <label htmlFor="floatingInput">Address</label>
                </div>
                <div className="row">
                    <div className='col'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" id="floatingInput" placeholder="City"
                            value={city} onChange={(e) => { setCity(e.target.value) }}/>
                            <label htmlFor="floatingInput">City</label>
                        </div>
                    </div>
                    <div className="col">
                        <div class="form-floating">
                            <select class="form-select" id="floatingSelect" name="state" value={state} onChange={(e) => { setState(e.target.value) }}>
                                <option value="Asuncion">Asuncion</option>
                                <option value="San Lorenzo">San Lorenzo</option>
                                <option value="Luque">Luque</option>
                            </select>
                            <label htmlFor="floatingSelect">State</label>
                        </div>
                    </div>
                </div>
                <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-danger">Update</button>
                </div>
            </form>
        </div>
    )
}

export default UpdateAccount;