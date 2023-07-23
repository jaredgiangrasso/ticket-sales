import React, { useState, useContext } from 'react';
import './TicketList.css';
import { VIEWS, PERFORMANCES } from '../constants';
import { CartContext } from '../Context';
import { TicketListProps, Performance } from '../types';
import { formatToUSD } from '../utils';

export const TicketList = ({ setCurrentView }: TicketListProps) => {
    const [quantities, setQuantities] = useState<{ [key: string]: number }>({});
    const { addToCart } = useContext(CartContext);


    const handleQuantityChange = (event: React.FormEvent<HTMLInputElement>, showName: string) => {
        const newQuantities = { ...quantities };
        newQuantities[showName] = parseInt(event.currentTarget.value);
        setQuantities(newQuantities);
    };

    const handlePurchase = (ticket: Performance) => {
        const quantity = quantities[ticket.showName] || 0;
        if (quantity > 0) {
            addToCart({ ...ticket, quantity })
            setCurrentView(VIEWS.checkout);
        }
    };

    return (
        <div className="ticket-list-container">
            <h2>Tickets List</h2>
            <ul className="ticket-list">
                {PERFORMANCES.map((ticket, index) => (
                    <li key={index} className="ticket-item">
                        <div>
                            <h3>{ticket.showName}</h3>
                            <p>{ticket.description}</p>
                            <p>Price: {formatToUSD(ticket.price)}</p>
                            <input
                                type="number"
                                min="0"
                                className="quantity-input"
                                value={quantities[ticket.showName] || ''}
                                onChange={(e) => handleQuantityChange(e, ticket.showName)}
                            />
                            <button
                                className="purchase-btn"
                                onClick={() => handlePurchase(ticket)}
                            >
                                Purchase
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};