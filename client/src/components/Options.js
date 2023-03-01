import { Link } from "react-router-dom";
import pizzaPepperoni from '../img/pizzaPepperoni.png';
import pizzaNapolitana from '../img/pizzaNapolitana.png';
import pizzaJamon from '../img/pizzaJamon.png';

const Options = () => {
    
    return (
        <div>
            <h1 className='titulo fw-bolder text-center mb-4'>Quick Options</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="col">
                        <div className="card h-100 bg-light">
                            <img src={pizzaPepperoni} className="card-img-top img-responsive imagen-altura" alt="pepperoni"/>
                            <div className="card-body">
                                <h5 className="card-title">New Order</h5>
                                <p className="card-text">Create your pizza as you like! Choose the type of crust, the size and the toppings.</p>
                            </div>
                            <div className="card-text">
                                <div className="card-body">
                                    <Link to="/order" className="btn btn-danger">Go To New Order</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-light">
                            <img src={pizzaJamon} className="card-img-top img-responsive imagen-altura" alt="pepperoni"/>
                            <div className="card-body">
                                <h5 className="card-title">Re-Order My Fave</h5>
                                <p className="card-text">Your favorite pizza is back!</p>
                            </div>
                            <div className="card-text">
                                <div className="card-body">
                                <Link to="/favorites" className="btn btn-danger">Go To Re-Order My Fave</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100 bg-light">
                            <img src={pizzaNapolitana} className="card-img-top img-responsive imagen-altura" alt="pepperoni"/>
                            <div className="card-body">
                                <h5 className="card-title">Surprise Me</h5>
                                <p className="card-text">Want to eat a pizza but don't know what toppings to choose? We do the magic for you.</p>
                            </div>
                            <div className="card-text">
                                <div className="card-body">
                                <Link to="/surpriseme" className="btn btn-danger">Go To Surprise Me</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Options;