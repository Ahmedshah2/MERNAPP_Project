
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './style.css';
import OrderCard from '../components/OrderCard';

export default function Orders() {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        axios
            .get('/api/getallorders')
            .then((response) => {
                setOrders(response.data.orders); // Assuming the response contains an 'orders' array
            })
            .catch((error) => {
                console.error('Error fetching orders:', error);
            });
    }, []);

    return (
        <div className="orders-list">
            {orders.map((order, key) => (
                <OrderCard key={key} order={order} /> // Render the OrderCard component for each order
            ))}
        </div>
    );
}
