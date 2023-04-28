import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const itemsContext = createContext([]);

export function ItemsProvider(props) {
    const [items, setItems] = useState([]);

    useEffect(() => {
        async function getItems() {
            const response = await axios.get(
                "https://fakestoreapi.com/products?limit=50"
            );
            setItems(response.data);
        }
        getItems();
    }, []);

    return (
        <itemsContext.Provider value={items}>
            {props.children}
        </itemsContext.Provider>
    );
}

export function useItems() {
    return useContext(itemsContext);
}
