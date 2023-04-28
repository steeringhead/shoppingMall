import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Nav from "./components/Nav";
import { ThemeProvider } from "./components/themeContext";
import Accessory from "./pages/Accessary";
import Fashion from "./pages/Fashion";
import Electronics from "./pages/Electronics";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import { ItemsProvider } from "./components/itemsContext";
import { CartProvider } from "./components/cartContext";

function App() {
    return (
        <ThemeProvider>
            <ItemsProvider>
                <CartProvider>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Main />} />
                        <Route path="/fashion" element={<Fashion />} />
                        <Route path="/accessory" element={<Accessory />} />
                        <Route path="/electronics" element={<Electronics />} />
                        <Route
                            path="/product/:productid"
                            element={<Product />}
                        />
                        <Route path="/cart" element={<Cart />} />
                    </Routes>
                </CartProvider>
            </ItemsProvider>
        </ThemeProvider>
    );
}

export default App;
