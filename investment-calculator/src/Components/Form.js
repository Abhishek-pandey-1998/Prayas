import { useState } from "react";
import './Form.css';
import DetailsTable from './DetailsTable';

function Form(){

    const[clicked,setClicked] = useState(false);

    const [input,setInput] = useState({
        currentInvestment : 0,
        yearlyContribution : 0,
        rate : 0,
        duration : 0
    });

    function Calculate(event){
        event.preventDefault();
        setInput({
            currentInvestment : event.target[0].value,
            yearlyContribution : event.target[1].value,
            rate : event.target[2].value,
            duration : event.target[3].value
        });
        setClicked(true);
    }

    function Reset(){
        setClicked(false);
    }

    return(
        <>
            <form className="form" onSubmit={Calculate}>
                <div className="input-group">
                <p>
                    <label htmlFor="current-savings">Current Savings (₹)</label>
                    <input type="text" id="current-savings" placeholder="Current Savings"/>
                </p>
                <p>
                    <label htmlFor="yearly-contribution">Yearly Savings (₹)</label>
                    <input type="text" id="yearly-contribution" placeholder="Yearly Savings"/>
                </p>
                </div>
                <div className="input-group">
                <p>
                    <label htmlFor="expected-return">
                    Expected Interest (%, per year)
                    </label>
                    <input type="text" id="expected-return" placeholder="Expected Interest"/>
                </p>
                <p>
                    <label htmlFor="duration">Investment Duration (years)</label>
                    <input type="text" id="duration" placeholder="Duration"/>
                </p>
                </div>
                <p className="actions">
                <button type="reset" className="buttonAlt" onClick={Reset}>
                    Reset
                </button>
                <button type="submit" className="button">
                    Calculate
                </button>
                </p>
            </form>
            {clicked && <DetailsTable data={input} />}
        </>
    );
}

export default Form;