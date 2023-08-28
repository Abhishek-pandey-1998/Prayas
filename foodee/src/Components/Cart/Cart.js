import Modal from "../UI/Modal";
import '../Cart/Cart.css';
import { useContext } from "react";
import CartContext from '../../Store/cart-context';

function Cart(props){

  const cartCtx = useContext(CartContext);

  console.log(cartCtx);
  const cartItems = (
    <>
        {cartCtx.items.map((item) => (
          <div className="cartItems">
            <div>{item.dish}</div>
            <div>₹{item.price}</div>
            <div>{item.amount}</div>
          </div>
        ))}
    </>
    );

    
  
    return (
      <Modal onClick={props.onClose}>
        {cartItems}
        <div className="totalAmount">
          <span><h2>Total Amount</h2></span>
          <span>{cartCtx.totalAmount}</span>
        </div>
        <div>
          <button onClick={props.onClose}>Close</button>
          <button>Order</button>
        </div>
      </Modal>
    );
}

export default Cart;