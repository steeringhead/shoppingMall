import styles from "./Frag.module.css";
import { Link } from "react-router-dom";
import cx from "clsx";

export default function Frag(props) {
    return (
        <Link to={`/product/${props.productid}`} className={styles.link}>
            <div className={styles.fragContainer}>
                <div
                    className={cx(styles.imgContainer, {
                        [styles.darkmodecheck]: props.dark,
                    })}
                >
                    <img src={props.url} alt={props.name}></img>
                </div>
                <div
                    className={cx(styles.infoContainer, {
                        [styles.darkmodecheck]: props.dark,
                    })}
                >
                    <div className={styles.name}>{props.name}</div>
                    <div className={styles.price}>{props.price}</div>
                </div>
            </div>
        </Link>
    );
}
