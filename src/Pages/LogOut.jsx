import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
const cookie=new Cookies();
const LogOut=()=>{
  const navigate=useNavigate();
   function handleLogOut(){
    try{
        cookie.remove('auth-token');
       navigate('/Login');
    }
    catch(err){
        console.log(err.message);
    }
   }
        
         return <div className="logout">
            <button onClick={handleLogOut}>LogOut</button>
           
         </div>
        
 
}
export default LogOut;