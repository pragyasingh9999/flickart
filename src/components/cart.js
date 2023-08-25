import React, { useEffect, useState } from "react";
import axios from "axios";
import { ValidCart } from './cartElement';

const Cart = () => {

    const [cart, setCart]= useState("");

    useEffect(() => {
        const func = async () => {

            const token = sessionStorage.getItem('token');
            const axiosInstance = axios.create({
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });
            await axiosInstance.post('http://localhost:8000/cart')
                .then(res => {
                    if(res.data!=="empty cart"){
                    setCart(res.data);
                    }
                    else{
                        alert("Empty cart");
                    }
                    
                }).catch(error => {
                    console.log(error.message);
                })
        }
        func();
    }, []);
    
    console.log(cart);

    if(!cart){
       return(
        <><p>Loading...</p></>
       )
    }else{
        return(
            <><ValidCart obj={cart}/></>
        )
    }
  

}

export default Cart;