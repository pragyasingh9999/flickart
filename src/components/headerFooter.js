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
          <li><Link to="/newarrivals">New Arrivals</Link></li>
          <li> <div className={nav.dropdown}>
            <Link className={nav.dropbtn}>Category</Link>
            <div className={nav.dropdowncontent}>
              <Link to="/menproduct">Men</Link>
              <Link to="/womenproduct">Women</Link>
              <Link to="/jewellery">Jewellery</Link>
            </div>
          </div>
          </li>
          <li><Link to="/login" >Login</Link></li>
        </ul>
      </nav>
    </>
  )
}

const Header2 = (props) => {

  const handleLogout= ()=>{
    const token1 = sessionStorage.getItem('token');
    console.log(token1);
    sessionStorage.removeItem('token');
    const token = sessionStorage.getItem('token');
    console.log(token);
  }

  return (
    <>
      <nav className={nav.navbar}>
        <div className={nav.logo}><h1>Flickart</h1></div>
        <ul className={nav.menu}>
          <li><Link to="/" className={nav.active}>Home</Link></li>
          <li><Link to="/newarrivals">New Arrivals</Link></li>
          <li> <div className={nav.dropdown}>
            <Link className={nav.dropbtn}>Category</Link>
            <div className={nav.dropdowncontent}>
              <Link to="/menproduct">Men</Link>
              <Link to="/womenproduct">Women</Link>
              <Link to="/jewellery">Jewellery</Link>
            </div>
          </div>
          </li>
          <li> <div className={nav.dropdown}>
            <Link className={nav.dropbtn}><i className='bx bx-user-circle'></i>{props.data}</Link>
            <div className={nav.dropdowncontent}>
              <Link to="" >Profile</Link>
              <Link to="/cart">Cart</Link>
              <Link to="/" onClick={handleLogout} >Logout</Link>
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
        <p>Copyrights at <Link to="#">Flickart</Link></p>
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
        <Link to="/newarrivals">
        <button>Shop Now</button>
        </Link>
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
