import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
import style2 from '../css/style2.module.css';

const SignUp =()=>{

    const history=useNavigate(); 
    const [name, setName] = useState('')
    const [email, setEmail]= useState('')
    const [userID, setUserID]= useState('')
    const [password, setPassword]= useState('')
    const [repassword, setRepassword]= useState('')

    async function Submit(e){
        e.preventDefault();

        if(password===repassword){
        try{
            await axios.post("http://localhost:8000/signup",{
                name,email,userID,password,repassword
            })
            .then(res=>{
               if(res.data==="user alredy exists"){
                    alert("user alredy exists")
                }
                else{
                    history("/")
                    alert("User successfully registered, Kindly log in")   
                }
            })
            .catch(e=>{
              alert("Fucked up", e.message)
            })
        }
        catch(e){
            console.log(e);
        }
        
    }else{alert("Password does not match")}
        
    }
    return(
        <div className={style2.style2body}>
        <div className={style2.wrapper}>
        <form >
            <h1>Sign Up</h1>
            <div className={style2.inputbox}>
                <input type="text" placeholder="Name" name="name" id="name" autoComplete="off" required
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className={style2.inputbox}>
                <input type="email" placeholder="E-Mail" name="email" id= "email" autoComplete="off" required
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <div className={style2.inputbox}>
                <input type="text" placeholder="UserID" name="userID" id="userID" autoComplete="off" required
                value={userID}
                onChange={(e)=>setUserID(e.target.value)}
                />
            </div>
            <div className={style2.inputbox}>
                <input type="password" placeholder="Password" name="password" id="password" autoComplete="off" required
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                />
            </div>
            <div className={style2.inputbox}>
                <input type="password" placeholder="Re-Enter your password" name="repassword" id="repassword" autoComplete="off" required
                value={repassword}
                onChange={(e)=>setRepassword(e.target.value)}
                />
            </div>

            <button type="submit" onClick={Submit} className={style2.btn} >Create</button>
        </form>
    </div>
    </div>
    )
}
export default SignUp;