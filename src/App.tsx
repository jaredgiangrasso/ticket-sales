import React from 'react';
import './App.css';
import { Checkout, TicketList, OrderConfirmation } from './Components';
import { CartProvider } from './Context';
import { VIEWS } from './constants';

function App() {
  // In a real application, we would of course move navigation logic to a routing component/context
  // or use a pre-built routing package like React Router. This routing would of course also
  // use the URL for navigation state. For now, we are managing navigation state with React.
  const [currentView, setCurrentView] = React.useState(VIEWS.ticketList);

  const Routes = () => {
    switch (currentView) {
      case VIEWS.checkout:
        return <Checkout setCurrentView={setCurrentView} />
      case VIEWS.confirmation:
        return <OrderConfirmation />
      default:
        return <TicketList setCurrentView={setCurrentView} />

    }
  }

  return (
    <div className="App">
      <CartProvider>
        <Routes />
      </CartProvider>
    </div>
  );
}

export default App;
