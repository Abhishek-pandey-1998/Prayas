import { useContext } from 'react';
import InputForm from '../UI/InputForm';
import './MealItem.css';
import CartContext from '../../Store/cart-context';

function MealItem(props){

    const cartCtx = useContext(CartContext);

    function addToCart(amt){
        cartCtx.addItem({
            id: props.Meal.id,
            dish: props.Meal.dish,
            price:props.Meal.price,
            amount:amt
        });
    }

    return(
        <li className="meal">
            <div className='details'>
                <div><h3>{props.Meal.dish}</h3></div>
                <div className='price'>₹{props.Meal.price}</div>
                <div className='description'>{props.Meal.description}</div>
            </div>
            <div className='formDiv'>
                <img src={props.Meal.Image} alt='ItemImage' className='img'></img>
                <InputForm onAdd={addToCart}></InputForm>
            </div>
        </li>
    );
}

export default MealItem;