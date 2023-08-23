import React from 'react';
import '../pages/style.css';
import axios from 'axios';

export default function OrderCard({ order }) {
    const cancelorder = async (_id) => {
        console.log("Ïn Running")
        const payload = { _id }
        let config = {
            method: 'delete',
            url: '/api/deleteorder',
            data: payload
        };


        axios(config).then(json => console.log(json.data)).finally(window.location.reload()).catch(err => alert(err.message))
    }
    const updatestatus = async (_id, orderStatus) => {
        const payload = { _id, orderStatus }

        axios.put("/api/updatestatus", payload).then(json => console.log(json.data)).finally(window.location.reload()).catch(err => alert(err.message))
    }




    return (
        <div className="order-card">
            <div className="customer-details">
                <h3 className="customer-name">Customer Name: {order.customerName}</h3>
                <p className="customer-email">Customer Email: {order.customerEmail}</p>
                <p className="customer-contact">Customer Contact: {order.customerContact}</p>
                <p className="customer-address">Customer Address: {order.customerAddress}</p>
            </div>
            <div className="order-details">
                <h4 className="order-heading">Order Details:</h4>
                <ul className="product-list">
                    {order?.order?.map((product, index) => (
                        <li key={index} className="product-item">
                            <img src={product.thumbnail} alt="Thumbnail" className="product-thumbnail" />
                            <div className="product-info">
                                <p className="product-name">Product Name: {product.productname}</p>
                                <p className="product-id">Product ID: {product._id}</p>
                                <p className="product-quantity">Quantity: {product.quantity}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <button className='clear-cart-button mb-2' onClick={cancelorder.bind(null, order._id)}>
                Cancel Order
            </button>
            <button className={order.orderStatus == "Shipped" ? "btn btn-secondary ms-4" : "btn btn-success ms-4"} onClick={updatestatus.bind(null, order._id, "Shipped")}>
                {order.orderStatus == "Shipped" ? "Order Shipped" : "Mark Shipped"}
            </button>
        </div>
    );
}
