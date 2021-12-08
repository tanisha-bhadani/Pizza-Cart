import React from "react";
import Product from "./Product";
import { useState,useEffect } from "react";
import json from "../api/products.json"


const Products = () => {
    
    // useEffect(() => {
    //     fetch('../api/products.json')
    //     .then(response =>{
    //         console.log(response);
    //         return response.json();
    //     })

    //     .then(products => {
    //         console.log(products);
    //     }); 
    // },[]);
        
    
    const loadData = [...json];

    let [products,setProducts]= useState([]);
    products=loadData;

    useEffect(() => {
        // console.log(products);
        setProducts(products);
    },[]);
    


   


    return (
        <div className="container mx-auto pb-24">
            <h1 className="text-lg font-bold my-8">Products</h1>
            <div className="grid grid-cols-5 my-8 gap-28">
                {
                    products.map(product => <Product key={product.name} data={product}/>)
                }
            </div>
        </div>
    )
}

export default Products;
