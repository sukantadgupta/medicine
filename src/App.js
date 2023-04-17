
import {  useState } from 'react';
import Form from './Components/Form/Form';
import CartProvider from './store/CartProvider';
import Cart from './Components/Cart/cart';

function App() {

  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = () => {
  
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <CartProvider>
         {cartIsShown && <Cart onClose={hideCartHandler} />}
  <Form onShowCart={showCartHandler}/>
  </CartProvider>
  );
}

export default App;
