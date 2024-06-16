import { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookie=new Cookies();
const Protected=(props)=>{
  const[isAuth,setIsAuth]=useState(cookie.get('auth-token'));

const navigate=useNavigate();

   
    const {Component}=props;
  useEffect(()=>{
    if(!isAuth){
      navigate('/Login');
   }
  },[isAuth]);
 

 return <div>
       <Component />
 </div>
}
export default Protected;