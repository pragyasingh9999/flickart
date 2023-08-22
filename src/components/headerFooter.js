import React from "react";
import nav from "../css/headerFooter.module.css";
import home from '../css/home.module.css';
import { Link } from "react-router-dom";
import axios from "axios";

const Header = () => {
  return (
    <>
      <nav className={nav.navbar}>
        <div className={nav.logo}><h1>Flickart</h1></div>
        <ul className={nav.menu}>
          <li><Link to="/" className={nav.active}>Home</Link></li>
          <li><a href="#">New Arrivals</a></li>
          <li> <div className={nav.dropdown}>
            <a href="#" className={nav.dropbtn}>Section</a>
            <div className={nav.dropdowncontent}>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">Kids</a>
            </div>
          </div>
          </li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </nav>
    </>
  )
}

const Header2 = (props) => {
  return (
    <>
      <nav className={nav.navbar}>
        <div className={nav.logo}><h1>Flickart</h1></div>
        <ul className={nav.menu}>
          <li><Link to="/" className={nav.active}>Home</Link></li>
          <li><a href="#">New Arrivals</a></li>
          <li> <div className={nav.dropdown}>
            <a href="#" className={nav.dropbtn}>Section</a>
            <div className={nav.dropdowncontent}>
              <a href="#">Men</a>
              <a href="#">Women</a>
              <a href="#">Kids</a>
            </div>
          </div>
          </li>
          <li> <div className={nav.dropdown}>
            <a href="#" className={nav.dropbtn}><i className='bx bx-user-circle'></i>{props.data}</a>
            <div className={nav.dropdowncontent}>
              <a href="#">Profile</a>
              <Link to="/cart">Cart</Link>
              <a href="#">Logout</a>
            </div>
          </div>
          </li>
        </ul>
      </nav>
    </>
  )
}

const Footer = () => {

  return (
    <>
      <div className="footer">
        <p>Copyrights at <a href="#">Flickart</a></p>
      </div>
    </>
  )
}

const HomeContent = (props) => {

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

  return (
    <div className={home.homebody}>

      <section className={home.content}>
        <h1> New Arrivals For Men & Women</h1>
        <p>Get The Best Women Fashion Arrivals</p>
        <button>Shop Now</button>
      </section>

      <h1 className={home.pheading}>Our Products</h1>

      <section className={home.sec}>
        <div className={home.products}>
          {props.obj.data.map(item => (
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

export { Header, Footer, HomeContent, Header2 };
