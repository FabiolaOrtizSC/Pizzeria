import React from 'react'
import NavBar from '../components/NavBar';

const Prices = () => {

    return (
        <div>
            <NavBar/>
            <h1 className='titulo fw-bolder text-center mb-4'>Prices</h1>
            <div className="container">
                <div className="row row-cols-1 row-cols-md-2 g-4">
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title text-danger fw-bolder">Sizes</h5>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Large</span></div>
                                    <div className="col-2"><span>$ 9.95</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Medium</span></div>
                                    <div className="col-2"><span>$ 7.95</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Small</span></div>
                                    <div className="col-2"><span>$ 5.95</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title text-danger fw-bolder">Crusts</h5>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Thin Crust</span></div>
                                    <div className="col-2"><span>$ 2.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Stuffed Crust</span></div>
                                    <div className="col-2"><span>$ 2.25</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Cheese Crust</span></div>
                                    <div className="col-2"><span>$ 2.50</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Thick Crust</span></div>
                                    <div className="col-2"><span>$ 3.00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container margen-arriba">
                <div className="card mb-3">
                    <div className="card-body">
                        <h5 className="card-title text-danger fw-bolder">Toppings</h5>
                        <div className="row row-cols-1 row-cols-md-2 g-4">
                            <div className="col">
                            <div className="row justify-content-between">
                                    <div className="col-6"><span>Peperonni</span></div>
                                    <div className="col-2"><span>$ 5.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Tomato</span></div>
                                    <div className="col-2"><span>$ 5.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Onion</span></div>
                                    <div className="col-2"><span>$ 5.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Arugula</span></div>
                                    <div className="col-2"><span>$ 5.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Pineapple</span></div>
                                    <div className="col-2"><span>$ 5.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Mushroom</span></div>
                                    <div className="col-2"><span>$ 6.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Pepper</span></div>
                                    <div className="col-2"><span>$ 6.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Bacon</span></div>
                                    <div className="col-2"><span>$ 6.00</span></div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Garlic</span></div>
                                    <div className="col-2"><span>$ 6.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Red Onion</span></div>
                                    <div className="col-2"><span>$ 6.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Chicken</span></div>
                                    <div className="col-2"><span>$ 6.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Olives</span></div>
                                    <div className="col-2"><span>$ 6.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Basil</span></div>
                                    <div className="col-2"><span>$ 7.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Broccoli</span></div>
                                    <div className="col-2"><span>$ 7.00</span></div>
                                </div>
                                <div className="row justify-content-between">
                                    <div className="col-6"><span>Oregano</span></div>
                                    <div className="col-2"><span>$ 1.00</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices;