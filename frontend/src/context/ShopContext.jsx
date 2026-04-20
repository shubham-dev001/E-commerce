import { createContext, useState, useEffect } from "react";


export const ShopContext = createContext(null)
const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < 300 + 1; index++) {
        cart[index] = 0;

    }
    return cart
}

const ShopContextProvider = (props) => {
    const [all_product, setAll_product] = useState([])
    const [cartItems, setCartItems] = useState(getDefaultCart())
    const Host = "http://localhost:8000";

    useEffect(() => {
        fetch(`${Host}/allproduct`)
            .then((res) => res.json())
            .then((data) => { setAll_product(data) })

    }, [])

    useEffect(() => {
        const fetchCart = () => {
            const token = localStorage.getItem("token");

            if (!token) {
                setCartItems(getDefaultCart());
                return;
            }

            fetch(`${Host}/api/getcart`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "auth-token": token,
                },
                body: JSON.stringify({})
            })
                .then(res => res.json())
                .then(data => {

                    const safeCart = getDefaultCart();

                    if (data) {
                        for (const key in data) {
                            safeCart[key] = data[key];
                        }
                    }

                    setCartItems(safeCart);
                });

        };

        fetchCart();

        window.addEventListener("authChange", fetchCart);

        return () => window.removeEventListener("authChange", fetchCart);

    }, []);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
        if (localStorage.getItem("token")) {
            fetch(`${Host}/api/addtocart`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "auth-token": `${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "itemId": itemId })
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }

    };
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] > 0 ? prev[itemId] - 1 : 0
        }));
        if (localStorage.getItem("token")) {
            fetch(`${Host}/api/removetocart`, {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "auth-token": `${localStorage.getItem("token")}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ "itemId": itemId })
            })
                .then((res) => res.json())
                .then((data) => console.log(data))
        }
    };

    const gettotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems?.[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }

        }
        return totalAmount
    }
    const getTotalItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems?.[item] > 0) {
                totalItem += cartItems[item]
            }

        }
        return totalItem
    }

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, gettotalAmount, getTotalItem }

    return (
        <ShopContext.Provider value={contextValue} >
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider