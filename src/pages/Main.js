import Carousel from "../components/Carousel";
import Item from "../components/Item";
import Footer from "../components/Footer";
import React from "react";

function Main() {
    return (
        <>
            <Carousel></Carousel>
            <Item title="패션" info="men's clothing" cnt="4"></Item>
            <Item title="액세서리" info="jewelery" cnt="4"></Item>
            <Item title="디지털" info="electronics" cnt="3"></Item>
            <Footer></Footer>
        </>
    );
}

export default Main;
