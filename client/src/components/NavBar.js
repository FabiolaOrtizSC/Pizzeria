import React from 'react'
import axios from 'axios';
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {

    const logOut = () => {
        axios.get('http://localhost:8000/api/logout',{}
        ,{withCredentials: true})
        .then(res=>{
            console.log(res);
            localStorage.clear();
        })
        .catch(err=>{
            console.log(err)
        });
    }

    return (
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
                        <Link to='/order' className="nav-link"><span className='text-white'>Order (0)</span></Link>
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
    )
}

export default NavBar;