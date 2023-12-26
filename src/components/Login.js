 import React, { useState } from 'react'
 import Header from './Header' 
 const Login = () => {
    const [isSignInForm ,setIsSignInForm] = useState(true)
    const toggleSignInForm = ()=>{
        setIsSignInForm(!isSignInForm)
    }
   return (
     <div>
        <Header/>
    
        <div className='absolute'>
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/563192ea-ac0e-4906-a865-ba9899ffafad/6b2842d1-2339-4f08-84f6-148e9fcbe01b/IN-en-20231218-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="background"/>
    </div>
    <form className=' w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white bg-opacity-75'>
        <h1 className='font-bold text-3xl py-4 '>{isSignInForm ? "Sign In":"Sign Up"}</h1>
       {!isSignInForm &&  (<input 
        type="text" 
        placeholder='Full Name' className='w-full my-4 p-4 bg-gray-700 rounded-lg'/>)}
        <input 
        type="text" 
        placeholder='Email Address' className='w-full my-4 p-4 bg-gray-700 rounded-lg'/> 
        <input 
        type='password'
         placeholder='Password' className='w-full p-4 my-4 bg-gray-700 rounded-lg'/>
       
        <button className='p-4 my-6  bg-red-700 w-full rounded-lg'>{isSignInForm ?"Sign In":"Sign Up"}</button>
        <p>{isSignInForm ? "New to Netflix?" : "Already  A User?"}<span 
        className='cursor-pointer'
        onClick={toggleSignInForm}>{isSignInForm ? " Sign Up Now":" Sign In Now"}</span></p>
    </form>  
     </div>
   )
 }
   
 export default Login 