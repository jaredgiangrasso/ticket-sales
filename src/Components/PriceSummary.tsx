import React, { useState, useContext } from 'react';
import './PriceSummary.css';
import { CartContext } from '../Context';
import { CartItem, PriceSummaryProps } from '../types';
import { formatToUSD } from '../utils';

const calculateTotal = (cartItems: CartItem[]): number => cartItems.reduce((accu, curr) => accu + (curr.price * curr.quantity), 0);

export const PriceSummary = ({ handleSubmitOrder }: PriceSummaryProps) => {
    const { cartItems } = useContext(CartContext);

    const [agreeToTerms, setAgreeToTerms] = useState(false);

    const total = calculateTotal(cartItems);
    const shippingCost = 10;
    const serviceFee = 5;
    const orderProcessingFee = 2;


    const handleAgreeToTermsChange = (e: React.FormEvent<HTMLInputElement>) => {
        setAgreeToTerms(e.currentTarget.checked);
    };

    return (
        <div className="price-summary-container">
            <h2>Checkout Total</h2>
            <div className="price-summary-total">
                <p>Total: {formatToUSD(total)}</p>
                <p>Shipping Cost: {formatToUSD(shippingCost)}</p>
                <p>Service Fee: {formatToUSD(serviceFee)}</p>
                <p>Order Processing Fee: {formatToUSD(orderProcessingFee)}</p>
            </div>
            <div className="terms-of-use">
                <label htmlFor="agreeCheckbox">
                    <input
                        type="checkbox"
                        id="agreeCheckbox"
                        checked={agreeToTerms}
                        onChange={handleAgreeToTermsChange}
                    />
                    I agree to the terms of use
                </label>
            </div>
            <button
                className="submit-btn"
                disabled={!agreeToTerms}
                type="submit"
            >
                Submit Order
            </button>
        </div>
    );
};