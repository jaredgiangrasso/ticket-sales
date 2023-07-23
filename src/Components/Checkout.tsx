import React from 'react';
import { PriceSummary } from './PriceSummary';
import { CreditCardForm } from './CreditCardForm';
import { CheckoutProps } from '../types';
import { VIEWS } from '../constants';
import './Checkout.css';

export const Checkout = ({ setCurrentView }: CheckoutProps) => {
    const handleSubmitOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // submission logic (e.g. perform validation, submit to server)
        setCurrentView(VIEWS.confirmation);
    };

    return (
        <form className="form-container" onSubmit={handleSubmitOrder}>
            <CreditCardForm />
            <PriceSummary handleSubmitOrder={handleSubmitOrder} />
        </form>
    )
}