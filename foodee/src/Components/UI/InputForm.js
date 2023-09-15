import { useState } from 'react';
import './InputForm.css';
import QuantityInput from './QuantityInput';

function InputForm(props){
    //const amountRef = useRef();
    const [clicked,setClicked] = useState(false);

    /*function submitHandler(event){
        //event.preventDefault();
        //const amount = +amountRef.current.value;
        if(amount>0){
            props.onAdd(amount);
        }
    }*/

    function AddClickHandler(){
        props.onAdd(1);
        setClicked(true);
    }

    function RemoveButtonHandler(flag){
        setClicked(flag);
    }


    return(
        <>
        <form /*onSubmit={submitHandler}*/>
            {/*<input placeholder='Amount' ref={amountRef}></input>*/}
            {clicked? <QuantityInput onAdd={props.onAdd} onRemove={props.onRemove} onZeroRemove={RemoveButtonHandler} item={props.item}/> 
            : <button type='button' className='AddButton' onClick={AddClickHandler}>+ Add</button>}
        </form>
        </>
    );
}

export default InputForm;
