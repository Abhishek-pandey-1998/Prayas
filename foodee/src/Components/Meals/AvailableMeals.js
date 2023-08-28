import MealItem from './MealItem.js';
import './AvailableMeals.css';
import MD from '../../logos/masaladosa.jpg';
import RD from '../../logos/download.jpg';
import idli from '../../logos/images.jpg';

function AvailableMeals(){
    const Meals = [
        {
            id: 1,
            dish : "Masala Dosa",
            description : "Stuffed with special paneer filling, served with spicy sambahar and coconut chutney.",
            price : 100,
            Image : MD
        },
        {
            id: 2,
            dish : "Rawa Dosa",
            description : "Stuffed with special panner filling, served with spicy sambahar and coconut chutney.",
            price : 150,
            Image : RD
        },
        {
            id: 3,
            dish : "Rawa Idli",
            description : "Served with spicy sambahar and coconut chutney.",
            price : 99,
            Image : idli
        }
    ];

    return(
        <div>
            <ul>
            {Meals.map((meal) =><div>
                    <MealItem Meal={meal}></MealItem>
                </div>
            )}
            </ul>
        </div>
    );
}

export default AvailableMeals;