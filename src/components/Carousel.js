import styles from "./Carousel.module.css";
import cx from "clsx";
import React from "react";
import Slider from "react-slick";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <div className={styles.sliderContainer}>
            <Slider {...settings}>
                <div className={cx(styles.first)}>
                    <img
                        src="https://react-shop-oinochoe.vercel.app/img_shop_fashion.jpeg"
                        alt="c"
                    ></img>
                    <div className={styles.carouselFrag}>물 빠진 청바지!</div>
                    <Link to={"/fashion"}>
                        <button className={styles.carouselButton}>
                            바로가기
                        </button>
                    </Link>
                </div>
                <div className={cx(styles.first)}>
                    <img
                        src="https://react-shop-oinochoe.vercel.app/img_shop_digital.jpeg"
                        alt="a"
                    ></img>
                    <div className={styles.carouselFrag}>신속한 업무처리!</div>
                    <Link to={"/electronics"}>
                        <button className={styles.carouselButton}>
                            바로가기
                        </button>
                    </Link>
                </div>
                <div className={cx(styles.first)}>
                    <img
                        src="https://react-shop-oinochoe.vercel.app/img_shop_grocery.jpeg"
                        alt="b"
                    ></img>
                    <div className={styles.carouselFrag}>신선한 식품!</div>
                    <Link to={"/grocery"}>
                        <button className={styles.carouselButton}>
                            바로가기
                        </button>
                    </Link>
                </div>
            </Slider>
        </div>
    );
}
