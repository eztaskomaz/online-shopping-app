import React, { useState, useEffect } from "react";
import {commerce} from "./lib/commerce";
import './App.css';

import {Products, NavBar} from './components';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setProducts(data);
    }

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log(products);

    return (
        <div className="App">
            <h1>Online Shopping App</h1>
            <NavBar/>
            <Products products={products}/>
        </div>
    );
}

export default App;
