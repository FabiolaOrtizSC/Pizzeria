import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UpdateAccount = () => {

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('')

    const userId = localStorage.getItem("idUsuario");

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

    const histo = useHistory();

    const updateAccount = e => {
        e.preventDefault()
        axios.put('http://localhost:8000/api/user/update/' + userId, {
            firstName, lastName, email, address, city, state
        }, {withCredentials:true})
        .then(res => {
            console.log(res)
            histo.push('/account')
            toast.success('Update completed successfully!', {
                position: toast.POSITION.BOTTOM_RIGHT
            });
        })
        .catch(err=>{
            console.log(err)
        }); 
    }
    
    return (
        <div>
            <h1 className='titulo fw-bolder text-center mb-4'>Account Info</h1>
            <form onSubmit={updateAccount} className='container'>
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
                        <div className="form-floating">
                            <select className="form-select" id="floatingSelect" name="state" value={state} onChange={(e) => { setState(e.target.value) }}>
                                <option value="Central">Central</option>
                                <option value="Cordillera">Cordillera</option>
                                <option value="Paraguari">Paraguari</option>
                            </select>
                            <label htmlFor="floatingSelect">State</label>
                        </div>
                    </div>
                </div>
                <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-danger">Update</button>
                </div>
                <ToastContainer/>
            </form>
        </div>
    )
}

export default UpdateAccount;