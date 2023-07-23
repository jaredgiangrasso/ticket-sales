export interface Performance {
    id: string,
    showName: string;
    description: string;
    price: number;
}

export interface TicketListProps {
    setCurrentView: React.Dispatch<React.SetStateAction<string>>
}

export interface CheckoutProps {
    setCurrentView: React.Dispatch<React.SetStateAction<string>>
}

export interface PriceSummaryProps {
    handleSubmitOrder: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface CartItem extends Performance {
    quantity: number;
}

export interface CartContextValue {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
}