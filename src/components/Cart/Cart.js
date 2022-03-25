import React  from 'react';
// import { getStoredCart } from '../../utilities/objectLocalStorage';
import './Cart.css';

const Cart = (props) => {

    // console.log(props.cart);

    
    const cart = props.cart.map((item, index) => {
          
           return(
                <div key={index} className="mt-4">
                    <h6 className="text-center">{item.strMeal} <i className="fa-solid fa-xmark text-danger"></i> {item.quantity}</h6>
                </div>
              )
        })
    


   
    // console.log(cart.length);
    return (
        <div className="d-flex flex-column mb-5 cart">

            <h1 className="text-center my-2 p-3">Order Summary</h1>

            <div className="ordered-meals-div">
                {cart}
            </div>

            <div className="btn-div">
                    <button onClick={props.clearCart} className="clear-btn">Clear Cart</button>
                    <button onClick={props.orderNow}className="order-btn">Order Now</button>
            </div>

            
        </div>
    );
};

export default Cart;