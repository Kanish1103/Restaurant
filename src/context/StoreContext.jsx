import { createContext, useEffect, useState } from "react";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [exploreMenu, setExploreMenu] = useState([]);

    useEffect(() => {
        fetch('/FoodList.json')
            .then(response => response.json())
            .then(data => setExploreMenu(data))
            .catch(error => console.error('Error fetching menu:', error))
    }, []);


    const [cartItems, setCartItems] = useState({});


    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        }
        else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    // useEffect(() => {
    //     console.log(cartItems);

    // }, [cartItems])

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = exploreMenu.find((product) => product.id === item)
                totalAmount += itemInfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const increaseQuantity = (id) => {
        setCartItems((prevItems) => ({
            ...prevItems,
            [id]: (prevItems[id] || 0) + 1,
        }));
    };

    const decreaseQuantity = (id) => {
        setCartItems((prevItems) => {
            const newItems = { ...prevItems };
            if (newItems[id] > 1) {
                newItems[id] -= 1;
            } else {
                delete newItems[id];
            }
            return newItems;
        });
    };
    
    const contextValue = {
        exploreMenu,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        increaseQuantity,
        decreaseQuantity
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;
