import "./Main.css";
import React, { useEffect, useState } from 'react';
import Meals from "../Meals/Meals";
import Cart from "../Cart/Cart";
import { addToDb, getStoredCart } from "../../utilities/objectLocalStorage";

const Main = (props) => {

    const [meals, setMeals] = useState([]);

    const [cart, setCart] = useState([]);

    const addCart = (props) => {
        let newCart = [];
        let selectedMeal = cart.find(m => m.idMeal === props.idMeal);
        if (!selectedMeal) {
            newCart = [...cart, { ...props, quantity: 1 }];
        }else{
            const rest = cart.filter((meal) => meal.idMeal !== props.idMeal);
            selectedMeal.quantity += 1;
            newCart = [...rest, selectedMeal];
        }

        setCart(newCart);
        addToDb(props.idMeal);
    }


    const clearCart = () => {
        setCart([]);
        localStorage.clear();
    }

    const orderNow = () => {
        alert("Order Placed");
        clearCart();
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${props.result}`)
            .then(response => response.json())
            .then(data =>  setMeals(data.meals) )
            .catch(error => console.log(error));
    }, [props.result]);

     useEffect(() => {
            const storedCart = getStoredCart();
            for (const id in storedCart) {
                const addedProduct = meals.find(meal => meal.idMeal === id);
                if(addedProduct){
                        addedProduct.quantity = storedCart[id];
                        setCart(prevCart => [...prevCart, addedProduct]);
                    }
            }
    }
    , [meals]);

    const loadMeals = meals?.map((meal) => {
        return(
            <Meals
                key={meal.idMeal}
                {...meal}
                addCart={addCart}
            ></Meals>
        )
    })

    return (
        <div className="row mx-auto">
           <div className="mx-auto col-9">
               <div className="container mx-auto row mt-5 mb-5 g-3">
                    {loadMeals}
                </div>
           </div>

           <div className="col-3">
                <Cart
                    cart={cart}
                    clearCart={clearCart}
                    orderNow={orderNow}

                ></Cart>
                
           </div>
        </div>
    );
};

export default Main;