import { useEffect, useState } from 'react';
import Logo from '../images/rdc-logo-default.svg'
import { useLocation, useNavigate } from 'react-router-dom';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
export default function Header() {
  const [pageState,setPageState]=useState("sign-in")
  const auth =getAuth()
    const location=useLocation()
    const navigate = useNavigate()
    useEffect(()=>{
      onAuthStateChanged(auth,(user)=>{
        if(user){
          setPageState("profile")
        }else{
          setPageState("sign-in")
        }
      })
    },[auth])

    function pathMatchRoute(route){
      if(route===location.pathname){
        return true
      }
    }
    
    
    
    
    
    
    return (
        <div className="bg-white border-b shadow-sm sticky top-0 z-40">
            <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
             <div>
               <img src={Logo} alt='logo' 
                className='h-5 cursor-pointer'
               />
             </div>
             <div>
               <ul className="flex space-x-10">
               <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                pathMatchRoute("/") && "text-black border-b-red-500"
                
              }`}
              onClick={() => navigate("/")}
            >
              Home
            </li>
                <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                    pathMatchRoute("/offers") && " border-b-red-500"
                  }`}
                  onClick={() => navigate("/offers")}
                >
                Offers</li>
                <li
                className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent ${
                  (pathMatchRoute("/sign-in")|| pathMatchRoute("/sign-in")) && "text-black border-b-red-500"
                }
                  `}
                  onClick={() => navigate("/profile")}
                >
                {pageState}
                </li>
               </ul>
             </div>
            </header>
        </div>
    )
}
