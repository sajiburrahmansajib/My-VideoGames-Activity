// use local storage to manage cart data
const addToDb = (time) => {
    let timeCart = time;

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('timeCart');
    if (storedTime) {
        timeCart = JSON.parse(time);
    }

    localStorage.setItem('timeCart', JSON.stringify(timeCart));
}



const getStoredData = () => {
    let timeCart = 0;

    //get the shopping cart from local storage
    const storedTime = localStorage.getItem('timeCart');
    if (storedTime) {
        timeCart = JSON.parse(storedTime);
    }
    return timeCart
}

const deleteShoppingCart = () => {
    localStorage.removeItem('timeCart');
}

export {
    addToDb,
    getStoredData,
    deleteShoppingCart
}