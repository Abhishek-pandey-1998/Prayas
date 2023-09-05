import { useReducer, useState } from "react";

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
    const intial = 1;
    const [value,dispatch] = useReducer(ReducerFunction,intial);

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

    return(
        <>
            <button type="button" onClick={DecrementHandler}>-</button>
            <label>{value}</label>
            <button type="button" onClick={IncrementHandler}>+</button>
        </>
    );
}

export default QuantityInput;