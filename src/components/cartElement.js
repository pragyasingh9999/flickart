import React from "react";
import home from '../css/home.module.css';

const ValidCart = (props) => {
   console.log(props.obj.data);
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
                                    <button className={home.btn}>Remove from cart</button>
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