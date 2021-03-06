import React from 'react';
import './Meals.css';
const Meals = (props) => {
    const { strMeal, strMealThumb, strInstructions, addCart} = props;
    return (
        <div className="col-4">
            <div className="meal-card p-3  mt-5">
                <div className="d-flex justify-content-center">
                    <img className="img-fluid rounded" src={strMealThumb} alt={strMeal} />
                </div>
               <div className="p-3 d-flex flex-column justify-content-center mb-4">
                    <h5 className="my-3">{strMeal}</h5>
                    <p>{strInstructions.slice(0, 90)}...</p>
               </div>
               <button onClick={() => addCart(props)} className="btn btn-primary w-100 py-3 px-5">Add to Cart <i className="ms-2 fa-solid fa-burger"></i> </button>
            </div>
        </div>
    );
};

export default Meals;