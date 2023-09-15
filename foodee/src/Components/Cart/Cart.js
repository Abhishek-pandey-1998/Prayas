import Modal from "../UI/Modal";
import '../Cart/Cart.css';
import { useContext } from "react";
import CartContext from '../../Store/cart-context';
import CartInput from "../UI/CartInput";

function Cart(props){

  const cartCtx = useContext(CartContext);

  

  const cartItems = (
    <>
        {cartCtx.items.map((item) => (
          <div className="cartItems">
            <div className="itemDetails">
              <div>{item.dish}</div>
              <span>
                ₹{item.price} x <label>{item.amount}</label>
              </span>
            </div>
            <span className="control">
            <CartInput item={item}/>
            </span>
          </div>
        ))}
    </>
    );

    
  
    return (
      <Modal onClick={props.onClose}>
        <span><center><h1>~ Orders ~</h1></center></span>
        {cartItems}
        <div className="totalAmount">
          <span>Total Amount</span>
          <span>{cartCtx.totalAmount}</span>
        </div>
        <div className="cartFormControls">
          <button onClick={props.onClose}>Close</button>
          <button>Order</button>
        </div>
      </Modal>
    );
}

export default Cart;