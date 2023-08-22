import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import {Header, Footer, HomeContent, Header2} from "./headerFooter.js";
import { useLocation } from "react-router-dom";

const Home = () => {

  const location= useLocation();

  
  const [product, setProduct] = useState("");

  useEffect(() => {
    const fetchDetails = async () => {
      const info = await axios.post("http://localhost:8000/")
      setProduct(info);
    };
    fetchDetails();
  }, []);

                                        
  if (!product) {
    return <div>Loading...</div>
  }

  if(location.state){
    const Data= location.state.username;
    
    return (
      <>
      <Header2 data= {Data}/>
      <HomeContent obj={product}/>
      <Footer/>
      </>
    );
  }
  else{
    return (
      <>
      <Header/>
      <HomeContent obj={product}/>
      <Footer/>
      </>
    );
  }
  
}

export default Home;