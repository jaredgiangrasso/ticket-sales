import React, { useState } from 'react';
import './CreditCardForm.css';

export const CreditCardForm = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardHolder, setCardHolder] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvv, setCvv] = useState('');

    const handleCardNumberChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCardNumber(e.currentTarget.value);
    };

    const handleCardHolderChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCardHolder(e.currentTarget.value);
    };

    const handleExpiryDateChange = (e: React.FormEvent<HTMLInputElement>) => {
        setExpiryDate(e.currentTarget.value);
    };

    const handleCvvChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCvv(e.currentTarget.value);
    };

    return (
        <div className='credit-card-form-container'>
            <div className="form-group">
                <label htmlFor="cardNumber">Card Number</label>
                <input
                    type="text"
                    id="cardNumber"
                    className="form-control"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={16}
                    minLength={16}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="cardHolder">Card Holder</label>
                <input
                    type="text"
                    id="cardHolder"
                    className="form-control"
                    value={cardHolder}
                    onChange={handleCardHolderChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="expiryDate">Expiry Date</label>
                <input
                    type="text"
                    id="expiryDate"
                    className="form-control"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                    maxLength={5}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="cvv">CVV</label>
                <input
                    type="text"
                    id="cvv"
                    className="form-control"
                    value={cvv}
                    onChange={handleCvvChange}
                    maxLength={3}
                    minLength={3}
                    required
                />
            </div>
        </div>
    );
};