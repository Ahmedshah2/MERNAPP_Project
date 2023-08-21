
import React from 'react';
import '../pages/style.css';

export default function OrderCard({ order }) {
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
                    {order.order.map((product, index) => (
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
            <div className='clear-cart-button mb-2'>
                Mark Delivered
            </div>
        </div>
    );
}
