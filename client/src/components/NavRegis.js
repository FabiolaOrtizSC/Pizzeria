import React from 'react'
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";

const NavRegis = () => {
    return (
        <nav className="navbar navbar-expand-lg fondo-rojo mb-4">
            <div className="container-fluid text-white">
                <h5 className='text-white margen-abajo-cero'><FontAwesomeIcon icon={faPizzaSlice}/> Fabi's Pizza</h5>
                <div className="align-items-end" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/login' className="nav-link"><span className='text-white'>Already Have an Account? Login</span></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavRegis;