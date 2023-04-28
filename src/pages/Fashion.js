import Item from "../components/Item";
import Footer from "../components/Footer";
import React from "react";

function Fashion() {
    const wearable = ["men's clothing", "women's clothing"];
    return (
        <>
            <Item title="패션" info={wearable} cnt="20"></Item>
            <Footer />
        </>
    );
}

export default Fashion;
