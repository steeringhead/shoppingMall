import Footer from "../components/Footer";
import styles from "./Cart.module.css";
import { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../components/themeContext";
import { Link } from "react-router-dom";
import cx from "clsx";
import { cartContext } from "../components/cartContext";

//굳이 axios로 데이터를 다시 받아올 필요는 없다.

function Cart() {
    const [cart, setCart] = useState([]);
    const { isDarkMode } = useContext(ThemeContext);
    const { cartDataChange } = useContext(cartContext);
    let tmp = [];

    const length = window.localStorage.length;

    for (let i = 0; i < length; i++) {
        const key = window.localStorage.key(i);
        const obj = localStorage.getItem(key);
        const parseObj = JSON.parse(obj);
        parseObj.key = key;
        tmp = [...tmp, parseObj];
        console.log(tmp);
    }

    useEffect(() => {
        setCart(tmp);
    }, []);

    function productSub(index) {
        //여기서 newCart = cart하면 cart원본을 건드리는거라 이렇게 복사하는거지.

        let updatedCart = [...cart];

        let item = updatedCart[index];
        if (item.quantity > 0) {
            item.quantity -= 1;
            //실시간으로 로컬스토리지 갱신
            localStorage.setItem(item.key, JSON.stringify(item));
            cartDataChange(localStorage.length);
        } else {
            updatedCart.splice(index, 1);
            localStorage.removeItem(item.key);
            cartDataChange(localStorage.length);
        }
        if (updatedCart.length === 0) {
            setCart([]);
        } else {
            setCart(updatedCart);
        }
    }

    function productPlus(index) {
        let updatedCart = [...cart];

        let item = updatedCart[index];
        item.quantity += 1;
        localStorage.setItem(item.key, JSON.stringify(item));
        setCart(updatedCart);
    }

    return cart.length !== 0 ? (
        <div className={cx(styles.cart, { [styles.darkmode]: isDarkMode })}>
            <div className={styles.cartCategory}>홈 &gt; 장바구니</div>
            <div className={styles.cartList}>
                {cart.map((item, index) => (
                    <div className={styles.cartItem}>
                        <img
                            className={styles.itemImage}
                            src={item.image}
                            alt={item.name}
                        ></img>
                        <div>
                            <div>{item.name}</div>
                            <div className={styles.price}>{item.price}</div>
                            <div className={styles.buttonContainer}>
                                <button onClick={() => productSub(index)}>
                                    -
                                </button>
                                <div>{item.quantity}</div>
                                <button onClick={() => productPlus(index)}>
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    ) : (
        <>
            <div
                className={cx(styles.noneContainer, {
                    [styles.darkmode]: isDarkMode,
                })}
            >
                <div
                    className={cx(styles.noneBox, {
                        [styles.darkmode]: isDarkMode,
                    })}
                >
                    장바구니에 물품이 없습니다.
                </div>
                <Link to={"/"}>
                    <button className={styles.moreButton}>담으러 가기</button>
                </Link>
            </div>
            <Footer />
        </>
    );
}

export default Cart;
