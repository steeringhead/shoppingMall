import styles from "./Modal.module.css";
import { useEffect, useState } from "react";
import { useItems } from "./itemsContext";
import cx from "clsx";

export function Modal(props) {
    const [rend, setRend] = useState([]);
    const items = useItems();
    const condition = props.info ? true : false;

    useEffect(() => {
        if (items.length !== 0) {
            const filteredItems = items.filter(
                (item) =>
                    item.title &&
                    item.title.toLowerCase().includes(props.info.toLowerCase())
            );
            setRend(filteredItems);
            console.log(filteredItems);
        }
    }, [props.info, rend]);

    return (
        <div
            className={cx(styles.modalContainer, {
                [styles.searching]: condition,
            })}
        >
            {rend.map((item) => (
                <div className={styles.itemList}>{item.title}</div>
            ))}
        </div>
    );
}
