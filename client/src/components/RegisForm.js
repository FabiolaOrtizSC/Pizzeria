import axios from 'axios';
import '../style/Style.css';
import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import NavRegis from './NavRegis';

const RegisForm = () => {

    const histo = useHistory();

    const [errors, setErrors] = useState({}); 

    const [firstName,setFirstName] = useState('')
    const [lastName,setLastName] = useState('')
    const [email,setEmail] = useState('')
    const [address,setAddress] = useState('')
    const [city,setCity] = useState('')
    const [state,setState] = useState('Central')
    const [password,setPassword] = useState('')
    const [confirmPassword,setConfirmPassword] = useState('')

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/registro', {
            firstName, lastName, email, address, city, state, password, confirmPassword
        }, {withCredentials:true})
        .then((res)=>{
            console.log(res)
            localStorage.setItem("idUsuario",res.data.user._id);
            histo.push("/home")
        }).catch((err)=>{
            console.log(err)
            setErrors(err.response.data.errors);
        })
    }

    return (
        <div>
            <NavRegis />
            <h1 className='titulo fw-bolder text-center mb-4'>Welcome to Fabi's Pizza!</h1>
            <form onSubmit={submitHandler} className='container w-75'>
                <div className="row g-3 mb-3">
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" placeholder="First Name"
                            onChange={(e) => { setFirstName(e.target.value) }}/>
                            <label htmlFor="floatingInput">First Name</label>
                        </div>
                        {errors.firstName && <div className="col-sm-12"><small><span className="text-danger">{errors.firstName.message}</span></small></div>}
                    </div>
                    <div className="col">
                        <div className="form-floating">
                            <input type="text" className="form-control" placeholder="Last Name"
                            onChange={(e)=>setLastName(e.target.value)}/>
                            <label htmlFor="floatingInput">Last Name</label>
                        </div>
                        {errors.lastName && <div className="col-sm-12"><small><span className="text-danger">{errors.lastName.message}</span></small></div>}
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" placeholder="name@example.com"
                    value={email} onChange={(e) => { setEmail(e.target.value) }}/>
                    <label htmlFor="floatingInput">Email</label>
                    {errors.email && <div className="col-sm-12"><small><span className="text-danger">{errors.email.message}</span></small></div>}
                </div>
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" placeholder="Address"
                    onChange={(e)=>setAddress(e.target.value)}/>
                    <label htmlFor="floatingInput">Address</label>
                    {errors.address && <div className="col-sm-12"><small><span className="text-danger">{errors.address.message}</span></small></div>}
                </div>
                <div className="row">
                    <div className='col'>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" placeholder="City"
                            onChange={(e) => { setCity(e.target.value) }}/>
                            <label htmlFor="floatingInput">City</label>
                            {errors.city && <div className="col-sm-12"><small><span className="text-danger">{errors.city.message}</span></small></div>}
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
                            {errors.state && <div className="col-sm-12"><small><span className="text-danger">{errors.state.message}</span></small></div>}
                        </div>
                    </div>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                    onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                    {errors.password && <div className="col-sm-12"><small><span className="text-danger">{errors.password.message}</span></small></div>}
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" placeholder="Confirm"
                    onChange={(e)=>setConfirmPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Confirm</label>
                    {errors.confirmPassword && <div className="col-sm-12"><small><span className="text-danger">{errors.confirmPassword.message}</span></small></div>}
                </div>
                <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-danger">Sign in</button>
                </div>
            </form>
        </div>
    )
}

export default RegisForm;