// import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';


const HeaderCartButton = (props) => {

  const cartContext = useContext(CartContext);

  let qty =0;
  cartContext.items.forEach(item => {
    console.log(item)
    qty = qty + Number(item.quantity);
  })
  return (
    <button className={classes.button} onClick={props.onClick}>
    <span className={classes.icon}>
      {/* <CartIcon /> */}
    </span>
    <span>Your Cart</span>
    <span className={classes.badge}>{qty}</span>
  </button>
  );
};

export default HeaderCartButton;