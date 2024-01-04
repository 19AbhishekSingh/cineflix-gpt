 import React, { useState,useRef } from 'react'
 import {createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
 import {auth,} from "../utils/firebase"
 import Header from './Header' 
 import { checkValidData } from '../utils/validate'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
 
 const Login = () => {
    const [isSignInForm ,setIsSignInForm] = useState(true)
    const[errorMessage,setErrorMessage] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const email = useRef(null)
    const password = useRef(null) 
    const name = useRef(null)
    const handleButtonClick = () =>{
const message = checkValidData(email.current.value, password.current.value)
 console.log(message)
setErrorMessage(message)
if(message) return 
if(!isSignInForm) {
    // Sign up logic
    createUserWithEmailAndPassword(auth,email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    updateProfile(user, {
        displayName: name.current.value
      }).then(() => {
        // Profile updated!
        const {uid,email,displayName} = auth.currentUser; 
        dispatch(
            addUser({
                uid:uid,
                email:email,
                displayName:displayName}))
       
      }).catch((error) => {
        // An error occurred
        // ...
        setErrorMessage(error.message)
      });
    console.log(user)
   
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
    // ..
  });
} else {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorMessage)
  });

}
    }
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
   return (
     <div>
        <Header/>
    
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background"/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()}
    className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75'>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In":"Sign Up"}</h1>
       {!isSignInForm &&  (<input 
      ref={name}
        type="text" 
        placeholder='Full Name' className='w-full my-4 p-4 bg-gray-700 rounded-lg'/>)}
        <input 
        ref={email}
        type="text"   
        placeholder='Email Address' className='w-full my-4 p-4 bg-gray-700 rounded-lg'/> 
        <input  
          ref={password} 
        type='password'
         placeholder='Password' className='w-full p-4 my-4 bg-gray-700 rounded-lg'/>
       <p className='text-red-500 font-bold text-lg py-2 '>{errorMessage}</p>
        <button onClick={handleButtonClick} className='p-4 my-6  bg-red-700 w-full rounded-lg'>{isSignInForm ?"Sign In":"Sign Up"}</button>
        <p>{isSignInForm ? "New to Netflix?" : "Already  A User?"}<span 
        className='cursor-pointer'
        onClick={toggleSignInForm}>{isSignInForm ? " Sign Up Now":" Sign In Now"}</span></p>
    </form>  
     </div>
   )
 }
   
 export default Login 