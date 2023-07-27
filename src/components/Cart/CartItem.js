import classes from './CartItem.module.css';

const CartItem = props => {
  const price = `₩${props.price.toFixed(2)}`;

  return (
    <li className={classes['cart-item']}>
      <div>
        <h6>{props.name}</h6>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}>X {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
