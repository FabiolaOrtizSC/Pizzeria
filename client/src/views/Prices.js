import React from 'react'
import NavBar from '../components/NavBar';

const Prices = ({priceSize, priceCrust, priceToppings1, priceToppings2}) => {

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
                                {priceSize.map((data, index) => (
                                    <div className="row justify-content-between" key={data.size}>
                                        <div className="col-6"><span>{data.size}</span></div>
                                        <div className="col-2"><span>$ {data.price}</span></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card h-100">
                            <div className="card-body">
                                <h5 className="card-title text-danger fw-bolder">Crusts</h5>
                                {priceCrust.map((data, index) => (
                                    <div className="row justify-content-between" key={data.crust}>
                                        <div className="col-6"><span>{data.crust}</span></div>
                                        <div className="col-2"><span>$ {data.price}</span></div>
                                    </div>
                                ))}
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
                                {priceToppings1.map((data, index) => (
                                    <div className="row justify-content-between" key={data.topping}>
                                        <div className="col-6"><span>{data.topping}</span></div>
                                        <div className="col-2"><span>$ {data.price}</span></div>
                                    </div>
                                ))}
                            </div>
                            <div className="col">
                                {priceToppings2.map((data, index) => (
                                    <div className="row justify-content-between" key={data.topping}>
                                        <div className="col-6"><span>{data.topping}</span></div>
                                        <div className="col-2"><span>$ {data.price}</span></div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Prices;