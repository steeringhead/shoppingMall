import styles from "./Item.module.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Frag from "./Frag";
import { useContext } from "react";
import { ThemeContext } from "./themeContext";
import cx from "clsx";

export default function Item(props) {
    const [items, setItems] = useState([]);
    const { isDarkMode } = useContext(ThemeContext);
    const [dark, setDark] = useState(isDarkMode);
    console.log(props.info);

    useEffect(() => {
        setDark(isDarkMode);
    }, [isDarkMode]);

    async function getItem() {
        const item = await axios.get(
            `https://fakestoreapi.com/products?limit=50`
        );

        let items = item.data;

        items = items.filter((arr) => props.info.includes(arr.category));
        console.log(items);
        setItems(items);
    }

    useEffect(() => {
        getItem();
    }, [props.info]);

    return (
        <>
            <div
                className={cx(styles.itemContainer, {
                    [styles.darkmodecheck]: isDarkMode,
                })}
            >
                <h1 className={cx({ [styles.darkmodecheck]: isDarkMode })}>
                    {props.title}
                </h1>
                <div className={styles.itemlist}>
                    {items.map(
                        (arr, idx) =>
                            props.cnt >= idx && (
                                <Frag
                                    productid={arr.id}
                                    url={arr.image}
                                    name={arr.title}
                                    price={arr.price}
                                    key={arr.id}
                                    dark={dark}
                                />
                            )
                    )}
                </div>
            </div>
        </>
    );
}
