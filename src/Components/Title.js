import React from "react";
import '../App.css';
import Image from 'react-bootstrap/Image';
import Logo from './media/logo.png';


export default function Title(){

    return(
        <>
            
            <div className="title">
               <div> 
                    <Image alt="Popcorn" 
                    height='50px'
                    src={Logo}/>  
               </div>
               <div>
                    <h1>Movie Finder</h1>
               </div>
                
            </div>
           
        </>
    )
}