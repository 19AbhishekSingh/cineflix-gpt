import { createBrowserRouter , RouterProvider } from 'react-router-dom'
import { getAuth } from "firebase/auth";

import {auth} from "../utils/firebase"

import Login from './Login'
import Browse from './Browse'



const Body = () => {
   
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path:"/browse",
            element: <Browse/> 
        }
    ])


  return (
    <div>
        <RouterProvider router={appRouter}/>
        
    </div>
  )
}

export default Body