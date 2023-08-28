import { useRef } from 'react';
import './InputForm.css';

function InputForm(props){
    const amountRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const amount = +amountRef.current.value;
        if(amount>0){
            props.onAdd(amount);
        }
    }


    return(
        <>
        <form onSubmit={submitHandler}>
            <input placeholder='Amount' ref={amountRef}></input>
            <button type='submit' className='AddButton'>+ Add</button>
        </form>
        </>
    );
}

export default InputForm;
