import Item from "../components/Item";
import Footer from "../components/Footer";
import React from "react";

function Accessory() {
    const ring = ["jewelery"];
    return (
        <>
            <Item title="액세서리" info={ring} cnt="20"></Item>
            <Footer />
        </>
    );
}

export default Accessory;
