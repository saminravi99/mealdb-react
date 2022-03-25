//use local storage to save data


// Adding Products to Local Storage
let shoppingCart;

const addToDb = (id) => {

    if(localStorage.getItem("shopping-cart")){
        shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
    }else{
        shoppingCart = {};
    }

    if(!shoppingCart[id]){
        shoppingCart[id] = 1;
    }else{
        shoppingCart[id] = shoppingCart[id] + 1;
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}




// Removing Products from Local Storage

const removeFromDb = (id) => {
    if(localStorage.getItem("shopping-cart")){
        shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
    }else{
        shoppingCart = {};
    }

    if(!shoppingCart[id]){
        alert(`Please Add The Product First`);
    }
    else if(shoppingCart[id] > 1 && shoppingCart[id]){
        shoppingCart[id] = shoppingCart[id] - 1;
    }
    else{
        delete shoppingCart[id];
    }

    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
}


const getStoredCart = () => {
    if(localStorage.getItem("shopping-cart")){
        shoppingCart = JSON.parse(localStorage.getItem("shopping-cart"));
    }else{
        shoppingCart = {};
    }
    return shoppingCart;
}

export {
    addToDb,
    getStoredCart,
    removeFromDb
}

