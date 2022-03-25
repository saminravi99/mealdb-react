//use local storage to save data

const addToDB = (id) => {
    if(localStorage.getItem(id) === null){
    const quantity = localStorage.setItem(id, 1);
    return quantity;
    } else {
        const quantity = localStorage.getItem(id);
        const newQuantity = Number(quantity) + 1;
        localStorage.setItem(id, newQuantity);
        return newQuantity;
    }
}



export {
    addToDB,
}

