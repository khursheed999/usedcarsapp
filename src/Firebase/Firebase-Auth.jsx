
import app from "./Firebase-Config";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const provider = new GoogleAuthProvider();
import { useNavigate } from "react-router-dom";
import Cookies from "universal-cookie";
import Users from "../Components/Users";
const cookie=new Cookies();
const auth = getAuth(app);
const Auth=()=>{
    const navigate=useNavigate();
   async function signInWithGoogle(){
    try{
        const result= await signInWithPopup(auth,provider);
        const user=result.user;
        cookie.set('auth-token',user.refreshToken);
        // if(cookie.get('auth-token')){
        //  return <Users/>
        // }
      //  console.log(user);
       // navigate('/');
    }
    catch(error){
        console.log(error);
    }
  
   }
   if(cookie.get('auth-token')){
    return <Users/>
   }
    return <div>
        <button onClick={signInWithGoogle}>Sign in With Google</button>
    </div>
}
export default Auth;