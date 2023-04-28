import Footer from "../components/Footer";
import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import { useItems } from "../components/itemsContext";
import styles from "./Product.module.css";
import { useContext, useEffect } from "react";
import cx from "clsx";
import { ThemeContext } from "../components/themeContext";
import { cartContext } from "../components/cartContext";
//결국 여기서 items배열을 가져올 수 있으면 렌더링하는건 어렵지않아.

//useItems HOOK이 비동기로 동작하기 때문에 새로고침하면 레더링 못하는 경우 존재. 그래서 tmp.length로 조건 걸어주면 잘 동작.

//product로 오면 자꾸 맨위에서부터 렌더링이 되지않고 있는데 useLocation하고 useEffect를 사용하면 컴포넌트 렌더링될때 맨위에서부터 렌더링 되게 할수 있음 !

function Product() {
    const { isDarkMode } = useContext(ThemeContext);
    const { cartDataChange } = useContext(cartContext);
    const tmp = useItems();
    const params = useParams();
    const location = useLocation();
    const one = tmp.filter((data) => `${data.id}` === params.productid);
    console.log(one);
    const picked = one[0];
    let cnt = 0;

    let currentProduct;

    if (tmp.length !== 0) {
        currentProduct = {
            name: picked.title,
            productId: picked.id,
            price: picked.price,
            quantity: cnt,
            image: picked.image,
        };
    }

    function cartStack() {
        cnt++;
        currentProduct = { ...currentProduct, quantity: cnt };
        const object = JSON.stringify(currentProduct);
        localStorage.setItem(`item${picked.id}`, object);
        cartDataChange(localStorage.length);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return (
        tmp.length !== 0 && (
            <>
                <div
                    className={cx(styles.itemContainer, {
                        [styles.darkmode]: isDarkMode,
                    })}
                >
                    <div className={styles.description}>
                        {picked.category} - {picked.title}
                    </div>
                    <div className={styles.imgDescription}>
                        <img src={picked.image} alt={picked.title}></img>
                        <div className={styles.productInfo}>
                            <div className={styles.productName}>
                                {picked.title}
                            </div>
                            <div className={styles.productDesc}>
                                {picked.description}
                            </div>
                            <div className={styles.productPrice}>
                                {picked.price}
                            </div>
                            <button onClick={cartStack}>장바구니 담기</button>
                            <Link to={"/cart"} className={styles.moveCart}>
                                <button>장바구니 이동</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </>
        )
    );
}

export default Product;
