import React from 'react';
import './OrderConfirmation.css';

export const OrderConfirmation = () => {
    return (
        <div className="order-confirmation-container">
            <h2 className="order-confirmation-message">Order Confirmation</h2>
            <p className="order-confirmation-details">Thank you for purchasing tickets!</p>
            <p className="order-confirmation-details">Your order has been confirmed.</p>
            <p className="order-confirmation-details">
                An email with the details of your order will be sent to you shortly.
            </p>
        </div>
    );
};