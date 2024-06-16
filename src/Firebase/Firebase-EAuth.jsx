import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
const Auth=()=>{
   async function createUser(){
    try{
        const userCredential= await createUserWithEmailAndPassword(auth,email,password);
        const user= userCredential.user;
    }
    catch(err){
      console.log(err.message);
    }
    }
  createUser();
}
export default Auth;
// import Form from 'react-bootstrap/Form'; 
// import Button from 'react-bootstrap/Button'; 
// import React, {useState} from 'react';

// const Login=()=>{
//     const [userLogin,setUserLogin]=useState({
//         email:'',
//         password:'',
//     })
//     function onFormSubmitHandler(e){
//         e.preventDefault();
//          setUserLogin({
//             email:'',
//              password:'',
           
//          })
//     }
//        function handleChange(e){
//         const {name,value}=e.target;
//         setUserLogin(prevData=>(
//         {
//             ...prevData,
//             [name]:value
//         }
//         ))
       

//        }
//     return <div className="login">
//         <div>
//             <h3>Enter Creditional Details</h3>
//         </div>
//         <Form onSubmit={onFormSubmitHandler}>
//              <Form.Group>
//              <Form.Label htmlFor="Email">Email</Form.Label>
//             <Form.Control onChange={handleChange} 
//             type="email"
//              required name="email"
//              id="email" value={userLogin.email} 
//              placeholder="Enter Email" />
//              </Form.Group>

//            <Form.Group>
//            <Form.Label htmlFor="password">Password</Form.Label>
//             <Form.Control onChange={handleChange}
//              type="password"
//               required name="password"
//                id="password" value={userLogin.password}
//                 placeholder="Enter password" />
//            </Form.Group>

//            <div className='button'>
//            <Button variant='success' type="submit" >Upload Details</Button>
//            </div>
//     </Form>
//     </div>
// }
// export default Login;
