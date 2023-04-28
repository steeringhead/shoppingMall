import styles from "./Nav.module.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "./themeContext";
import cx from "clsx";
import { Link } from "react-router-dom";
import { Modal } from "./Modal";
import { cartContext } from "./cartContext";

export default function Nav() {
    const [put, setPut] = useState();
    const { isDarkMode, toggleMode } = useContext(ThemeContext);
    const { cartData } = useContext(cartContext);
    const [local, setLocal] = useState(localStorage.length);

    useEffect(() => {
        const handleStorage = () => {
            setLocal(localStorage.length);
        };

        window.addEventListener("storage", handleStorage);

        return () => {
            window.removeEventListener("storage", handleStorage);
        };
    }, [local]);

    function search(value) {
        setPut(value);
    }

    return (
        <div
            className={cx(styles.navContainer, {
                [styles.darkmodecheck]: isDarkMode,
            })}
        >
            <div className={styles.tag}>
                <Link
                    to={"/"}
                    className={cx(styles.link, {
                        [styles.darkmodecheck]: isDarkMode,
                    })}
                >
                    <div>React Shop</div>
                </Link>
                <Link
                    to={"/fashion"}
                    className={cx(styles.link, {
                        [styles.darkmodecheck]: isDarkMode,
                    })}
                >
                    <div>패션</div>
                </Link>
                <Link
                    to={"/accessory"}
                    className={cx(styles.link, {
                        [styles.darkmodecheck]: isDarkMode,
                    })}
                >
                    <div>액세서리</div>
                </Link>
                <Link
                    to={"/electronics"}
                    className={cx(styles.link, {
                        [styles.darkmodecheck]: isDarkMode,
                    })}
                >
                    <div>디지털</div>
                </Link>
            </div>
            <div className={styles.etc}>
                <div className={styles.darkmodeIcon}>
                    <svg
                        className={styles.darkmode}
                        onClick={toggleMode}
                        width="800px"
                        height="800px"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-labelledby="nightModeIconTitle"
                        stroke="#000000"
                        stroke-width="1"
                        stroke-linecap="square"
                        stroke-linejoin="miter"
                        fill="none"
                        color="#ffffff"
                    >
                        {" "}
                        <title id="nightModeIconTitle">Night Mode</title>{" "}
                        <path d="M12 19a7 7 0 1 0 0-14 7 7 0 0 0 0 14z" />{" "}
                        <path d="M15.899 12.899a4 4 0 0 1-4.797-4.797A4.002 4.002 0 0 0 12 16c1.9 0 3.49-1.325 3.899-3.101z" />{" "}
                        <path d="M12 5V3M12 21v-2" />{" "}
                        <path d="M5 12H2h3zM22 12h-3 3zM16.95 7.05L19.07 4.93 16.95 7.05zM4.929 19.071L7.05 16.95 4.93 19.07zM16.95 16.95l2.121 2.121-2.121-2.121zM4.929 4.929L7.05 7.05 4.93 4.93z" />{" "}
                    </svg>
                </div>
                <input
                    className={styles.input}
                    onChange={(e) => search(e.target.value)}
                ></input>
                <Modal info={put} />
                <Link to={"/cart"}>
                    <div className={styles.shoppingBag}>
                        <svg
                            fill="none"
                            height="24"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g
                                stroke="#000"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                            >
                                <path d="m4.05108 8.9199c.04175-.51955.47556-.9199.99679-.9199h13.90423c.5213 0 .9551.40035.9968.9199l.8775 10.9199c.0935 1.164-.8258 2.1602-1.9936 2.1602h-13.66564c-1.16773 0-2.08711-.9962-1.99357-2.1602z" />
                                <path d="m16 11v-5c0-2.20914-1.7909-4-4-4-2.20914 0-4 1.79086-4 4v5" />
                            </g>
                        </svg>
                        {cartData > 0 && <div className={styles.lightOn}></div>}
                    </div>
                </Link>
            </div>
        </div>
    );
}
