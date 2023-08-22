import React from "react";
import { useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Switch, Route, Link , useNavigate} from 'react-router-dom';
import style from '../css/style.module.css';

const LoginForm = ()=>{

    const history= useNavigate();

    const [userID, setUserID]= useState("");
    const [password, setPassword]= useState("");


    async function Submit(e){
        e.preventDefault();

        try{
           await axios.post("http://localhost:8000/login",{
            userID, password
           })
           
           .then(res=>{
            
            if(res.data==="User does not exist")
            {
                alert("User does not exist")
            }
            else if(res.data==="Invalid password"){
                alert("Invalid password")
            }

            else{
                const username= res.data.data1;
                const receivedToken= res.data.data2;
                sessionStorage.setItem('token', receivedToken);
                history("/",{state:{username}})
            }
           })
           .catch(e=>{
            alert("wrong details")
           })
        }
        
        catch(e){
            console.log(e);
        }
    }

    return(
        <>
        <div className={style.stylebody}>
        <div className={style.wrapper}>
        <form >
            <h1>Login</h1>
            <div className={style.inputbox}>
                <input type="text" placeholder="UserID" autoComplete="off" name="userID" id="userID" required
                value={userID}
                onChange={(e)=> setUserID(e.target.value)}
                />
                <i className='bx bxs-user'></i>
            </div>
            <div className={style.inputbox}>
                <input type="password" placeholder="Password" name="password" id="password" required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                />
                <i className='bx bxs-lock-alt'></i>
            </div>

            <button type="submit" onClick={Submit} className={style.btn}>Login</button>
             
            <div className={style.registerlink}>
                <p>Don't have an account?<Link to="/signup">Register</Link></p>
            </div>
        </form>
      </div>
      </div>
      </>
    )
}

export default LoginForm;