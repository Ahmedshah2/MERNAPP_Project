import React, { useContext, useState } from 'react';
import './custom.css';
import { CartContext } from '../../ContextCart/context';
import { GlobalContext } from '../../../Context/context';
import { decodeToken } from 'react-jwt';
import axios from 'axios';



export default function CustomCart() {

    const { cart_state, cart_dispatch } = useContext(CartContext)
    console.log(cart_state);
    const { state } = useContext(GlobalContext);
    const currentUser = decodeToken(state.token);




    const [customerAddress, setCustomerAddress] = useState('');
    const [customerContact, setCustomerContact] = useState('');
    const [isPlacingOrder, setIsPlacingOrder] = useState(false); // New state variable
    const clearCart = () => {
        cart_dispatch({
            type: "CLEAR_CART"
        });
        localStorage.removeItem('cart');
    }



    const incrementQuantity = () => {
        useContext(cart_state.quantity + 1);
    };

    const decrementQuantity = () => {
        if (cart_state.quantity > 1) {
            useContext(cart_state.quantity - 1);
        }
    };




    const placeOrder = () => {
        if (!cart_state.cart || !customerAddress || !customerContact) {
            alert('Cart or Fields are empty');
        } else {
            setIsPlacingOrder(true);

            const payload = {
                customerName: currentUser.username,
                customerId: currentUser.id,
                customerEmail: currentUser.email,
                customerAddress: customerAddress,
                customerContact: customerContact,
                order: cart_state.cart,
            };

            axios
                .post('/api/placeorder', payload)
                .then((json) => {
                    console.log(json.data);
                })
                .catch((err) => {
                    console.log(err.message);
                })
                .finally(() => {
                    setIsPlacingOrder(false);
                    cart_dispatch({
                        type: "CLEAR_CART"
                    });
                    localStorage.removeItem('cart');
                    window.location.reload()
                    alert("Your Order is Placed")
                    cart_state.drop
                });
        }
    };

    // const removeProductFromLocalStorage = (productId) => {
    //     const existingCart = JSON.parse(localStorage.getItem('cart'));

    //     const productIndex = existingCart.findIndex((product) => product.id === productId);

    //     existingCart.splice(productIndex, 1);

    //     localStorage.setItem('cart', JSON.stringify(existingCart));

    // }
    const totalSum = cart_state?.cart?.reduce((accumulator, currentValue) => {
        const priceAsNumber = parseFloat(currentValue.price); // Convert price to a number
        return accumulator + priceAsNumber;
    }, 0);
    return (
        <div className="CartContainer">
            <div className="Header">
                <h3 className="Heading">Shopping Cart</h3>
                <div className='clear-cart-button mb-2' onClick={clearCart}>
                    Clear Cart
                </div>
            </div>
            {
                cart_state?.cart?.map((val, key) => (


                    <div key={key} className="Cart-Items itemsMobile">
                        <div>
                            <img src={val.thumbnail} alt='CartProduct' style={{ height: "120px" }} />
                        </div>
                        <div className="about">
                            <h2 className="title">{val.productname}</h2>
                            <h3 className="subtitle">{val.category} | {val.brand}</h3>
                        </div>
                        <div className="counter">
                            {/* <div className="cssbutton" onClick={incrementQuantity}>+</div> */}
                            <div className="count">Quantity: {val.quantity}</div>
                            {/* <div className="cssbutton" onClick={decrementQuantity}>-</div> */}
                        </div>
                        <div className="prices">
                            <div className="amount">{val.price * val.quantity} PKR</div>
                            {/* <div className="remove" onClick={console.log(val._id)}><u>Remove</u></div> */}
                        </div>
                    </div>
                ))}
            <hr className='mt-5' />
            <div className="checkout mt-5">
                <div className="total">
                    <div>
                        <div className="Subtotal">Sub-Total</div>
                    </div>
                    <div className="Subtotal">: {totalSum} PKR</div>
                </div>
                <div className='mt-4'>
                    <label>Address:</label>
                    <input
                        type='text'
                        className='form-control'
                        value={customerAddress}
                        onChange={(e) => setCustomerAddress(e.target.value)}
                    />
                </div>

                <div className='mt-4'>
                    <label>Contact Number:</label>
                    <input
                        type='text'
                        className='form-control'
                        value={customerContact}
                        onChange={(e) => setCustomerContact(e.target.value)}
                    />
                </div>
                <button
                    className='button clear-cart-button'
                    onClick={placeOrder}
                    disabled={isPlacingOrder}
                >
                    {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
                </button>
            </div>
        </div >
    )
}

