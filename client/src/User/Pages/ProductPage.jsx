import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { CartContext, } from '../ContextCart/context'
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function ProductPage() {

    const { _id } = useParams()
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    const { cart_state, cart_dispatch } = useContext(CartContext)

    useEffect(() => {
        console.log(cart_state)
        console.log(cart_dispatch)

        axios.get(`/api/getproductbyid/?_id=${_id}`)
            .then(json => setProduct(json.data.products))
            .catch(err => console.log(err))
    }, [])

    const addtocart = () => {
        const payload = { ...product, quantity }
        cart_dispatch({
            type: "ADD_TO_CART",
            payload
        })

    }

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-6">
                    <Carousel prevIcon={
                        <span
                            style={{
                                backgroundColor: '#ff0000',
                                color: '#fff',
                                borderRadius: '50%',
                                padding: '10px',
                            }}
                            className="carousel-control-prev-icon"
                            aria-hidden="true"
                        />
                    }
                        nextIcon={
                            <span
                                style={{
                                    backgroundColor: '#ff0000',
                                    color: '#fff',
                                    borderRadius: '50%',
                                    padding: '10px',
                                }}
                                className="carousel-control-next-icon"
                                aria-hidden="true"
                            />
                        }
                    >
                        <Carousel.Item>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    height: '300px', // Set the desired height
                                }}
                            >
                                <img
                                    src={product.thumbnail}
                                    alt='Thumbnail'
                                    className="img-fluid"
                                    style={{
                                        maxWidth: '100%',
                                        maxHeight: '100%',
                                    }}
                                />
                            </div>
                        </Carousel.Item>

                        {product?.images?.map((val, key) => (
                            <Carousel.Item key={key}>
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        height: '300px', // Set the desired height
                                    }}
                                >
                                    <img
                                        src={val}
                                        alt={`Product ${key + 1}`}
                                        className="img-fluid"
                                        style={{
                                            maxWidth: '100%',
                                            maxHeight: '100%',
                                        }}
                                    />
                                </div>
                            </Carousel.Item>
                        ))}
                    </Carousel>
                </div>
                <div className="col-md-6">
                    <h2>{product.productname}</h2>
                    <h2>{product.price}</h2>
                    <p className="text-secondary">{product.description}</p>

                    <div className="d-flex justify-content-center align-items-center bg-light py-3 rounded border border-secondary">
                        <button
                            className="btn btn-dark"
                            disabled={quantity <= 1}
                            onClick={() => setQuantity(quantity - 1)}
                        >
                            -
                        </button>
                        <span className="mx-3">{quantity}</span>
                        <button
                            className="btn btn-dark"
                            onClick={() => setQuantity(quantity + 1)}
                        >
                            +
                        </button>
                    </div>

                    <div className="mt-3">
                        <button
                            className="w-100 btn btn-dark"
                            onClick={addtocart}
                        >
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}