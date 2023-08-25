import React from "react";
import home from '../css/home.module.css';
import axios from "axios";

const ValidCart = (props) => {

    const removeFromCart= async(id)=>{
        
        const token = sessionStorage.getItem('token');
        const axiosInstance = axios.create({
            headers: {
              Authorization: `Bearer ${token}`,
            },
        });

        await axiosInstance.post('http://localhost:8000/removefromcart', { id })
        .then(res=>{
            alert("Product removed from cart");
        }).catch(error=>{
            console.log(error.message);
        })
    }
    return (
        <>
            <div className={home.homebody}>

                <h1 className={home.pheading}>Your Cart</h1>

                <section className={home.sec}>
                    <div className={home.products}>
                        {props.obj.map(item => (
                            <div className={home.card} key={item.id}>

                                <div className={home.img}><img src={item.image} alt="" /></div>
                                <div className={home.title}>{item.title}</div>
                                <div className={home.box}>
                                    <div className={home.price}>${item.price}</div>
                                    <button className={home.btn} onClick={() => removeFromCart(item.id)}>Remove from cart</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </>
    )
}



export { ValidCart};