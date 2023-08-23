import React, { useEffect, useState } from "react";
import home from '../css/home.module.css';
import axios from "axios";

const addToCart = async (item) => {

    const token = sessionStorage.getItem('token');
    if (!token) { alert('User not logged in'); }
    else {
      const axiosInstance = axios.create({
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      await axiosInstance.post('http://localhost:8000/addtocart', { item })
        .then(res => {
          alert("Product added to cart successfully")
        }).catch(error => {
          console.log(error.message);
        })
    }

  }

const MenProduct = () => {

    const [men, setMen] = useState("");

    useEffect(() => {
        const fetchDetails = async () => {
            const info = await axios.post("http://localhost:8000/men")
            setMen(info);
        };
        fetchDetails();
    }, []);
  
    console.log(men);
    if (!men) {
        return <div>Loading...</div>
    }
    else {
        return (
            <>
                
                <div className={home.homebody}>

                    <h1 className={home.pheading}>Category: Men</h1>

                    <section className={home.sec}>
                        <div className={home.products}>
                            {men.data.map(item => (
                                <div className={home.card} key={item.id}>

                                    <div className={home.img}><img src={item.image} alt="" /></div>
                                    <div className={home.title}>{item.title}</div>
                                    <div className={home.box}>
                                        <div className={home.price}>${item.price}</div>
                                        <button className={home.btn} onClick={() => addToCart(item)}>Add to cart</button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </>
        );
    }

}

const WomenProduct = () => {
    const [women, setWomen] = useState("");

    useEffect(() => {
        const fetchDetails = async () => {
            const info = await axios.post("http://localhost:8000/women")
            setWomen(info);
        };
        fetchDetails();
    }, []);
  
    console.log(women);
    if (!women) {
        return <div>Loading...</div>
    }
    else {
        return (
            <>
                
                <div className={home.homebody}>

                    <h1 className={home.pheading}>Category: Women</h1>

                    <section className={home.sec}>
                        <div className={home.products}>
                            {women.data.map(item => (
                                <div className={home.card} key={item.id}>

                                    <div className={home.img}><img src={item.image} alt="" /></div>
                                    <div className={home.title}>{item.title}</div>
                                    <div className={home.box}>
                                        <div className={home.price}>${item.price}</div>
                                        <button className={home.btn} onClick={() => addToCart(item)}>Add to cart</button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </>
        );
    }

}

const Jewellery = () => {
    const [jewellery, setJewellery] = useState("");

    useEffect(() => {
        const fetchDetails = async () => {
            const info = await axios.post("http://localhost:8000/jewellery")
            setJewellery(info);
        };
        fetchDetails();
    }, []);
  
    console.log(jewellery);
    if (!jewellery) {
        return <div>Loading...</div>
    }
    else {
        return (
            <>
                
                <div className={home.homebody}>

                    <h1 className={home.pheading}>Category: Jewellery</h1>

                    <section className={home.sec}>
                        <div className={home.products}>
                            {jewellery.data.map(item => (
                                <div className={home.card} key={item.id}>

                                    <div className={home.img}><img src={item.image} alt="" /></div>
                                    <div className={home.title}>{item.title}</div>
                                    <div className={home.box}>
                                        <div className={home.price}>${item.price}</div>
                                        <button className={home.btn} onClick={() => addToCart(item)}>Add to cart</button>
                                    </div>

                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </>
        );
    }
}


const NewArrivals= ()=>{

    const [product, setProduct] = useState("");

    useEffect(() => {
        const fetchDetails = async () => {
            const info = await axios.post("http://localhost:8000/")
            setProduct(info);
        };
        fetchDetails();
    }, []);
  
    console.log(product);
    if (!product) {
        return <div>Loading...</div>
    }
    else{
        return (
            <div className={home.homebody}>
    
              <h1 className={home.pheading}>New Arrivals</h1>
        
              <section className={home.sec}>
                <div className={home.products}>
                  {product.data.map(item => (
                    <div className={home.card} key={item.id}>
        
                      <div className={home.img}><img src={item.image} alt="" /></div>
                      <div className={home.title}>{item.title}</div>
                      <div className={home.box}>
                        <div className={home.price}>${item.price}</div>
                        <button className={home.btn} onClick={() => addToCart(item)}>Add to cart</button>
                      </div>
        
                    </div>
                  ))}
                </div>
              </section>
            </div>
          )
    }
    
}

export { MenProduct, WomenProduct, Jewellery, NewArrivals };

/* <HomeContent obj={men}/>*/