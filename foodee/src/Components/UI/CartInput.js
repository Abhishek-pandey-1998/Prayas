import { useContext, useReducer } from "react";
import CartContext from "../../Store/cart-context";
import './CartInput.css';

function ReducerFunction(state,action){
    if(action.type==="Increment"){
        return state+1;
    }
    if(action.type==="Decrement"){
        if(state>1){
            return state-1;
        }
    }
    return state;
}

function CartInput(props){
    const cartCtx = useContext(CartContext);
    const index = cartCtx.items.findIndex((x)=>x.id===props.item.id);
    let intial;
    if(index!==-1){
        intial = cartCtx.items[index].amount;
    }
    else{
        intial = 1;
    }
    const [value,dispatch] = useReducer(ReducerFunction,intial);


    function IncrementHandler(){
        dispatch({type:"Increment"});
        cartCtx.addItem({
            id: props.item.id,
            dish: props.item.dish,
            price:props.item.price,
            amount:1
        });
    }

    function DecrementHandler(){
        dispatch({type:"Decrement"});
        cartCtx.removeItem({
            id: props.item.id,
            dish: props.item.dish,
            price:props.item.price,
            amount:1
        });
    }

    return(
        <span className="cartItemControls">
            <button type="button" onClick={DecrementHandler}>-</button>
            <label>{value}</label>
            <button type="button" onClick={IncrementHandler}>+</button>
        </span>
    );
}

export default CartInput;