import { useContext, useReducer } from "react";
import CartContext from "../../Store/cart-context";
import './QuantityInput.css';

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

function QuantityInput(props){
    const cartCtx = useContext(CartContext);
    const [value,dispatch] = useReducer(ReducerFunction,1);
    const index = cartCtx.items.findIndex((x)=>x.id===props.item.id);
    if(index<0){
        props.onZeroRemove(false);
    }
    else if(cartCtx.items[index].amount!==value){
        if(cartCtx.items[index].amount>value){
            valueIncrement();
        }
        else if(cartCtx.items[index].amount<value){
            valueDecrement();
        }
    }
    function IncrementHandler(){
        dispatch({type:"Increment"});
        props.onAdd(1);
    }

    function DecrementHandler(){
        if(value===1){
            props.onZeroRemove(false);
        }
        dispatch({type:"Decrement"});
        props.onRemove(1);
    }

    function valueIncrement(){
        dispatch({type:"Increment"});
    }

    function valueDecrement(){
        dispatch({type:"Decrement"});
    }

    return(
        <div className="controls">
            <button type="button" onClick={DecrementHandler}>-</button>
            <label>{value}</label>
            <button type="button" onClick={IncrementHandler}>+</button>
        </div>
    );
}

export default QuantityInput;