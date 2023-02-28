import axios from 'axios'
import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
import NavLogin from './NavLogin';

const LoginForm = () => {
    
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const histo = useHistory()

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post('http://localhost:8000/api/login', {
            email, password
        }, {withCredentials:true, credentials:'include'})
        .then((res)=>{
            console.log(res)
            localStorage.setItem("idUsuario",res.data.user._id);
            histo.push('/home')
        }).catch((err)=>{
            console.log(err)
        })
    }

    return (
        <div>
            <NavLogin />
            <h1 className='titulo fw-bolder text-center mb-4'>Welcome Back!</h1>
            <form onSubmit={submitHandler} className='container w-75'>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" onChange={(e)=>setEmail(e.target.value)}/>
                    <label htmlFor="floatingInput">Email</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/>
                    <label htmlFor="floatingPassword">Password</label>
                </div>
                <div className='d-grid gap-2'>
                    <button type="submit" className="btn btn-danger">Log In</button>
                </div>
            </form>
        </div>
    )
}

export default LoginForm;